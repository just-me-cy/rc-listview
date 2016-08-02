import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import EditableListview from '../src/EditableListview';
import ReactTestUtils from 'react-addons-test-utils';

describe(' 渲染', () => {
  const DATA = [
    {
      headerName: '办公用品',
      isOpened: false,
      items: [{
        title: '铅笔',
      }, {
        title: '橡皮',
      },
        {
          title: '笔记本',
        },
        {
          title: '文件夹',
        },
        {
          title: '墨水',
        },
        {
          title: '钢笔',
        }],
      height: 80,
    },
    {
      headerName: '书籍',
      isOpened: true,
      items: [{
        title: 'nodejs',
      },
        {
          title: '设计模式',
        },
        {
          title: 'javaScript',
        },
        {
          title: 'css',
        },
        {
          title: 'ios',
        },
        {
          title: 'andriod',
        }],
      height: 80,
    },
    {
      headerName: 'section3',
      isOpened: true,
      items: [{
        title: 'items1',
      },
        {
          title: 'items2',
        },
        {
          title: 'items3',
        },
        {
          title: 'items4',
        },
        {
          title: 'items5',
        },
        {
          title: 'items6',
        }],
      height: 80,
    },
    {
      headerName: 'section4',
      isOpened: false,
      items: [{
        title: 'items1',
      },
        {
          title: 'items2',
        },
        {
          title: 'items3',
        },
        {
          title: 'items4',
        },
        {
          title: 'items5',
        },
        {
          title: 'items6',
        }],
      height: 80,
    },
    {
      headerName: 'section5',
      isOpened: false,
      items: [{
        title: 'items1',
      },
        {
          title: 'items2',
        },
        {
          title: 'items3',
        },
        {
          title: 'items4',
        },
        {
          title: 'items5',
        },
        {
          title: 'items6',
        }],
      height: 80,
    },
  ];

  it('works for init Render with datas', () => {
    const editableListview = render(<EditableListview data={DATA} headerAttrName="headerName" itemsAttrName="items" />);
    expect(editableListview.find('div.listHeader').length).to.equal(5);
  });

  it('works for expandable when header was clicked', () => {
    const editableListview = mount(<EditableListview data={DATA} headerAttrName="headerName" itemsAttrName="items" />);
    editableListview.find('div.listHeader').at(0).simulate('click');
    // console.log(editableListview.find('div.listItemContent').at(0).debug());
    expect(editableListview.find('span.icon').at(0).hasClass('arrow-down')).to.equal(true);
  });
});

