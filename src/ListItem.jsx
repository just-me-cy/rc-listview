import React from 'react';

export default class ListItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.string.isRequired,
  }

  render() {
    const { item } = this.props;
    return (
      <p>{item}</p>
      );
  }
}
