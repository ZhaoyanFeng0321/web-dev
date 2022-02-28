import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`
  <div id="wd-explore-search">
    <div class="input-group">
      <span class="input-group-text">
        <i class="fa fa-search wd-color-light-grey"></i>
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Search Tuiter"
      />
    </div>
    <a href="explore-settings.html">
      <i class="fa fa-cog fa-lg wd-color-white"></i>
    </a>
  </div>

  <nav id="wd-explore-tabs" class="mt-2">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="../explore/for-you.html">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../explore/trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../explore/news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../explore/sports.html">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../explore/entertainment.html">Entertainment</a>
      </li>
    </ul>
  </nav>

  <div id="wd-explore-feed">
    <div id="wd-explore-featured">
      <h3>SpaceX's Starship</h3>
    </div>

    ${PostSummaryList()}
  </div>
  `);
}

export default ExploreComponent;
