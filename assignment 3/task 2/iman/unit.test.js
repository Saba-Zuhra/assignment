/** @jest-environment jsdom */
import renderer from 'react-test-renderer'
import AppShell from "../../pages/appShell"
import SearchDesktop from '../../components/Search/SearchDesktop'
import SearchMobile from '../../components/Search/SearchMobile'

describe('App Shell', () => {
    test('App Shell', () => {
        const tree = renderer.create(<AppShell />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('SearchMobile', () => {
    test('SearchMobile', () => {
        const tree = renderer.create(<SearchMobile />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

describe('SearchDesktop', () => {
    test('SearchDesktop', () => {
        const tree = renderer.create(<SearchDesktop />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
