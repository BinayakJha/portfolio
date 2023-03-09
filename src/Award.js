import React from 'react'
import { motion } from "framer-motion";
import './Main.css';
import { NavLink } from 'react-router-dom';
import AwardsList from './API/AwardsAPI';
import BackgroundAnimation from './BackgroundAnimation';
function Award() {
    const [awardlist, setAwardlist] = React.useState(AwardsList);
    
  return (
    <div className='award'>
        <motion.div
		  className="container text-center  bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        > 
        <BackgroundAnimation />
        <section class="portfolio-section sec-padding" id="awards">
            <NavLink to='/about' className="btn link-item" style={{'position':'absolute','top': '29px','left': '33px'}}>
                    <i className="fa fa-arrow-left"></i>
            </NavLink>
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2>Awards & Achievements</h2>
                    </div>
                </div>
                <div class="row">
                    {awardlist.map((currElem) => {
                        const { id, awardImage, awardTitle, awardDescription } = currElem;
                        return (
                        <>
                            <div class="portfolio-item" key={id}>
                                <div class="portfolio-item-thumbnail">
                                    <img src={awardImage} alt="Olympiad Certificate"
                                        style={{objectfit: 'cover'}} />
                                </div>
                                <h3 class="portfolio-item-title">
                                    {awardTitle}
                                </h3>
                                <NavLink to = {`/awards_details/${id}`} className="btn view-more-btn">View More</NavLink>
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

export default Award