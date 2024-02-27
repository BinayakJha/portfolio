import React from 'react';
import EducationList from './API/EducationAPI';
import ExperienceList from './API/ExperienceAPI';
import Skills from './API/SkillsAPI';
import './Main.css';
import { NavLink } from 'react-router-dom';
import BackgroundAnimation from './BackgroundAnimation';
import { motion } from "framer-motion";
function AboutPage() {

    function educationtoggleTabs(e) {
        const target = e.target;
        const parent = target.parentElement;
        const grandparent = parent.parentElement;
        const targetId = target.getAttribute("data-target");
        const targetContent = grandparent.querySelector(targetId);
        const tabItems = parent.querySelectorAll(".tab-item");
        const tabContents = grandparent.querySelectorAll(".tab-content");
        tabItems.forEach(function (item) {
            item.classList.remove("active");
        });
        tabContents.forEach(function (item) {
            item.classList.remove("active");
        });
        target.classList.add("active");
        targetContent.classList.add("active");
    }

    function experiencetoggleTabs(e) {
        const target = e.target;
        const parent = target.parentElement;
        const grandparent = parent.parentElement;
        const targetId = target.getAttribute("data-target");
        const targetContent = grandparent.querySelector(targetId);
        const tabItems = parent.querySelectorAll(".tab-item");
        const tabContents = grandparent.querySelectorAll(".tab-content");
        tabItems.forEach(function (item) {
            item.classList.remove("active");
        });
        tabContents.forEach(function (item) {
            item.classList.remove("active");
        });
        target.classList.add("active");
        targetContent.classList.add("active");
    }


    const [educationlist, setEducationList] = React.useState(EducationList);
    const [experiencelist, setExperienceList] = React.useState(ExperienceList);
    const [skilllist, setSkillList] = React.useState(Skills);

  return (
    
    <div className='aboutpage'>
        <motion.div
		className="container text-center  bg-black"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.3 }}
		>
            <BackgroundAnimation />
            <section className="about-section sec-padding" id="about">
                <NavLink to='/' className="btn link-item" style={{'position':'absolute','top': '29px','left': '33px'}}>
                    <i className="fa fa-arrow-left"></i>
                </NavLink>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>About Me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-img">
                            <div className="img-box">
                                <img src="./images/portfolio_img.jpeg" alt="about pic" style={{'objectfit': 'cover'}}/>
                            </div>
                        </div>
                        <div className="about-text">
                            <p>
                                <b>I am a Nepalese full-stack web developer and machine learning enthusiast</b>.<br/>
                                I enjoy learning new things and sharing them with others.
                                Apart from coding, I enjoy growing 🌱 plants and ✍️ writing articles on them.
                                Sometimes, I act on the videos my brother creates for his channel, 
                                <a href="https://www.youtube.com/channel/UCsyi8rUBKXEKbGqtr-tIjKA"> Shubham Jha Studios</a>.
                            </p>
                            <h3>skills</h3>
                            <div className="skills">
                                {skilllist.map((skill) => {
                                    const {name} = skill;
                                    return (
                                            <div className="skill-item">{name}</div>
                                    );
                                })}
                            </div>

                            <div className="about-tabs">
                                <button type="button" className="tab-item active" data-target="#education" onClick={educationtoggleTabs}>
                                    education
                                </button>
                                <button type="button" className="tab-item" data-target="#experience" onClick={experiencetoggleTabs}>
                                    experience
                                </button>
                            </div>
                            {/* <!-- Education --> */}
                            <div className="tab-content active" id="education" >
                                <div className="timeline">
                                    {educationlist.map((education) => {
                                        const {id, date, title, college} = education;
                                        return (
                                            <div className="timeline-item" key={id}>
                                                <span className="date">
                                                    {date}
                                                </span>
                                                <h4>{title} -<span>{college}</span></h4>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* <!-- Education end --> */}

                            {/* <!-- Experience --> */}
                            <div className="tab-content" id="experience" >
                                <div className="timeline">
                                    {experiencelist.map((experience) => {
                                        const {id, date, title, company, description} = experience;
                                        return (
                                            <div className="timeline-item" key={id}>
                                                <span className="date">
                                                    {date}
                                                </span>
                                                <h4>{title} - <span>{company}</span></h4>
                                                <p>{description}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <NavLink to='/awards' className="btn link-item">Awards & Achievements</NavLink>
                            <NavLink to='/contact' className="btn link-item">Contact Me</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    </div>
  )
}

export default AboutPage
