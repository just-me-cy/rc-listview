import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

export default class ListItemWrap extends Component {
  static propTypes = {
    itemArr: PropTypes.array.isRequired,
  }

  render() {
    const { itemArr } = this.props;
    return (
      <div className="listItemContent">
      {[...itemArr].map((item, index) => {
        return <ListItem key={index} item={item.title} />;
      })}
      </div>
      );
  }
}
