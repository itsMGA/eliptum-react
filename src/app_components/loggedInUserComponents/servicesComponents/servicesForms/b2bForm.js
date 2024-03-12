// servicesForms/b2bForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './b2bForm.css';

const B2BForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        intention: '',
    });

    useEffect(() => {
        // Load saved form data from localStorage
        const savedData = localStorage.getItem('b2bFormData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        // Save current form data to localStorage
        localStorage.setItem('b2bFormData', JSON.stringify({ ...formData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/orders/create', { ...formData, serviceName: 'Business to Business' });
            localStorage.removeItem('b2bFormData'); // Clear saved data on successful submission
            alert('Form submitted successfully!');
            // Reset form fields
            setFormData({
                companyName: '',
                intention: '',
            });
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
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default B2BForm;
