import React, {Component} from 'react'

const WrapperEnabledWithDisabledView = (DisabledView) => {
  class Enabled extends Component {
    render() {
      const {children} = this.props
      return (
        this.props.isEnabled ?
        <div className="wrapper">
          {children}
        </div>: <DisabledView props={children.props}/>
      );
    }
  }
  return Enabled
}

export default WrapperEnabledWithDisabledView;
