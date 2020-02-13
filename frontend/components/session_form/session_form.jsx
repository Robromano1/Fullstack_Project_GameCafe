import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: "",
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map(error => (
                    <li key={`error-${error.id}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { formType, navLink, title } = this.props;
        if (formType === 'Signup') {
        
            return (
              	<div className="outer-container">
                    <div className="signup-form-container theme-dark">
                        <form onSubmit={this.handleSubmit}>
                            {this.renderErrors()}

                            <div className="wrapper">
                                <h2 className="message">{title}</h2>
                                <div className="email-field">
                                    <h5>EMAIL</h5>
                                        <input type="email"
                                            value={this.state.email}
                                            onChange={this.update('email')} 
                                        />
                                </div>
                                <div className="username-field">
                                    <h5>USERNAME</h5>
                                        <input type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')} 
                                        />
                                </div>
                                <div className="password-field">
                                    <h5>PASSWORD</h5>
                                        <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')} 
                                        />
                                </div>
                                <br/>
                                <div className="sub-button">
                                    <button className="session-submit" type="submit" value={formType}>
                                        <div className="content-text">Continue</div>
                                    </button>
                                </div>
                                <br />
                                <div className="alt-page">
                                    <button className="alt"></button>
                                        <div className="content">{navLink}</div>
                                </div>
                                {/* <p className="contents">{navLink}</p> */}
                            </div>
                        </form>
                    </div>       
                </div>
                
            )
        } else if(formType === 'Login') {
            return (

                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <h2 className="title">{title}</h2>

                        {this.renderErrors()}

                        <div className="login-form theme-dark">
                            <label className="email">Email:
                                <input type="email"
                                    value={this.state.email}
                                    onChange={this.update('email')} 
                                />
                            </label>
                            <label className="password">Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')} 
                                />
                            </label>
                            <input type="submit" value={formType} />
                            <br />
                            {/* {navLink} */}
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default SessionForm;