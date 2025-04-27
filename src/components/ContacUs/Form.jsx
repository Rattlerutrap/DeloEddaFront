import React, { useState } from 'react';
import '../../styles/components/ContactUs/Form.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^(?:\+7|8)[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone format is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/applications/', formData);
      console.log('Success:', response.data);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='container'>
      <h2>{t('contactus.form.h2')}</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">{t('contactus.form.label1')}</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </p>
        <p>
          <label htmlFor="email">{t('contactus.form.label2')}</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </p>
        <p>
          <label htmlFor="phone">{t('contactus.form.label3')}</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="+71234567890 or 81234567890"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </p>
        <p>
          <label htmlFor="message">{t('contactus.form.label4')}</label>
          <textarea
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </p>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? t('sending') : t('contactus.form.button')}
        </button>
        {submitStatus === 'success' && (
          <p className="success-message">{t('Message sent success')}</p>
        )}
        {submitStatus === 'error' && (
          <p className="error-message">{t('Message sent error')}</p>
        )}
      </form>
    </div>
  );
};

export default Form;