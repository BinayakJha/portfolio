import React from "react";
import "./Main.css";
import BackgroundAnimation from './BackgroundAnimation';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
function MainPage() {
	var TxtRotate = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = "";
		this.tick();
		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span className="wrap">' + this.txt + "</span>";

		var that = this;
		var delta = 300 - Math.random() * 100;

		if (this.isDeleting) {
			delta /= 2;
		}

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === "") {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};
	window.onload = function () {
		var elements = document.getElementsByClassName("txt-rotate");
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute("data-rotate");
			var period = elements[i].getAttribute("data-period");
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.09em solid black }";
		document.body.appendChild(css);
	};
	return (

	<div className="mainpage">
		<motion.div
		className="container text-center  bg-black"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.3 }}
		>
			<BackgroundAnimation />
			<div className="main">
				<section className="home-section align-items-center active" id="home">
					<div className="container">
						<div className="row align-items-center">
							<div className="home-text">
								<p>Hello, I'm</p>
								<h1>Binayak Jha</h1>
								<h2 id="tagline">
									<span
										className="txt-rotate"
										data-period="2000"
										data-rotate='[ "A Full-Stack-Web-Developer.", "A Youtuber & ML Enthusiast" ]'
									></span>
								</h2>
								
								<NavLink to="/about" className="btn link-item" activeClassName="active">
									About Me
								</NavLink>

								<NavLink to="/portfolio" className="btn link-item" activeClassName="active">
									Portfolio
								</NavLink>
							</div>
							<div className="home-img">
								<div className="img-box3">
									<img
										src={process.env.PUBLIC_URL + "/images/reactjs.png"}
										alt="reactjs-logo"
										style={{ objectfit: "cover" }}
									/>
								</div>
								<div className="img-box">
									<img src="./images/profile2.jpg" alt="my profile" />
								</div>
								<div className="img-box2">
									<img
										src="./images/django.png"
										alt="Djangoproject Logo Icon by Jagathish Sara"
										title="contributing to open-source project"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</motion.div>
	</div>
	);
}

export default MainPage;
