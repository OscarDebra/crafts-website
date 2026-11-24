import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export function Card({ title, description, image, link }) {
  return (
    <Link to={link} className="card-link">
        <div className="card">
            <img className="img" src={image} alt={title} />
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
        </div>
    </Link>
  );
}