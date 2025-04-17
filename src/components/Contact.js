import React, { useState }  from "react";
import 'bulma/css/bulma.min.css';


export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
    const [errors, setErrors] = useState({ name: '', email: '', msg: '' });
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: '' }); // Clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
        if (!formData.msg.trim()) newErrors.msg = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
  
        alert('Form submitted successfully!');
  
        // Submit logic here (e.g. send to backend)
        console.log('Form submitted:', formData);
      };
    
}

