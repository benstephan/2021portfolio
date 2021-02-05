import React from 'react';
import './Post.scss';
import {
    Link
  } from "react-router-dom";

export default function Post(props) {
    return (
        <div className="featured-post">
            <Link to={props.url}>
                <img src={props.image} alt={props.title} />
                <div className="featured-post__details">
                    <h4>{props.title}</h4>
                </div>
            </Link>
        </div>
    )
}
