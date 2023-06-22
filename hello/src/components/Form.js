import React, { Component } from 'react'

export class 
Form extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            username : '',
            comments : '',
            quality: 'Boring'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleQualityChange = event =>{
        this.setState({
            quality: event.target.value
        })
    }

    handleSummit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.quality}`)
        event.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.handleSummit}>
        <div>
            <label>UserName</label>
            <input 
            type='text' 
            value={this.state.username} 
            onChange={ this.handleUsernameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea 
            value={this.state.comments}
            onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>hubby</label>
            <select value={this.state.quality} onChange={this.handleQualityChange}>
                <option value='Loving'>Loving</option>
                <option value='Boring'>Boring</option>
                <option value='Handsome'>Handsome</option>
            </select>
        </div>
        <button type='summit'>Summit</button>
      </form>
    )
  }
}

export default 
Form