import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessNo: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', businessNo: '' })
    alert('Thank you for reaching out! I will get back to you soon.')
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-text">
            <h2>Interested in collaborating?<br /> Fill in your details!<br />I will reach out to you ASAP.</h2>
            <p>I'm always on the lookout for interesting projects and collaborations on research and development.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="businessNo">Business No.</label>
              <input
                type="tel"
                id="businessNo"
                name="businessNo"
                value={formData.businessNo}
                onChange={handleChange}
                placeholder="Enter your business number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact