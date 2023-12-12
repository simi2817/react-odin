import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Green from '../src/components/test/Green';
import userEvent from "@testing-library/user-event";

describe('Green', () => {
    it('renders correct heading', () => {
        render(<Green />);
        expect(screen.getByRole("heading").textContent).toMatch(/magnificent monkeys/i);
    });
});

describe('Green Component', () => {
    it('renders magnificent monkeys', () => {
        //// since screen does not have the container property, we'll destructure render to obtain a container for this test
        const { container } = render(<Green />);
        expect(container).toMatchSnapshot();
    });

    it('renders radical rhinos after button click', async() => {
        const user = userEvent.setup();
        render(<Green />);
        const button = screen.getByRole("button", { name: "Click Me" });
        await user.click(button);
        expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
        screen.debug();
    });
});