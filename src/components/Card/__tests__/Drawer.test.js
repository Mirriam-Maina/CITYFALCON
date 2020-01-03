import React from 'react';
import { shallow, mount } from 'enzyme/build';
import setupTests from '../../../services/setupTests';
import Drawer from '../Drawer';
import expect from 'expect';


const setUp = () => {
    const props = {
        id: 720927472,
        openDrawerID: 720927472,
        openDrawer: true,
    };

    const wrapper = shallow(<Drawer {...props} />);
    return {
      props,
      wrapper,
    };
};

describe('Drawer Component', () => {
    const { wrapper, props} = setUp();
    it('should render drawer', () => {
        const drawer = wrapper.find('.drawer')
        expect(drawer.exists()).toEqual(true);
    });
});
