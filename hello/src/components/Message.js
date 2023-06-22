import React, {Component} from 'react'

class Message extends Component
{
    constructor()
    {
        super()
        this.state = {
            message: 'Welcome Home baby'
        }    
    }

    changeMessage()
    {
        this.setState ({
            message: 'I Love You'
        })
    }


    render()
    {
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={ () => this.changeMessage()}>Nams</button>
            </div>
        )
    }
}

export default Message