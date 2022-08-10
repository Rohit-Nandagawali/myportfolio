import "./Projects.css"
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import {projectsData }from './../../assets/projectsData'
import ProjectCard from "./ProjectCard"
const Projects = () => {
    return ( 
        <div
        className="section-container">
            <Header
            heading="My Projects."
            details="Here are some few cool things I've worked on, do check them out!"/>

            <div className="project-cards-container">
                {
                    projectsData.map(({ 
                        projectName,
                        projectDescription,
                        imageUrl,
                        githubUrl,
                        projectUrl}) =>{
                        return <ProjectCard
                        key={projectName}
                        projectName={projectName}
                        projectDescription={projectDescription}
                        imageUrl={imageUrl}
                        projectUrl={projectUrl}
                        githubUrl={githubUrl}/>
                    })
                }
            </div>

            <FooterLink
            text="Check out "
            link="my skills!"
            toAddress="/skills"/>

        </div>
     );
}
 
export default Projects;