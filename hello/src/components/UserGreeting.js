import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn : true
        }
    }
    render() {

        let message
        if (this.state.isLoggedIn)
        {
            message = <div>Welcome Home Hubby </div>
        }

        else
        {
            message = <div>Bye Sweetheart. Take Care</div>
        }

        return <div>{message}</div>


        // if(this.state.isLoggedIn)
        // {
        //     return (
        //         <div>Welcome Hubby</div>
        //     )
        // }
        // else
        // {
        //     return (
        //             <div>Byeee Sweetheart</div>
        //     )

        // }
  }
}

export default UserGreeting