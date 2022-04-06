const PostSummaryItem = ({
                           post = {
                             topic: 'Web Development',
                             userName: 'ReactJS',
                             time: '2h',
                             title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                             image: 'https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png'
                           }
                         }
) => {
  return (
    <div className="wd-post-summary__post">
      <div>
        <p className="wd-post__annotations">
          <span>{post.topic}</span>
        </p>
        <p className="wd-post__annotations">
          <span className="wd-post__author">{post.userName} </span>
            <span className="fa-stack" style={{"fontSize": "0.5em"}}>
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
          <span> {post.time}</span>
        </p>
        <p className="wd-post__title">{post.title}</p>
      </div>
      <img
        src={post.image}
        className="wd-post-summary__image"
      />
    </div>
  );
}

export default PostSummaryItem;
