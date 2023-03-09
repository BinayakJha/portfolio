import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import PortfolioList from './API/PortfolioAPI';
import BackgroundAnimation from './BackgroundAnimation';
function PortfolioPage() {

    const [portfoliolist, setPortfoliolist] = React.useState(PortfolioList);




  return (
    
    <div className='portfoliopage'>
        <motion.div
		className="container text-center  bg-black"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.3 }}
		>
            <BackgroundAnimation />
            <section className="portfolio-section sec-padding" id="portfolio">
            <NavLink to='/' className="btn link-item" style={{'position':'absolute','top': '29px','left': '33px'}}>
                    <i className="fa fa-arrow-left"></i>
                </NavLink>
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div className="row">
                        
                            {portfoliolist.map((currElem) => {
                                const { id, projectImage, projectTitle, projectDescription, projectTechnology, projectLink, projectLinkShow } = currElem;
                                return (
                                <>
                                <div className="portfolio-item" key={id}>
                                    <div className="portfolio-item-thumbnail">
                                        <img src={projectImage} alt="image" />
                                    </div>
                                    <h3 className="portfolio-item-title">
                                        {projectTitle}
                                    </h3>
                                    <NavLink to = {`/portfolio_details/${id}`} className="btn view-more-btn">View More</NavLink>                                   
                                </div>
                                </>
                                )
                            })}
                    </div>
                </div>
            </section>
        </motion.div>
    </div>
  )
}

export default PortfolioPage
