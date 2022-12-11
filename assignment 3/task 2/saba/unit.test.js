/** @jest-environment jsdom */
import renderer from 'react-test-renderer'
import Checkout from '../../pages/checkout'
import { render, screen } from '@testing-library/react';

describe('Checkout', () => {
    test('Snapshot', () => {
        const tree = renderer.create(<Checkout />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    test('Tagline Text', () => {
        render(<Checkout />)
        const element = screen.getByText(/Coming soon!/i);
        expect(element.className).toBe('MuiTypography-root MuiTypography-h4 MuiTypography-colorPrimary MuiTypography-gutterBottom')
    })

    test('Tagline Style', () => {
        render(<Checkout />);
        const h1 = screen.getAllByText((_, element) => element.tagName.toLowerCase() === 'div')
        expect(h1[h1.length - 1].innerHTML).toBe('<h1 class="MuiTypography-root MuiTypography-h4 MuiTypography-colorPrimary MuiTypography-gutterBottom">Coming soon!</h1>');
    })
})
