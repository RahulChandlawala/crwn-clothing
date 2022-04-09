import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { withRouter } from "react-router-dom";
import "./menu-iten.style.scss";

// let Navigate = useNavigate();
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
	const params = useParams();
	const location = useLocation();
	// console.log(location.search, new URLSearchParams(location.search).get("id"));
	let navigate = useNavigate();

	return (
		<div
			role="button"
			onClick={() => navigate(`${linkUrl}`)}
			// style={{ backgroundImage: `url(${imageUrl})` }}
			className={`menu-item ${size}`}
		>
			<div
				className="background-image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};
// export default withRouter(MenuItem);
export default MenuItem;
