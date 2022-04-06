const PostSummaryItemEvent = (post) => {
    return (`
    <div class="wd-content-event wd-content">
          <div class="wd-event-container">
            <div class="wd-event-topic">
              ${post.headline}
            </div>
            <div class="wd-event-headline">
          <span class="wd-event-headline-container">
          ${post.title}
          </span>
            </div>
            <div class="wd-event-trending-row">
              ${post.trending.length > 1 ? 'Trending with&nbsp' : ''}
              <span class="wd-trending-with">
              ${post.trending}
              </span>
            </div>
          </div>
          <img class="wd-event-img"
               src=${post.img}>
    </div>
    `);
};

export default PostSummaryItemEvent;
