const PostSummaryItemTopic = (post) => {
    return (`
    <div class="wd-content-topic-row wd-content">
          <div class="wd-content-topic">
            <div class="wd-trending">
              ${post.trending}
            </div>
            <div class="wd-topic">
              ${post.title}
            </div>
            <div class="wd-tuit-total wd-trending">
              ${post.tuits}
            </div>
          </div>
          <div class="wd-topic-options">
            ...
          </div>
        </div>
    `)
}

export default PostSummaryItemTopic;
