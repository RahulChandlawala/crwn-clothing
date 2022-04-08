import React from "react";
import "./menu-iten.style.scss";

const MenuItem = ({ title, imageUrl, size }) => (
	<div
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
export default MenuItem;