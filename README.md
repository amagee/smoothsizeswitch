# Smooth Size Switch

CSS transitions do not work on element widths or heights
when transitioning between two auto sizes. This component
allows you to behave as if that restriction didn't exist,
by manipulating the elements' `max-width` and `max-height`
properties when the content is changed.

Idea stolen from [here](https://codepen.io/kriede/details/RVYXZW).

Usage example:

Installation:

    npm install smoothsizeswitch

Code:

    import React from 'react';
    import { SmoothSizeSwitch } from 'smoothsizeswitch';

    class MyComponent extends React.Component {
      constructor() {
        super();
        this.state = {selectedIndex: 0};
      }

      render() {
        return <div>
          <SmoothSizeSwitch
            style={{
              transition: 'all 250ms ease-out',
              backgroundColor: 'lightBlue'
            }}
            items={[
              <div onClick={() => this.setState({selectedIndex: 1})}>
                <p>123</p>
                <p>123</p>
                <p>123</p>
              </div>,
              <div onClick={() => this.setState({selectedIndex: 0})}>
                <p>234</p>
                <p>234</p>
                <p>234</p>
                <p>234</p>
                <p>234</p>
                <p>234</p>
                <p>234</p>
                <p>234</p>
              </div>,
            ]}
            selectedIndex={this.state.selectedIndex}
          />
        </div>;
      }
    }

