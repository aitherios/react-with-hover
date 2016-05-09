import React, { Component, PropTypes } from 'react'

export default (
  transform = (hover) => ({ hover })
) => (InnerComponent) =>
  class WithHover extends Component {
    static propTypes = {
      onMouseEnter: PropTypes.func,
      onMouseLeave: PropTypes.func,
    }

    state = {
      hover: false,
    }

    onMouseEnter(...args) {
      if (!this.state.hover) { this.setState({ hover: true }) }
      if (this.props.onMouseEnter) {
        this.props.onMouseEnter(...args)
      }
    }

    onMouseLeave(...args) {
      if (this.state.hover) { this.setState({ hover: false }) }
      if (this.props.onMouseLeave) {
        this.props.onMouseLeave(...args)
      }
    }

    render() {
      return (
        <InnerComponent
          {...transform(this.state.hover)}
          {...this.props}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      )
    }
  }
