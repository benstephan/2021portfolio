import React from "react";

export default function FullPost(props) {
  return (
    <div className="post-excerpt full-post">
      <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
      <img src={props.img} alt={props.title} />
      <div
        className="post-excerpt__content"
        dangerouslySetInnerHTML={{ __html: props.desc }}
      ></div>
    </div>
  );
}
