import React, { useState }  from "react";

export default function Gallery() {
    const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
    const [errors, setErrors] = useState({ name: '', email: '', msg: '' });
  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setErrors({ ...errors, [e.target.id]: '' }); // Clear error on change
    };
    
}