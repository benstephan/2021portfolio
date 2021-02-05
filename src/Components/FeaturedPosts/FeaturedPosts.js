import React from "react";
import { useQuery } from "react-query";
import Post from './Post/Post'
import "./FeaturedPosts.scss";
import Preloader from '../Preloader/Preloader'

export default function FeaturedPosts() {
  const { isLoading, error, data, isFetching } = useQuery("featuredData", () =>
    fetch(
      "https://zms.benstephan.com/index.php/wp-json/wp/v2/posts?per_page=3"
    ).then((res) => res.json())
  );

  if (isLoading) return <Preloader />;

  if (error) return "An error has occurred: " + error.message;

  return (
  <div className="featured-posts">
      {data.map(post => 
        <Post title={post.title.rendered} image={post.fimg_url} url={`/post/${post.slug}`} />
      )}
  </div>
  );
}
