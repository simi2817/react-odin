import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputValue from '../src/components/test/InputValue';
import Input from '../src/components/test/Input';
import jest from 'jest-mock';

describe('testing InputValue component', () => {
    test('input value is updated correctly', async () => {
        render(<InputValue />);
    
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'React');
    
        expect(input.value).toBe('React');
    });
    
    test('call the callback every time input value is changed', async () => {
        const handleChange = jest.fn();
        render(<Input handleChange={handleChange} inputValue="" />);

        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'React');

        expect(handleChange).toHaveBeenCalledTimes(5);
    });
});