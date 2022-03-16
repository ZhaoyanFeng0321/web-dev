import PostSummaryItem from "./PostSummaryItem.js";
import posts from './posts.json'

const PostSummaryList = () => {
  return (
    <div id="wd-explore-post-list">
      {posts.map(item => {
          return (<PostSummaryItem post={item}/>);
        })
      }
    </div>
  );
}

export default PostSummaryList;
