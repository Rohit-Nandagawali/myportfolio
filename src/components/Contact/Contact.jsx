
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkdin from './../../assets/li.png'
import instagram from './../../assets/in.png'
import web from './../../assets/web.png'
import "./Contact.css"
const Contact = () => {
    return ( 
        <div className="section-container">
            <Header
            heading="Get in touch."
            details="Interested to collaborate? Feel free to drop me an email :)"/>

            {/* form section */}
            <div className="contact-form-container">
                <form 
                className="contact-form"
                action="https://formspree.io/f/xdojoool"
                method="POST"
                >
                {/* email input */}
                    <input 
                    type="email" name="email"
                    placeholder='Your Email ID' 
                    className='input-box email-input'

                    />
                {/* email body */}
                <textarea 
                    type="text" 
                    placeholder='Your message' 
                    name="message"
                    className='input-box body-input'

                    ></textarea>

                {/* submit button */}
                <button type='submit'
                className='contact-btn'>
                    Send Email
                </button>
                </form>
            </div>

            {/* social icons */}
            <div className="social-icon-container">
                <a href="http://github.com/Rohit-Nandagawali/">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/rohit-nandagawali-1a18a6202/">
                    <img src={linkdin} alt="linkdin" />
                </a>
                <a href="https://www.instagram.com/the_bathr00m_singer_/">
                    <img src={instagram} alt="instagram" />
                </a>
//                 <a href="https://www.extecy.in">
//                     <img src={web} alt="web" />
//                 </a>
            </div>
           
           
            <FooterLink
            text="Read more "
            link="about me."
            toAddress="/about"/>

            <div className="vector-frame">
                <img src={contactVector} alt="contact-vector" className="about-vector" />
            </div>

        </div>
     );
}
 
export default Contact;
