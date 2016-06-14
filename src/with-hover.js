import React, { Component, PropTypes } from 'react'
import wrapDisplayName from 'recompose/wrapDisplayName'

const withHover = ({
  transform = ((hover) => ({ hover })),
  containerStyle = ({
    width: '100%',
    height: '100%',
    padding: 0,
    border: 0,
  }),
} = {}) => (BaseComponent) => class extends Component {
  static displayName = wrapDisplayName(BaseComponent, 'withHover')

  static propTypes = {
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  }

  state = {
    hover: false
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
