import React from 'react';

// Styles
import '../styles/Section.scss';
import '../styles/ResponsiveSection.scss';

// JSON Data
import Data from '../Data.json';

function Section(){
    // const [sectionCon, toggleSection] = useState(0);

    // const showSection = () => {
    //     toggleSection(window.scrollY);
    //     console.log(window.scrollY);
    // }

    // window.addEventListener('scroll', showSection);
    return(
        <div className='section-container'>
            {
                // Data.projects &&
                Data.projects.map((project, index) => {
                    return(
                        <section key={index}>
                            <div className='section-title'>
                                <span>{project.title}</span>
                            </div>
                            <div className='section-content'>
                                <p className='paragraph-content'>
                                    {project.description}
                                </p>
                            </div>
                        </section>
                    )
                })
            }
            
            {/* <section>
                <div className='section-title'>
                    <span>TECH STACK</span>
                </div>
                <div className='section-content'>
                    <p className='paragraph-content'>
                        Ex laborum aute laboris eiusmod ad sint reprehenderit id cupidatat est. Laboris irure culpa enim incididunt irure consequat id magna. 
                        Anim exercitation labore consequat irure velit tempor non tempor mollit culpa quis do velit. 
                        Deserunt labore cillum amet dolore adipisicing. Officia in pariatur qui incididunt labore ad nisi. Lorem non magna id proident eiusmod sint.
                    </p>
                </div>
            </section>   
            <section>
                <div className='section-title'>
                    <span>PROJECTS</span>
                </div>
                <div className='section-content'>
                    <p className='paragraph-content'>
                        Ex laborum aute laboris eiusmod ad sint reprehenderit id cupidatat est. Laboris irure culpa enim incididunt irure consequat id magna. 
                        Anim exercitation labore consequat irure velit tempor non tempor mollit culpa quis do velit. 
                        Deserunt labore cillum amet dolore adipisicing. Officia in pariatur qui incididunt labore ad nisi. Lorem non magna id proident eiusmod sint.
                    </p>
                </div>
            </section>
            <section>
                <div className='section-title'>
                    <span>ABOUT MYSELF</span>
                </div>
                <div className='section-content'>
                    <p className='paragraph-content'>
                        Ex laborum aute laboris eiusmod ad sint reprehenderit id cupidatat est. Laboris irure culpa enim incididunt irure consequat id magna. 
                        Anim exercitation labore consequat irure velit tempor non tempor mollit culpa quis do velit. 
                        Deserunt labore cillum amet dolore adipisicing. Officia in pariatur qui incididunt labore ad nisi. Lorem non magna id proident eiusmod sint.
                    </p>
                </div>
            </section>     */}
            {/* <div className='section-skills' id='skills'>
                <div className='section-title'>
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
                                    <span>{skill.title}</span>
                                </div>
                            )
                       })

                    }
                </div>
            </div>
            <div className='section-project' id='project'>
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
            </div>
            <div className='section-footer'>
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
            </div> */}
        </div>
    )
}

export default Section;