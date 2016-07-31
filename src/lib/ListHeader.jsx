import React, { PropTypes } from 'react';

export default class ListHeader extends React.Component {
  static propTypes = {
    handleToggle: PropTypes.func.isRequired,
    headerIdx: PropTypes.number.isRequired,
    header: PropTypes.string.isRequired,
    isOpened: PropTypes.bool,
  }

  handleClick(headerIdx) {
    const { handleToggle } = this.props;
    handleToggle(headerIdx);
  }

  render() {
    const { header, headerIdx, isOpened } = this.props;

    return (
      <div ref="header" className="listHeader" onClick={() => { this.handleClick(headerIdx); }}>
        <span className={isOpened ? 'icon arrow-down' : 'icon arrow-right'}></span>{header}</div>
      );
  }
}
