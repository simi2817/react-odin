import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { test, expect } from 'vitest';
import Greeting from '../src/components/test/Greeting.jsx';

test('renders a message', () => {
    const { asFragment, getByText } = render(<Greeting/>);
    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <h1>
          Hello, world!
        </h1>
      </DocumentFragment>
    `);
    expect(getByText('Hello, world!')).toBeInTheDocument();
})