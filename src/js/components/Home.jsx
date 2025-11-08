import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="contador-container d-flex align-items-center justify-content-center text-center">
			<h2 className="contador-title me-4"><i class="fa-regular fa-clock"></i></h2>
			<div className="contador-digits d-flex justify-content-center">
				<div className="digit-box mx-2">
					{props.digitSix}
				</div>
				<div className="digit-box mx-2">
					{props.digitFive}
				</div>
				<div className="digit-box mx-2">
					{props.digitFour}
				</div>
				<div className="digit-box mx-2">
					{props.digitThree}
				</div>
				<div className="digit-box mx-2">
					{props.digitTwo}
				</div>
				<div className="digit-box mx-2">
					{props.digitOne}
				</div>
			</div>
		</div>
	);
};

export default Home;