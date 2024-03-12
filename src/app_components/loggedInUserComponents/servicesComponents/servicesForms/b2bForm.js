// servicesForms/b2bForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './b2bForm.css';

const B2BForm = ({ onFormSubmitSuccess }) => { // Add a prop for handling form submission success
    const [formData, setFormData] = useState({
        companyName: '',
        intention: '',
        companyAddress: '',
        companyEmail: '',
        companyPhone: '',
        taxId: '', // Assuming you might need a tax identification number
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
            localStorage.removeItem('b2bFormData'); // Clear saved data on successful submission
            alert('Form submitted successfully!');
            setFormData({
                companyName: '',
                intention: '',
                companyAddress: '',
                companyEmail: '',
                companyPhone: '',
                taxId: '',
            });
            if (onFormSubmitSuccess) {
                onFormSubmitSuccess(); // Call the prop function to handle additional actions on success
            }
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Form submission failed!');
        }
    };

    return (
        <form className="b2b-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
            />
            <textarea
                name="intention"
                value={formData.intention}
                onChange={handleChange}
                placeholder="Your intentions / requirements (max 3000 chars)"
                maxLength="3000"
                required
            />            <input type="text" name="companyAddress" value={formData.companyAddress} onChange={handleChange} placeholder="Company Address" required />
            <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} placeholder="Company Email" required />
            <input type="tel" name="companyPhone" value={formData.companyPhone} onChange={handleChange} placeholder="Company Phone" required />
            <input type="text" name="taxId" value={formData.taxId} onChange={handleChange} placeholder="Tax/VAT ID" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default B2BForm;
