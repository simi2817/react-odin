import {
    render,
    screen,
    waitForElementToBeRemoved,
} from '@testing-library/react';
import { describe, test, expect } from "vitest";
import Fetch from '../src/components/test/Fetch';
import jest from 'jest-mock';

const user = { name: 'Jack', email: 'jack@email.com' };

window.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(user),
    });
});

describe('Testing Fetch component', () => {
    test('loading text is shown while API request is in progress', async () => {
        render(<Fetch />);
        const loading = screen.getByText('Loading...');
        expect(loading).toBeInTheDocument();
        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });
    test("user's name is rendered", async () => {
        render(<Fetch />);
        const username = await screen.findByText('Jack');
        expect(username).toBeInTheDocument();
    });
    test('error message is shown', async () => {
        window.fetch.mockImplementationOnce(() => {
            return Promise.reject({ message: 'API is down'});
        });
        render(<Fetch/>);

        const errorMessage = await screen.findByText('API is down');
        expect(errorMessage).toBeInTheDocument();
    });
});