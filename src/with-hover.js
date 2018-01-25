import React, { Component } from 'react'
import PropTypes from 'prop-types';
import wrapDisplayName from 'recompose/wrapDisplayName'

const defaultTransform = (hover) => ({ hover })

const defaultContainerStyle = {
  width: '100%',
  height: '100%',
  padding: 0,
  border: 0,
}

const withHover = ({
  transform = defaultTransform,
  containerStyle = defaultContainerStyle,
} = {}) => (BaseComponent) => class extends Component {
  static displayName = wrapDisplayName(BaseComponent, 'withHover')

  static propTypes = {
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  state = {
    hover: false,
  }

  onMouseEnter = () => {
    if (!this.state.hover) { this.setState({ hover: true }) }
  }

  onMouseLeave = () => {
    if (this.state.hover) { this.setState({ hover: false }) }
  }

  render() {
    return (
      <div
        style={containerStyle}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <BaseComponent
          {...transform(this.state.hover)}
          {...this.props}
        />
      </div>
    )
  }
}

export default withHover
