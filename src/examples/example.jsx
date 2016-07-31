import React from 'react';
import { render } from 'react-dom';
import EditableListview from '../lib/EditableListview';
// import { DATA } from './data';

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

class App extends React.Component {
  render() {
    return (
      <EditableListview data={DATA} headerAttrName="headerName" itemsAttrName="items" />
      );
  }
}

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

render(<App data={DATA} />, root);
