import Header from "../Header/Header";
import "./About.css"
import FooterLink from "../FooterLink/FooterLink";
import aboutVector from './../../assets/about_vector.png'
import aboutAnime from './../../assets/about_anime.gif'

const About = () => {
    return ( 
        <div className="section-container">
            <Header
            heading="About Me."
            details="The Programmer | Student | Artist | Co-founder and Managing director of Extecy.in | Exploring life"/>


            <div className="about-main">
                <div className="about-main-left">
                    {/* sub section 1 */}
                    <h3 className="about-sub-head">Student</h3>
                    <p className="about-details">I like to keep learning and experience new things. I have created some projects, check out my{' '}
                    <a className="about-link-element" href="http://github.com/Rohit-Nandagawali/"> projects</a></p>

                    {/* sub section 1 */}
                    <h3 className="about-sub-head">Artist</h3>
                    <p className="about-details">I like drawing since my childhood, check out my {' '}
                    <a className="about-link-element" href="https://www.instagram.com/the_bathr00m_singer_/"> Arts</a></p>

                    {/* sub section 1 */}
                    <h3 className="about-sub-head">Explorer</h3>
                    <p className="about-details">I like to explore life and I like to enjoy life. I like to read books and poetries. </p>
                    

                </div>

                <div className="about-main-right">
                    <img src={aboutAnime} alt="about anime" className="about-anime" />
                </div>
            </div>

            <FooterLink
                text="Check out my "
                link="projects!"
                toAddress="/projects"
                />


            {/* vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} alt="about" className="about-vector"/>
            </div>

        </div>
        // 
     );
}
 
export default About;