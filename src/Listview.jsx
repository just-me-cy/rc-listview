import React, { Component, PropTypes } from 'react';
import ListHeader from './ListHeader';
import ListItemWrap from './ListItemWrap';
import { Motion, spring } from 'react-motion';
import './Listview.less';

export default class Listview extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    headerAttrName: PropTypes.string.isRequired,
    itemsAttrName: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(index) {
    let newData = [...this.state.data];
    newData[index].isOpened = !newData[index].isOpened;
    this.setState({
      data: newData,
    });
  }
  render() {
    const { headerAttrName, itemsAttrName } = this.props;
    const { data } = this.state;

    return (
      <div ref="listview">
        <ul className="listviewWrap">
          {
            data.map((dataItem, index) => {
              const header = dataItem[headerAttrName];
              const itemArr = dataItem[itemsAttrName];
              const { isOpened, height } = dataItem;

              return (
                <Motion
                  key={index}
                  defaultStyle={{ h: 0 }}
                  style={{ h: spring(isOpened ? height : 0) }}
                >
                  {
                  ({ h }) => (
                    <div key={index}>
                      <li>
                        <ListHeader
                          header={header}
                          headerIdx={index}
                          isOpened={isOpened}
                          handleToggle={() => this.handleToggle(index)}
                        />
                        <div className="listContent" style={{ height: `${h}`, overflow: 'scroll' }}>
                          <ListItemWrap
                            itemArr={itemArr}
                          />
                        </div>
                      </li>
                    </div>
                  )
                  }
                </Motion>
                );
            })
          }
        </ul>
      </div>
      );
  }
}
