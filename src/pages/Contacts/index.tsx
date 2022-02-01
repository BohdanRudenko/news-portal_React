import React, {useState} from "react";
import routeMain from "./routes";

import "./style.scss";

const bohdanImg =  require("assets/img/BR.jpg");



const Contacts = () => {

	return (
  		<section className="contactsPage">
			<div className="info">
				<div className="phone">
					<a href="tel:+380663720086">+38 (066) 372 00 86</a>
				</div>
				<div className="name">
					Богдан <br /> Руденко
				</div>
				<div className="mail">
					<a href="mailto:rudbog01@gmail.com">rudbog01@gmail.com</a>
				</div>
				<div className="position">Frontend Developer</div>
				<div className="technologies">HTML CSS JS</div>
			</div>
    		<div className="image">
				<img src={bohdanImg} alt={bohdanImg} />
    		</div>
  	</section>)
};


export { routeMain };
export default Contacts;