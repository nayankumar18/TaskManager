import {Component} from 'react'

import { Link } from 'react-router-dom';

import './login.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://img.freepik.com/free-vector/task-management-abstract-concept-illustration_335657-2127.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.onSubmit}>
          <img
            src="https://media.istockphoto.com/id/1407633532/vector/forget-password-icon-account-protection-security-key-danger-warning-wrong-password-design.jpg?s=612x612&w=0&k=20&c=ndcQG3ade6MLqbFbD5-pGgJSM-I76IFxHXAUmeY9Bfw="
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <Link to="/home" className="login-button">
            Login
          </Link>
        </form>
      </div>
    )
  }
}

export default LoginForm
