import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Preloader from "../Components/Preloader/Preloader";
import FullPost from "../Components/FullPost/FullPost";
import Hero from "../Components/Hero/Hero";

export default function Post() {
  const [postSlug, setSlug] = useState();

  useEffect(() => {
    const url = window.location.toString();
    const slug = url.split("/").pop();
    setSlug(slug);
  }, []);

  const { isLoading, error, data, isFetching } = useQuery(
    ["singleData", postSlug],
    () =>
      fetch(
        `https://zms.benstephan.com/index.php/wp-json/wp/v2/posts?slug=${postSlug}`
      ).then((res) => res.json())
  );

  if (isLoading || isFetching) return <div className="large-preloader"><Preloader /></div>;

  if (error) return "An error has occurred: " + error.message;
  
  return data.map((post) => (
    <FullPost
      title={post.title.rendered}
      img={post.fimg_url}
      desc={post.content.rendered}
    />
  ));
}
