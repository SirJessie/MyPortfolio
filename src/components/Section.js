import React from 'react';

// Styles
import '../styles/Section.scss';
import '../styles/ResponsiveSection.scss';

// JSON Data
import Data from '../Data.json';

function Section(){
    return(
        <div className='section-container'>
            <section className='section-about' id='about'>
                <div class='section-title'>
                    <div className='title'>
                        ABOUT ME
                        <div className='divider bg-cyan'></div>
                    </div>
                </div>
                <div className='personal-wrapper'>
                    <div className='personal-card'>
                        <div className='card-left'>
                            <img src='/resources/images/Myself.png' alt='MYSELF'/>
                        </div>
                        <div className='card-right'>
                            <div className='sub-title'>
                                PERSONAL INFO
                                <div className='divider bg-dark-blue'></div>
                            </div>
                            <p> 
                                I am Jessie Rom Turin, a fresh graduate and potential
                                Software/Web Developer. Seeking for a challenging
                                position in a reputable company to enchance my skills and gain
                                experience. I take my Bachelor Degree in Information Technology
                                at University of Caloocan City. I am a self learner with a
                                passion in developing system/website.
                            </p>
                            <a href='/resources/files/MyResume.pdf' download>Download Resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-skills' id='skills'>
                <div class='section-title'>
                    <div className='title'>
                        TECH STACK
                        <div className='divider bg-cyan'></div>
                    </div>
                </div>
                <div className='skills-content'>
                    {
                       
                       Data.skills && Data.skills.map((skill, index) => {
                            return(
                                <div className='skill-card' key={index}>
                                    <img src={skill.img} alt={skill.title}/>
                                    <div className='hover-effect'>
                                        <span>{skill.title}</span>
                                    </div>
                                </div>
                            )
                       })
                    
                    }
                </div>
            </section>
            <section className='section-project' id='project'>
                <div class='section-title'>
                    <div className='title'>
                        PROJECTS
                        <div className='divider bg-cyan'></div>
                    </div>
                </div>
                <div className='project-content'>
                    {
                        Data.projects && Data.projects.map((project, index) => {
                            return(
                                <div className='project-card' key={index}>
                                    <div className='card-img'>
                                        <img src={project.img} alt={project.title}/>
                                        <div className='hover-effect'>
                                            {
                                                project.link &&
                                                    <a className='icon' target="_blank" rel="noreferrer" href={project.link}>
                                                        <i className="fa-solid fa-eye"></i>
                                                    </a>
                                            }
                                            <a className='icon' target="_blank" rel="noreferrer" href={project.github}>
                                                <i className="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='card-text'>
                                        <div className='card-title'>{project.title}</div>
                                        <p className='description'>
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className='card-icons'>
                                        {
                                            project.techs && project.techs.map((tech, index) => {
                                                return(
                                                    <div className='card-icon' key={index}>{tech}</div>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <section className='section-footer'>
                <div className='footer-content'>
                    <div className='social-links'>
                        <a href='https://www.facebook.com/jerom.turin.5' target="_blank" rel="noreferrer" className='icon'>
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/turin-jessie-rom-a16124244/' target="_blank" rel="noreferrer" className='icon'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href='https://www.instagram.com/_jssrm' target="_blank" rel="noreferrer" className='icon'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div className='rights-text'>
                        <span>Copyright &copy; 2022.</span>
                        <span>Develop by Jessie Rom Turin</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section;