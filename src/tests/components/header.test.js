import React from "react";
import ReactShallowRenderer from 'react-test-renderer';
import Header from "../../components/Header";

test('Should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    console.log(renderer.getRenderOutput());
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
