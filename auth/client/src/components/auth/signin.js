import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import CustomField from '../../components/shared/custom_field';
import CustomFormAlert from '../../components/shared/custom_form_alert';
import * as actions from '../../actions/index';

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        this.props.signinUser({ email, password});
    }

    render() {
        const { handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field
                    label="Email:"
                    name="email"
                    type="email"
                    component={CustomField}
                />
                <CustomField />
                <Field
                    label="Password:"
                    name="password"
                    type="password"
                    component={CustomField}
                />
                { this.props.errorMessage && <CustomFormAlert errorMessage={this.props.errorMessage} /> }
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return{ errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(reduxForm({ form: 'signin'})(Signin));
