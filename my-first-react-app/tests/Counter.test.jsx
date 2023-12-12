import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Counter from '../src/components/test/Counter';
import userEvent from "@testing-library/user-event";
describe('Testing Counter component', () => {
    test('counter is incremented on up button click', async () => {
        render(<Counter />);
        
        const counter = screen.getByTestId('counter');
        const upBtn = screen.getByText('Up');
        
        await userEvent.click(upBtn);
        await userEvent.click(upBtn);

        expect(counter.textContent).toEqual('2');
    });
    test('counter is decremented on down button click', async () => {
        render(<Counter />);
        
        const counter = screen.getByTestId('counter');
        const downBtn = screen.getByText('Down');
        
        await userEvent.click(downBtn);
        await userEvent.click(downBtn);

        expect(counter.textContent).toEqual('-2');
    });
});