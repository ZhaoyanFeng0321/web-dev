import WhoToFollowListItem from "./WhoToFollowListItem";
import whos from "./whos.json";

const WhoToFollowList = () => {
  return (
    <div
      id="tuiter-follow-recommendations"
      className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
    >
      <div className="card">
        <h5>Who to follow</h5>

        {whos.map(item => {
            return (<WhoToFollowListItem who={item}/>);
          })
        }
        <a href="#">Show more</a>
      </div>
    </div>
  );
}

export default WhoToFollowList;
