import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
    const { email, password } = userCredentials;

    const submitHandler = async event => {
        event.preventDefault();
        emailSignInStart({ email, password });
    };

    const changeHandler = event => {
        const { value, name } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <div className="sign-in">
            <h2 className="sign-in__title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={submitHandler}>
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    required
                    changeHandler={changeHandler}
                    label="Email"
                />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    required
                    changeHandler={changeHandler}
                    label="Password"
                />

                <div className="sign-in__buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton type="button" isGoogleSignIn onClick={googleSignInStart}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({ googleSignInStart, emailSignInStart }, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
