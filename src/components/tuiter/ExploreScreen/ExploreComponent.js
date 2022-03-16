import PostSummaryList from "../PostSummaryList/";

const ExploreComponent = () => {
    return (
        <>
            <div id="wd-explore-search">
                <div className="input-group">
      <span className="input-group-text">
        <i className="fa fa-search wd-color-light-grey"></i>
      </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Tuiter"
                    />
                </div>
                <a href="../explore/explore-settings.html">
                    <i className="fa fa-cog fa-lg wd-color-white"></i>
                </a>
            </div>

            <nav id="wd-explore-tabs" className="mt-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="../explore/for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../explore/trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../explore/news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../explore/sports.html">Sports</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           href="../explore/entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </nav>

            <div id="wd-explore-feed">
                <div id="wd-explore-featured">
                    <h4>SpaceX's Starship</h4>
                </div>

                <PostSummaryList/>
            </div>
        </>
    );
}

export default ExploreComponent;
