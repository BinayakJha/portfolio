import React from "react";
import "./Main.css";
function BackgroundAnimation() {
	return (
		<div className="background__animation">
			<div className="bg-circles">
				<div className="circle-1">
					<img src={process.env.PUBLIC_URL + "/images/c.png"} alt="c logo" />
				</div>
				<div className="circle-2"></div>
				<div className="circle-3">
					<img src="/images/css.png" alt="css logo" />
				</div>
				<div className="circle-4">
					<img src="/images/html.png" alt="html logo" />
				</div>
				<div className="effect-1">
					<img src="/images/python2.png" alt="python logo" />
				</div>
			</div>
		</div>
	);
}

export default BackgroundAnimation;
