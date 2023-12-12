import { render, screen } from '@testing-library/react';
import { describe, test, expect } from "vitest";
import CustomButton from '../src/components/test/CustomButton';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

function setup(jsx) {
    return {
        user: userEvent.setup(),
        ...render(jsx),
    }
}
describe('CustomButton component', () => {
    test('checking the button element present', () => {
        render(<CustomButton onClick={() => {}}/>);
        const button = screen.getByRole('button', { name: 'Click me' });
        expect(button).toBeInTheDocument();
    });
    test('should call the onClick function when clicked', async () => {
        const onClick = vi.fn();
        /*
            const user = userEvent.setup()
            render(<CustomButton onClick={onClick} />);
        */
       //line 22 and 23 replaced with below - 
        const {user} = setup((<CustomButton onClick={onClick} />))

        const button = screen.getByRole('button', { name: 'Click me' });

        await user.click(button);
        expect(onClick).toHaveBeenCalled();
    });
    test('should not call the onClick function when it is not clicked', () => {
        const onClick = vi.fn();
        render(<CustomButton onClick={onClick}/>);
        expect(onClick).not.toHaveBeenCalled();
    });
});