import React from 'react';

// Styles
import '../styles/Section.scss';
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
                                at University of Caloocan City. I am a self learner with a passion
                                in programming.
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
                       
                       Data.skills && Data.skills.map(skill => {
                            return(
                                <div className='skill-card' key={skill.id}>
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
            </section>
            <section className='section-footer'>
                
            </section>
        </div>
    )
}

export default Section;