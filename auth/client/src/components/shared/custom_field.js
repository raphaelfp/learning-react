import React from 'react';

const CustomField = ({ input, meta, label="", type="text"}) => {
    if(!input)
        return <div />;
    return(
        <div className="form-group">
            { !!label ? <label>{label}</label> : "" }
            <input
                type={type}
                className="form-control"
                {...input}
            />
            { meta.touched && meta.error && <span className="text-danger">{meta.error}</span> }
        </div>
    );
};

export default CustomField;