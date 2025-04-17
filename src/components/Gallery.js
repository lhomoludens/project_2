import React, { useState }  from "react";

export default function Gallery() {
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
    
}