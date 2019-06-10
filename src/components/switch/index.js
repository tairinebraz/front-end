import React from 'react'

class Switch extends React.Component {

    constructor(props) {
        super (props)

        this.state = {
            value: false
        }

        this.handleSwitch = this.handleSwitch.bind(this)
    }

    handleSwitch(event) {

        this.setState({ value: event.target.checked })
        this.props.handleSwitch(event.target.checked)
    }

    render() {

        return (
            <div className="custom-control custom-switch">
                <input value={this.state.value} onChange={this.handleSwitch} type="checkbox" className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" for="customSwitch1">{this.props.children}</label>
            </div>
        )
    }
}

export default Switch
