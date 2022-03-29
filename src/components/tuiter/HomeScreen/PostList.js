import PostItem from "./PostItem.js";
import posts from "../data/posts.json"

const PostList = () => {
  return (
    <div className="wd-post-list">
      {posts.map(post => {
          return <PostItem post={post}/>;
        })
      }
    </div>
  );
}

export default PostList;
