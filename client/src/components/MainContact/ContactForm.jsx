import { useState } from 'react';
import './ContactForm.css'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    <div className='form_section'>
        <h1 className='form_section_h1'>Just Drop Us A Line</h1>

   
    <form onSubmit={handleSubmit} className='contact_form'>
     
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder='Your Name'
          className='contact_form_input'
        />
    
      <br />
      
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder='Your Email'
          className='contact_form_input'
        />
   
      <br />
     
        <input 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          placeholder='Subject'
          className='contact_form_input'
        />
    
      <br />
    
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder='Message'
          className='contact_form_textarea'
          style={{ height: '100px' }}
        />
     
      <br />

      <button type="submit" className='contact_button'>Submit Now</button>
    </form>
    </div>
  );
};

export default ContactForm;
