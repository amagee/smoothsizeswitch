import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export class SmoothSizeSwitch extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired,
    selectedIndex: PropTypes.number.isRequired,

    style: PropTypes.object,
    className: PropTypes.any,
  }

  constructor() {
    super();
    this.state = {width: null, height: null};
  }

  render() {
    let self = this;

    return <div 
        style={{
          minWidth: this.state.width,
          maxWidth: this.state.width, 
          minHeight: this.state.height,
          maxHeight: this.state.height,
          overflow: 'hidden',
          ...this.props.style
        }}
        className={this.props.className}>
      {this.props.items.map(function(item, i) {
        return <div 
            key={i}
            ref={`item_${i}`}
            style={{
              overflow: 'hidden',
              ...(i !== self.props.selectedIndex ? {maxWidth: 0, maxHeight: 0} : null)
            }}>
          {item}
        </div>;
      })}
    </div>;
  }

  componentWillReceiveProps(nextProps) {
    /**
     * Two steps:
     *
     * 1. Figure out the current size, and set min and max widths and heights to that size.
     * 2. Update the min and max widths and heights to the new desired values. Since
     *    we're changing to and from manual values, the animation will trigger.
     */
    this.setState(this.getSizeAtIndex(this.props.selectedIndex),
      () => this.setState(this.getSizeAtIndex(nextProps.selectedIndex)));
  }

  getSizeAtIndex(index) {
    const ref = this.refs[`item_${index}`];
    return {
      width: ref.scrollWidth + 'px',
      height: ref.scrollHeight + 'px'
    };
  }
}

