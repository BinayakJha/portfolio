import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import './Main.css';
import BackgroundAnimation from './BackgroundAnimation';
import AwardsList from './API/AwardsAPI';
function AwardsDetails() {
    const [awardlist, setAwardlist] = React.useState(AwardsList);
    const id = window.location.pathname.split('/')[2] - 1;
  return (
    <div className='awardsdetails'>
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
                    <NavLink to='/awards' className="btn link-item pp-close">
                            <i class="fa fa-times"></i> 
                    </NavLink>
                    <div class="pp-thumbnail">
                        <img src={process.env.PUBLIC_URL + awardlist[id].awardImage} alt="image" />

                    </div>
                    <h3> {awardlist[id].awardTitle} </h3>
                </div>
                     <div class="pp-body">
                            <div class="description">
                                <p>{awardlist[id].awardDescription}
                                </p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default AwardsDetails