# rc-listview
listview based on react

### Install
```
$npm install rc-listview
```
### 属性配置
- data: Array [{headerName, isOpened, items:[{title,..}], height, ...}] 
- headerAttrName: String listview每个子元素的标题头属性
- itemsAttrName: String listView每个子元素内容属性

```jsx
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
];

  render(<EditableListview data={DATA} headerAttrName="headerName" itemsAttrName="items" />, root);
```
