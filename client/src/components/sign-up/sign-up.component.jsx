import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const submitHandler = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        signUpStart({ displayName, email, password });
    };

    const changeHandler = event => {
        const { name, value } = event.target;
        setUserCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <div className="sign-up">
            <h2 className="sign-up__title">I don't have a account yet!</h2>
            <span>Sign up and create an new account</span>
            <form className="sign-up-form" onSubmit={submitHandler}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={changeHandler}
                    label="Display Name"
                    required
                />
                <FormInput type="email" name="email" value={email} onChange={changeHandler} label="Email" required />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={changeHandler}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={changeHandler}
                    label="Confirm Password"
                    required
                />

                <CustomButton type="submit"> Sign Up </CustomButton>
            </form>
        </div>
    );
};
const mapDispatchToProps = dispatch => bindActionCreators({ signUpStart }, dispatch);

export default connect(null, mapDispatchToProps)(SignUp);
