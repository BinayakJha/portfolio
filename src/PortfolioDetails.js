import React from 'react'
import PortfolioList from './API/PortfolioAPI';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import './Main.css';
import BackgroundAnimation from './BackgroundAnimation';
function PortfolioDetails() {
    const [portfoliolist, setPortfoliolist] = React.useState(PortfolioList);
    const id = window.location.pathname.split('/')[2] - 1;

    console.log(id);
  return (
    <div className='portfoliodetails'>
        <motion.div
		className="container text-center  bg-black"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.3 }}
		>
        <BackgroundAnimation />
        <div class="portfolio-popup open">
        <div class="pp-inner">
            <div class="pp-content">
                <div class="pp-header">
                    <NavLink to='/portfolio' className="btn link-item pp-close">
                            <i class="fa fa-times"></i> 
                    </NavLink>
                    <div class="pp-thumbnail">
                        <img src={process.env.PUBLIC_URL + portfoliolist[id].projectImage} alt="image" />

                    </div>
                    <h3> {portfoliolist[id].projectTitle} </h3>
                </div>
                     <div class="pp-body">
                            <div class="description">
                                <p>{portfoliolist[id].projectDescription}
                                </p>
                            </div>
                            <div class="general-info">
                                <ul>
                                    <li style={{'display': 'flex', 'flex-wrap': 'wrap'}}>
                                        Technology Used :
                                        <br/> <br/>
                                        <div class="skills" style={{'margin' : '-3px 10px'}} >  
                                        {portfoliolist[id].projectTechnology.split(',').map((currElem) => {
                                            return (
                                            <div class="skill-item">{currElem}</div>
                                            )
                                        })}
                                           
                                        </div>
                                    </li>
                                    <li>View Online - <span><a href={portfoliolist[id].projectLink} target="_blank" rel="noreferrer">
                                        {portfoliolist[id].projectLinkShow}
                                        </a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default PortfolioDetails