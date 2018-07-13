import React from 'react';
import { Redirect } from 'react-router-dom';
import validation from '../services/validation';

const HARDCODE_CREDENTIALS = {
    email: 'test@email.com',
    password: 'test'
};

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDashboard: false,
            credentials: {
                email: {
                    type: 'email',
                    val: '',
                    valid: true,
                    placeholder: 'Email',
                    validation: validation.email
                },
                password: {
                    val: '',
                    placeholder: 'Password',
                    type: 'password'
                }
            },
        };
        this.login = this.login.bind(this);
        this.change = this.change.bind(this);
    }
    change(event) {
        const value = event.target.value;
        const id = event.target.id;
        this.setState((prev) => {
            prev.credentials[id].val = value;
            return prev;
        });
    }
    login() {
        const creds = Object.entries(this.state.credentials);
        creds.forEach(cred => {
            if (cred[1].validation) {
                console.log(cred[1].validation(cred[1].val));
            }
        });
        if (true) {
            this.setState({
                toDashboard: true
            });
        }
    }
    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div>
                <div className="text-center">
                <h1>Login page</h1>
                <form name="LoginForm" className="login-form">
                    <div className="form-group">
                        <input type="text" onChange={this.change}
                               className="form-control" id="email"
                               placeholder={this.state.credentials.email.placeholder}
                               value={this.state.credentials.email.val} />
                        {this.state.credentials.email.valid?
                            '' : <small>Email is invalid.</small>
                        }
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.change}
                               className="form-control" id="password"
                               placeholder={this.state.credentials.password.placeholder}
                               value={this.state.credentials.password.val} />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-success"
                                onClick={this.login}>Login</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}