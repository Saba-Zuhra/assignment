/** @jest-environment jsdom */
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import Search from "../../components/Search/Search"

describe('Search', () => {
    test('Search', () => {
        const tree = renderer.create(<Search />).toJSON()
        expect(tree).toMatchSnapshot();
    })

    test('Search class', () => {
        render(<Search />);
        const button = screen.getByText((_, element) => element.tagName.toLowerCase() === 'button')
        expect(button.className).toBe('MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit')
    })

    test('Search Span Tag', () => {
        render(<Search />);
        const span = screen.getAllByText((_, element) => element.tagName.toLowerCase() === 'span')
        expect(span[0].className).toBe('MuiIconButton-label RSFSearchButton-large-2')
    })
})
