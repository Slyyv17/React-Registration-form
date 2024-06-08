import React, { Component } from "react";


class LoginForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          email: '',
          password: ''
      }
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { email, password } = this.state;

        if (email === '' || password === '') {
            alert('Please fill in both the email and password fields.');
        } else {
            alert('Welcome Back');
        }
    }
    render() {
        const { email, password } = this.state
        return (
            <main>
                <section>
                    <h2> Welcome Back </h2>
                    <button className="sign-up"> register </button>
                </section>
                <form onSubmit={this.handleSubmit}>
                <h1> Sign in </h1>
                <div className="inputs">
                    <input type="text" value={email} onChange={this.handleEmailChange} placeholder="Enter Email" />
                </div>

                <div className="inputs">
                    <input type="password" value={password} onChange={this.handlePasswordChange} placeholder="Enter Password" />
                </div>

                <button type="submit"> submit </button>
                </form> 
            </main>
        
    ) 
  }
}

export default LoginForm;
