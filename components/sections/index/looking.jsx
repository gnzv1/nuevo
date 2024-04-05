// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section scss
import looking from '../../../styles/sections/index/looking.module.scss';
import section from '../../../styles/blocks/section.title.module.scss';
import buttonStyles from '../../../styles/blocks/button.module.scss';
import containerStyles from '../../../styles/structure/container.module.scss';

// Define handleSubmit outside of the component function
const handleSubmit = (e) => {
  e.preventDefault();
  // Here you can handle form submission, e.g., sending data to a backend server
  // For demonstration purposes, we'll just log the form data
  console.log('Form submitted:', formData);
  // Clear form fields after submission
  setFormData({
    name: '',
    email: '',
    message: ''
  });
};

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
  return (
    <Section classProp={`${looking.section} borderBottom`}>
      <Container classProp={`${containerStyles.readingWidth} ${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
        <div className={looking.contactInfo}>
          <h2>Contactanos</h2>
          <p>
            Nos puedes escribir a: <span className={`${looking.highlight}`}>contacto@trianguloconsultores.com</span>.
          </p>
        </div>
        <div className={looking.contactForm}>
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <div className={`${looking.formGroup} ${looking.highlight}`} style={{ border: '1px dotted var(--primary)', marginBottom: '10px', maxHeight: '200px', overflowY: 'auto' }}>
              <input type="text" placeholder="Your Name" name="name" />
            </div>
            <div className={`${looking.formGroup} ${looking.highlight}`} style={{ border: '1px dotted var(--primary)', marginBottom: '10px', maxHeight: '200px', overflowY: 'auto' }}>
              <input type="email" placeholder="Your Email" name="email" />
            </div>
            <div className={`${looking.formGroup} ${looking.highlight}`} style={{ border: '1px dotted var(--primary)', marginBottom: '10px', maxHeight: '200px', overflowY: 'auto' }}>
              <textarea placeholder="Your Message" name="message" rows="4" style={{ maxHeight: '200px', overflowY: 'auto' }}></textarea>
            </div>
            <div className={looking.formGroup} style={{ textAlign: 'center' }}>
              <button className={`button ${buttonStyles.primary}`} type="submit" onClick={() => window.location = 'mailto:contacto@trianguloconsultores.com'}>Send Message</button> {/* Use the primary button style */}
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
}