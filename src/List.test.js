import List from './List';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'; 

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="" cards={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List header="" cards={[]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});