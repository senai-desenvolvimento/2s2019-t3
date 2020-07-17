import React, {Component} from 'react'

class Label extends Component{
    render() {
        return(
            <h1 className={this.props.className}>
              {this.props.texto}
            </h1>
        );
    }
}

export default Label;