import React from 'react';

const CustomFormAlert = ( {errorMessage} ) => {
    return(
        <div className="alert alert-danger">
            <strong>Oops!</strong> {errorMessage}
        </div>
    );
};

export default CustomFormAlert;