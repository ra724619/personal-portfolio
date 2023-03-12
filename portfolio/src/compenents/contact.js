import React, { useState } from 'react';

function Contact() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      };
    
      return (
        <div className="contact">
          <h2>Contact</h2>
        <div className="contact-info">
        <p>Email: <a href="ra724619@gmail.com">ra724619@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/waitse/">https://www.linkedin.com/in/waitse/</a></p>
        <p>Github: <a href="https://github.com/ra724619">https://github.com/ra724619</a></p>
        </div>
        <div className='contact-form'>
        <p>You can also contact me by sending a message!</p>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} required />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={handleEmailChange} required />
            </label>
            <label>
              Subject:
              <input type="text" value={subject} onChange={handleSubjectChange} required />
            </label>
            <label>
              Message:
              <textarea value={message} onChange={handleMessageChange} required />
            </label>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
    );
}
    
export default Contact;
