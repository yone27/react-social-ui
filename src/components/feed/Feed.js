import Post from "../post/Post";
import Share from "../share/Share";
import React from "react";
import "./feed.css";
import { Posts as PostsData } from "../../dummyData";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {PostsData.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
