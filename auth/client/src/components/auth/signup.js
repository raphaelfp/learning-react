import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import CustomField from '../shared/custom_field';
import CustomFormAlert from '../../components/shared/custom_form_alert';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit({ email, password }){
        this.props.signupUser({ email, password });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="form-group">
                <Field
                    label="Email:"
                    name="email"
                    type="email"
                    component={CustomField}
                />
                <Field
                    label="Password:"
                    name="password"
                    type="password"
                    component={CustomField}
                />
                <Field
                    label="Confirm Password:"
                    name="passwordConfirm"
                    type="password"
                    component={CustomField}
                />
                { this.props.errorMessage && <CustomFormAlert errorMessage={this.props.errorMessage} /> }
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if(!formProps.email)
        errors.email = 'Please enter an email';
    if(!formProps.password)
        errors.password = 'Please enter a password';
    if(!formProps.passwordConfirm)
        errors.passwordConfirm = 'Please enter a password confirmation';

    if(formProps.password != formProps.passwordConfirm)
        errors.password = 'Passwords must match!';

    return errors;
}

const mapStateToProps = state => {
    return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'signup',
    validate
})(Signup));