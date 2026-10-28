import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatWidget, { renderWithLinks } from "./ChatWidget";

describe("ChatWidget", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("sends a question and shows the answer with source links", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          answer: "Yes, we supply dialysis chairs (/products/dialysis-chair).",
          sources: [{ title: "Dialysis Chair", url: "/products/dialysis-chair" }],
        }),
      ),
    );
    vi.stubGlobal("fetch", fetchMock);
    render(<ChatWidget />);

    await user.click(screen.getByRole("button", { name: "Open product assistant" }));
    await user.type(screen.getByRole("textbox", { name: "Your question" }), "dialysis chairs?");
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(await screen.findByText(/we supply dialysis chairs/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Dialysis Chair" })).toHaveAttribute("href", "/products/dialysis-chair");
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).message).toBe("dialysis chairs?");
  });

  it("turns markdown links and bare site paths in the answer into links", () => {
    render(<p>{renderWithLinks("See [Elisio-HX](/products/elisio-hx) or /contact.")}</p>);

    expect(screen.getByRole("link", { name: "Elisio-HX" })).toHaveAttribute("href", "/products/elisio-hx");
    expect(screen.getByRole("link", { name: "/contact" })).toHaveAttribute("href", "/contact");
    expect(screen.queryByText(/\[Elisio-HX\]/)).not.toBeInTheDocument();
  });

  it("shows the server's error message, e.g. when rate limited", async () => {
    const user = userEvent.setup();
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(new Response(JSON.stringify({ error: "Too many questions" }), { status: 429 })),
    );
    render(<ChatWidget />);

    await user.click(screen.getByRole("button", { name: "Open product assistant" }));
    await user.type(screen.getByRole("textbox", { name: "Your question" }), "hi");
    await user.click(screen.getByRole("button", { name: "Send" }));

    expect(await screen.findByText("Too many questions")).toBeInTheDocument();
  });
});
