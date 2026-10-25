import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductsClient from "./ProductsClient";
import { products } from "@/data/products";

// Component tests: render the component, then use it the way a visitor would
// (type, click) and check what appears on screen. We find elements by their
// visible text or role, not by CSS classes, so styling changes don't break tests.

function renderProducts() {
  const user = userEvent.setup();
  render(<ProductsClient />);
  return { user };
}

// The "Showing X of Y products" line
function shownCount() {
  return screen.getByText(/^Showing/).querySelector("strong")?.textContent;
}

describe("ProductsClient", () => {
  it("shows every product at first", () => {
    renderProducts();

    expect(shownCount()).toBe(String(products.length));
  });

  it("filters products as you type in the search box", async () => {
    const { user } = renderProducts();

    await user.type(screen.getByPlaceholderText(/Search medical equipment/), "Elisio-HX");

    expect(screen.getByRole("link", { name: "Elisio-HX" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Bicarbonate Mixture DIA-MIX" })).not.toBeInTheDocument();
  });

  it("filters by category and shows that category's subcategories", async () => {
    const { user } = renderProducts();
    const expected = products.filter((p) => p.category === "IVD Products").length;

    await user.click(screen.getByRole("button", { name: "IVD Products" }));

    expect(shownCount()).toBe(String(expected));
    expect(screen.getByRole("button", { name: "Test Kits" })).toBeInTheDocument();
  });

  it("shows an empty state, and Reset Filters brings everything back", async () => {
    const { user } = renderProducts();

    await user.type(screen.getByPlaceholderText(/Search medical equipment/), "zzz-no-such-product");
    expect(screen.getByText(/No medical equipment found/)).toBeInTheDocument();

    // Two Reset buttons are visible (filter bar + empty state); either works
    await user.click(screen.getAllByRole("button", { name: /Reset Filters/ })[0]);

    expect(shownCount()).toBe(String(products.length));
  });
});
