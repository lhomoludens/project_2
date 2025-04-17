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
  
        console.log('Form submitted:', formData);

        return (
            <section id="contact" className="contact-section">
                <article className="container mt-6">
                    <h6 className="title has-text-centered is-size-4">Contact Us</h6>
                    <p className="subtitle has-text-centered is-size-6 mt-3">
                        Get in touch with us for inquiries and bookings.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input
                                className="input"
                                type="text"
                                placeholder="Your Name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                />
                            </div>
                            {errors.name && <p className="help is-danger">{errors.name}</p>}
                        </div>
            
                    </form>
                </article>
            </section>     
        )
      };
    
}

