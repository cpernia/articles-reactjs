import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import './Auth.css';

import * as styles from './AuthStyles';
import { trySignIn, trySignUp } from "./AuthActions";

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: null
        }
    }

    componentWillMount() {
        if (this.props.location.pathname.includes('signup')) {
            document.title='Articles | Sign Up';
            this.setState({ mode: 'Sign Up' })
        } else {
            document.title='Articles | Sign In';
            this.setState({ mode: 'Sign In' })
        }
    }

    onSubmit(values) {
        const { history } = this.props;
        if (this.state.mode === 'Sign In') {
            this.props.trySignIn(values, history);
        } else {
            this.props.trySignUp(values, history);
        }
    }

    renderField({input, label, type, meta: { touched, error, warning }}){
        return (
            <div>
                <div className="input-wrapper from-auth">
                    <input {...input} placeholder={label} type={type} />
                </div>
                {touched && ((error && <span className='form-error-message'>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} style={{ height: '100%' }}>
                <div className="separator top"></div>
                <main style={styles.authStyles.main}>
                    <div id="slogan-wrapper">
                        <h2>Publish the content you want, whenever you want</h2>
                    </div>
                    <div id="sign-wrapper">
                        <div className="header">
                            <div>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                     viewBox="0 0 331 104" xmlSpace="preserve">
                                <style type="text/css">
                                    { `.st0 { fill: #424242 }` }
                                    { `.st1 { fill: url(#SVGID_1_) }` }
                                </style>
                                <path className="st0" d="M114.6,100.9L75.9,3h-35l25.9,62.2c0.7,1.7,0,3.6-1.7,4.4L47.7,78l-3.2,7.9l22.9-10.7c1.6-0.8,3.5,0,4.2,1.6
                                    L81,99.4c0.7,1.5,2.2,2.5,3.8,2.5h29.1C114.4,101.9,114.8,101.4,114.6,100.9z"/>
                                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0.4439" y1="52.0148" x2="76.9769" y2="52.0148">
                                    <stop  offset="0" style={{bstopColor: '#3263CF'}}/>
                                    <stop  offset="1" style={{stopColor: '#00A0CB'}}/>
                                </linearGradient>
                                <path className="st1" d="M39.8,99.3l37-93.9C77.6,3.3,76,1,73.7,1.1L39.9,2c-0.9,0-1.8,0.6-2.1,1.5L0.6,99.3c-0.7,1.8,0.6,3.7,2.5,3.7
                                    h31.3C36.8,102.9,38.9,101.5,39.8,99.3z"/>
                                <path className="st0" d="M146.7,60.3c0,1.6-1.5,2.9-3.1,2.6c-0.6-0.1-1.2-0.1-1.8-0.1c-1.4,0-2.7,0.3-3.8,0.8c-1.1,0.5-2,1.3-2.9,2.2
                                    c-0.8,0.9-1.5,2-2.1,3.2c-0.6,1.2-1,2.5-1.4,3.8c-0.4,1.3-0.6,2.6-0.8,4c-0.2,1.3-0.2,2.6-0.2,3.8v18.4c0,1.5-1.2,2.7-2.7,2.7h0
                                    c-1.5,0-2.7-1.2-2.7-2.7V61.3c0-1.5,1.2-2.7,2.7-2.7h0c1.5,0,2.7,1.2,2.7,2.7v6.5h0.2c0.5-1.6,1.1-3,1.9-4.2
                                    c0.8-1.2,1.7-2.3,2.7-3.1c1-0.9,2.1-1.5,3.3-2c1.2-0.4,2.4-0.7,3.8-0.7c0.9,0,1.6,0.1,2.3,0.2c0.7,0.1,1.3,0.3,1.9,0.5V60.3z"/>
                                <path className="st0" d="M175.5,99.7c0,0.9-0.6,1.7-1.5,2.1c-1.4,0.5-3,0.8-4.6,0.8c-6.9,0-10.4-4-10.4-12v-25c0-1.2-1-2.2-2.2-2.2h-3.2
                                    c-1.2,0-2.2-1-2.2-2.2v-0.4c0-1.2,1-2.2,2.2-2.2h3.2c1.2,0,2.2-1,2.2-2.2v-7.1c0-0.9,0.6-1.8,1.5-2l1.1-0.3c1.4-0.5,2.8,0.6,2.8,2
                                    v7.5c0,1.2,1,2.2,2.2,2.2h6.8c1.2,0,2.2,1,2.2,2.2v0.4c0,1.2-1,2.2-2.2,2.2h-6.8c-1.2,0-2.2,1-2.2,2.2v24.2c0,2.9,0.5,5,1.4,6.3
                                    c1,1.3,2.6,1.9,4.8,1.9c0.7,0,1.4-0.1,2-0.3C174.1,97.3,175.5,98.2,175.5,99.7L175.5,99.7z"/>
                                <path className="st0" d="M187,47.8c-1,0-1.9-0.4-2.7-1.1c-0.8-0.7-1.1-1.7-1.1-2.8c0-1.1,0.4-2,1.1-2.7s1.6-1.1,2.7-1.1
                                    c0.5,0,1,0.1,1.5,0.3c0.5,0.2,0.9,0.4,1.2,0.8c0.3,0.3,0.6,0.7,0.8,1.2c0.2,0.5,0.3,1,0.3,1.5c0,0.5-0.1,1-0.3,1.5
                                    c-0.2,0.5-0.5,0.9-0.8,1.2c-0.4,0.3-0.8,0.6-1.2,0.8C188,47.7,187.5,47.8,187,47.8z M184.3,98.9V61.3c0-1.5,1.2-2.7,2.7-2.7l0,0
                                    c1.5,0,2.7,1.2,2.7,2.7v37.6c0,1.5-1.2,2.7-2.7,2.7l0,0C185.5,101.6,184.3,100.4,184.3,98.9z"/>
                                <path className="st0" d="M232.1,98.3c0,0.8-0.4,1.6-1.2,2c-3,1.5-6.4,2.3-10.4,2.3c-3.1,0-5.8-0.5-8.3-1.6c-2.5-1.1-4.6-2.6-6.3-4.6
                                    c-1.7-1.9-3.1-4.2-4-6.9c-0.9-2.6-1.4-5.5-1.4-8.6c0-3.2,0.5-6.2,1.5-9.1s2.4-5.3,4.3-7.4c1.9-2.1,4.2-3.8,6.9-5
                                    c2.7-1.2,5.8-1.8,9.3-1.8c3,0,5.8,0.5,8.4,1.5c0.8,0.3,1.4,1.2,1.4,2.1v0.5c0,1.6-1.6,2.7-3.1,2.1c-2.2-1-4.6-1.4-7.1-1.4
                                    c-2.5,0-4.8,0.5-6.8,1.4c-2,1-3.7,2.3-5,3.9c-1.4,1.7-2.4,3.6-3.1,5.8c-0.7,2.2-1.1,4.6-1.1,7.1c0,2.3,0.3,4.5,0.9,6.6
                                    c0.6,2.1,1.5,4,2.8,5.6c1.2,1.6,2.8,2.9,4.7,3.8c1.9,1,4.1,1.4,6.7,1.4c2.8,0,5.4-0.6,7.8-1.7C230.4,95.6,232.1,96.7,232.1,98.3
                                    L232.1,98.3z"/>
                                <path className="st0" d="M242.4,98.9V40.7c0-1.5,1.2-2.7,2.7-2.7h0c1.5,0,2.7,1.2,2.7,2.7v58.2c0,1.5-1.2,2.7-2.7,2.7h0
                                    C243.6,101.6,242.4,100.4,242.4,98.9z"/>
                                <path className="st0" d="M266.5,81.1c-1.3,0-2.3,1.1-2.1,2.4c0.2,1.7,0.5,3.3,0.9,4.7c0.7,2.1,1.6,3.9,2.9,5.3c1.3,1.5,2.8,2.6,4.6,3.3
                                    c1.8,0.8,3.8,1.2,6.1,1.2c3.6,0,7.1-1,10.4-2.9c1.5-0.8,3.3,0.1,3.3,1.8V97c0,0.7-0.4,1.4-1,1.8c-3.9,2.5-8.6,3.8-14,3.8
                                    c-2.9,0-5.5-0.5-7.8-1.5c-2.3-1-4.3-2.5-6-4.4s-2.9-4.3-3.8-7.1c-0.9-2.8-1.3-6-1.3-9.6c0-3.2,0.5-6.2,1.5-8.9
                                    c1-2.7,2.3-5.1,4.1-7.1s3.8-3.6,6.2-4.7c2.4-1.1,5-1.7,7.8-1.7c2.8,0,5.2,0.5,7.3,1.4c2.1,1,3.9,2.3,5.4,4.1c1.4,1.8,2.5,4,3.3,6.5
                                    c0.8,2.6,1.1,5.5,1.1,8.6v2.7H266.5z M287.4,76.4c1.3,0,2.3-1.1,2.1-2.4c-0.4-3.3-1.4-6-3-8c-2-2.5-4.9-3.7-8.5-3.7
                                    c-1.8,0-3.5,0.3-5.1,1c-1.6,0.6-2.9,1.6-4.1,2.8c-1.2,1.2-2.1,2.7-2.9,4.4c-0.4,1-0.8,2.1-1.1,3.2c-0.3,1.3,0.7,2.7,2.1,2.7H287.4z"
                                    />
                                <path className="st0" d="M303.4,93.9c0.8,0.6,1.7,1.2,2.6,1.7c1,0.5,1.9,0.9,2.9,1.3c1,0.4,2,0.6,3,0.8c1,0.2,2,0.3,2.9,0.3
                                    c6.4,0,9.6-2.4,9.6-7.2c0-1.1-0.2-2-0.7-2.8c-0.4-0.8-1.1-1.5-1.9-2.2c-0.8-0.7-1.8-1.3-3-1.8c-1.2-0.6-2.5-1.1-4-1.8
                                    c-2-0.8-3.7-1.6-5.1-2.5c-1.4-0.8-2.6-1.8-3.5-2.7c-0.9-1-1.6-2.1-2.1-3.3c-0.4-1.2-0.7-2.5-0.7-4c0-1.9,0.4-3.6,1.2-5.1
                                    c0.8-1.5,1.9-2.7,3.3-3.8c1.4-1,3-1.8,4.8-2.4s3.8-0.8,5.8-0.8c3,0,5.7,0.5,8.1,1.4c1,0.4,1.7,1.3,1.7,2.3v0c0,1.7-1.8,2.9-3.4,2.3
                                    c-2.2-0.9-4.6-1.3-7-1.3c-1.3,0-2.6,0.2-3.7,0.5c-1.1,0.3-2,0.8-2.8,1.4c-0.8,0.6-1.4,1.3-1.8,2.2c-0.4,0.9-0.7,1.8-0.7,2.8
                                    c0,1.1,0.2,2,0.5,2.8c0.3,0.8,0.9,1.5,1.6,2.2c0.7,0.6,1.6,1.3,2.8,1.8c1.1,0.6,2.5,1.2,4.1,1.9c2.1,0.8,3.9,1.7,5.4,2.5
                                    c1.5,0.8,2.8,1.7,3.7,2.7c1,1,1.7,2,2.2,3.2c0.5,1.2,0.7,2.6,0.7,4.1c0,1.9-0.4,3.7-1.2,5.2c-0.8,1.5-1.9,2.8-3.3,3.8
                                    c-1.4,1-3.1,1.8-5,2.3c-1.9,0.5-4,0.8-6.2,0.8c-3.7,0-7-0.7-9.7-2c-0.8-0.4-5.6,1.3-5.6,0.3L303.4,93.9z"/>
                                </svg>
                            </div>
                            <div>
                                <span>{this.state.mode}</span>
                            </div>
                        </div>
                        <div className="inputs-wrapper">
                            <Field label="Email" name="email" component={this.renderField} type="text" />
                            <Field label="Password" name="password" component={this.renderField} type="password" />
                        </div>
                        <div className="button-wrapper">
                            <div>
                                <button type="submit">{this.state.mode}</button>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="separator footer"></div>
            </form>
        );
    }
}

function validate(values){

    const errors = {};

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.password){
        errors.password = "Set a password";
    } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters or more'
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'authForm'
})(
    connect(null, { trySignIn, trySignUp })(Auth)
);
