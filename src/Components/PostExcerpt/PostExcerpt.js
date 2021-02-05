import React from 'react';
import { Link } from "react-router-dom";
import './PostExcerpt.scss';

export default function PostExcerpt(props) {
    return (
        <div className="post-excerpt">
            <Link to={props.link}>
            <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
            <img src={props.img} alt={props.title} />
            <div className="post-excerpt__content" dangerouslySetInnerHTML={{ __html: props.desc }}></div>
            </Link>
        </div>
    )
}
