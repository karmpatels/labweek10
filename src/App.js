import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        termsAccepted: false,
    });

    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);  // Set the submitted data to be displayed
    };

    return (
        <div className="form-container">
            <h2>Data Entry Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                </div>
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                <input type="text" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />
                <div className="form-group">
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
                    <select name="province" value={formData.province} onChange={handleChange}>
                        <option value="">Choose...</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                    </select>
                    <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
                </div>
                <div className="form-group terms">
                    <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
                    <label>Agree Terms & Condition?</label>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>

            {submittedData && (
                <div className="submitted-data">
                    <p><strong>Email:</strong> {submittedData.email}</p>
                    <p><strong>Full Name:</strong> {submittedData.name}</p>
                    <p><strong>Address:</strong> {submittedData.address}</p>
                    <p><strong>City:</strong> {submittedData.city}</p>
                    <p><strong>Province:</strong> {submittedData.province}</p>
                    <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
                </div>
            )}
        </div>
    );
}

export default App;