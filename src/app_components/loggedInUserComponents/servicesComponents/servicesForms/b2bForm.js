import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './b2bForm.css';

const B2BForm = ({ onFormSubmitSuccess }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        intention: '',
        companyAddress: '',
        companyEmail: '',
        companyPhone: '',
        taxId: '',
        projectDuration: '',
        numberOfResources: '',
        contractScope: '',
        expectedCost: ''
    });

    useEffect(() => {
        const savedData = localStorage.getItem('b2bFormData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
        localStorage.setItem('b2bFormData', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/orders/create', { ...formData, serviceName: 'Business to Business' });
            localStorage.removeItem('b2bFormData');
            alert('Form submitted successfully!');
            setFormData({
                companyName: '',
                intention: '',
                companyAddress: '',
                companyEmail: '',
                companyPhone: '',
                taxId: '',
                projectDuration: '',
                numberOfResources: '',
                contractScope: '',
                expectedCost: ''
            });
            if (onFormSubmitSuccess) {
                onFormSubmitSuccess();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Form submission failed!');
        }
    };

    return (
        <form className="b2b-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="companyName">Company Name:</label>
                <input
                    className='order-input'
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                />
            </div>
            {/* Add more fields below */}
            <div className="form-group">
                <label htmlFor="projectDuration">Project Duration:</label>
                <input
                    className='order-input'
                    type="text"
                    id="projectDuration"
                    name="projectDuration"
                    value={formData.projectDuration}
                    onChange={handleChange}
                    placeholder="Project Duration"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="numberOfResources">Number of Resources:</label>
                <input
                    className='order-input'
                    type="text"
                    id="numberOfResources"
                    name="numberOfResources"
                    value={formData.numberOfResources}
                    onChange={handleChange}
                    placeholder="Number of Resources"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="contractScope">Contract Scope:</label>
                <input
                    className='order-input'
                    type="text"
                    id="contractScope"
                    name="contractScope"
                    value={formData.contractScope}
                    onChange={handleChange}
                    placeholder="Contract Scope"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="expectedCost">Expected Cost:</label>
                <input
                    className='order-input'
                    type="text"
                    id="expectedCost"
                    name="expectedCost"
                    value={formData.expectedCost}
                    onChange={handleChange}
                    placeholder="Expected Cost"
                    required
                />
            </div>
            {/* End of added fields */}
            <div className="form-group">
                <label htmlFor="companyAddress">Company Address:</label>
                <input className='order-input'
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    placeholder="Company Address"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyEmail">Company Email:</label>
                <input className='order-input'
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    placeholder="Company Email"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyPhone">Company Phone:</label>
                <input className='order-input'
                    type="tel"
                    id="companyPhone"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    placeholder="Company Phone"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="taxId">Tax/VAT ID:</label>
                <input className='order-input'
                    type="text"
                    id="taxId"
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleChange}
                    placeholder="Tax/VAT ID"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="intention">Intentions / Requirements:</label>
                <textarea
                    id="intention"
                    name="intention"
                    value={formData.intention}
                    onChange={handleChange}
                    placeholder="Your intentions / requirements (max 3000 chars)"
                    maxLength="3000"
                    className='order-input'
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default B2BForm;
