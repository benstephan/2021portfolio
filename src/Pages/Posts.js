import React from "react";
import { useQuery } from "react-query";
import Preloader from '../Components/Preloader/Preloader';
import PostExcerpt from '../Components/PostExcerpt/PostExcerpt'
import Hero from "../Components/Hero/Hero";

export default function Posts() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://zms.benstephan.com/index.php/wp-json/wp/v2/posts"
    ).then((res) => res.json())
  );

  if (isLoading) return <div className="large-preloader"><Preloader /></div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="posts">
      <Hero
        title="Blog"
        desc="My work page is my laboratory for my creative projects. No client work is presented here, because I am employed full-time at beMarketing Solutions, as a senior web developer. This is more for fun."
      />
      {data.map((post) => (
        <PostExcerpt title={post.title.rendered} img={post.fimg_url} desc={post.excerpt.rendered} link={`/post/${post.slug}`} />
      ))}
    </div>
  );
}
