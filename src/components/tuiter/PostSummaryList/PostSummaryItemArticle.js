const PostSummaryItemArticle = (post) => {
    return (`
    <div class="wd-content-article wd-content">
          <div class="wd-article-container">
            <div class="wd-article-account">
              <img class="wd-account-img"
                   src=${post.avatarImg}>
              <div class="wd-account">
                ${post.userName}
              </div>
              <span class="fa-stack fa-1x">
            <i class="fas fa-certificate fa-stack-1x"></i>
            <i class="fas fa-check fa-stack-1x"></i>
          </span>
              &#5867 ${post.time}
            </div>
            <div class="wd-article-title">
              ${post.title}
            </div>
          </div>
          <img class="wd-article-img"
               src=${post.img}>
        </div>
    `)
}

export default PostSummaryItemArticle;
