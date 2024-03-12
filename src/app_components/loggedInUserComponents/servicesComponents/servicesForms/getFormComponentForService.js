import React from "react";
import B2BForm from './b2bForm'; // Adjust the path as needed to correctly import your B2BForm

// This function returns a React component based on the serviceName argument
export function getFormComponentForService(serviceName, onFormSubmitSuccess) {
    switch (serviceName) {
        case 'Business to Business':
            return () => <B2BForm onFormSubmitSuccess={onFormSubmitSuccess} />;
        // Add more cases here for different services if necessary
        case 'Service Name 2':
            return () => <div>Form for Service Name 2</div>;
        default:
            return () => <div>NO FORM FOUND</div>;
    }
}
