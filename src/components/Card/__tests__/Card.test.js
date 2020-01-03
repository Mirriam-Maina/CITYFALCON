import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme/build';


import Card from '../Card';
import setupTests from '../../../services/setupTests';


const setUp = () => {
    const props = {
        score: '56',
        timeDiff: '3 minutes', 
        title:'Tim Cook and President Trump could tour Apple’s Mac Pro factory in Texas',
        logo:'https://cityfalconproduction.blob.core.windows.net/autotweetmedia/domains/logos/6117/thumb.png?1535639697',
        openArticle: jest.fn(),
        toggleDrawer: jest.fn(),
        id: 720927472,
        openDrawerID: '',
        openDrawer: false,
        domainName: 'CultofMac',
        screenName:'',
        authorImage:'',
        followerCount: '',
        isTweet: false
    };

    const wrapper = shallow(<Card {...props} />);
    return {
      props,
      wrapper,
    };
};

describe('Card Component', () => {
    const { wrapper, props} = setUp();

    it('should render card', () => {
        const card = wrapper.find('.card')
        expect(card.exists()).toEqual(true);
    });

    it('should toggle dropDown', () => {
        const newProps = {...props, openDrawer: true, openDrawerID:720927472}
        const card = mount(<Card {...newProps}/>)
        const dropDown = card.find('.readmore');
        expect(dropDown.hasClass('true')).toEqual(true)
    })
});
