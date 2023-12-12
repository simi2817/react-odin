import { test, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import List from '../src/components/test/List';

test('list contains 5 animals', () => {
    render(<List/>);
    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5);
});