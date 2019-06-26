import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import { login } from '../redux/reducers/user'

class LoginForm extends Component {
    constructor(props){
        super()

        this.state = {
            email: "",
            password: ""
        
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let { email, password } = this.state
        this.props.login({email, password})

    }

    render() {
        return (
            <div>
                <div
                    className="login-box"
                    style={{
                    height: '90vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                      }}
                      > 
                      <h1>Login</h1>
                <input
                    name="email"
                    type="text"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}/>
                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                
                <Link to="posts">
                <button onClick={this.handleSubmit} 
                style={{ width: '170px' }}
                >
                    login
                </button>
                </Link>     

                <div> 
                    <h5> Don't have an account? Register below</h5>
                    <Link to='register'>  
                    <button> Register </button>
                    </Link>

                </div>

                </div>
            </div>
        )
    }
}


export default connect(null, {login})(LoginForm) 