import ShowPost from "./ShowPost";
import ShowPic from "./ShowPic";

const PostItem = (
    {
                      post = {
                          author: {
                              name: 'Elon Musk',
                              handle: '@elonmusk',
                              profileImgSrc: 'https://cdn.mos.cms.futurecdn.net/J2NTP9Er4Ad3kRsms7XRoD.jpeg'

                          },
                          timeStamp: '2h',
                          description: 'Amazing show about @inspiration4x mission!',
                          link: {
                              previewImageSrc: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5',
                              previewTitle: 'Countdown: Inspiration4 Mission to Space | Netflix Official Site',
                              previewDescription: 'From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-vicilian orbital space ...',
                              baseUrl: 'netflix.com'
                          },
                          interactionsCount: {
                              comments: '4.2K',
                              retweets: '3.5K',
                              likes: '37.5K'
                          }
                      }
                  }) => {

    return (
        <div className="wd-post-item d-flex">
            <img
                src={post.author.profileImgSrc}
                className="wd-post__profileImage"
            />
            <div>
                <div>
                    <p className="wd-post__annotations">
                        <span className="wd-post__author">{post.author.name}</span>
                        <span className="fa-stack" style={{"fontSize": "0.5em"}}>
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        <span> @{post.author.handle}</span>

                        {`${post.timeStamp ? " · " + post.timeStamp : ""}`}
                    </p>
                    <p>{post.description}</p>
                </div>

                <ShowPost link={post.link}/>
                <ShowPic pic={post.imageSrc}/>
                <div className="wd-post__interactions d-flex justify-content-between">
                    <div>
                        <i className="fa fa-comment"></i>
                        {post.interactionsCount.comments}
                    </div>
                    <div>
                        <i className="fas fa-sync"></i>
                        {post.interactionsCount.retweets}
                    </div>
                    <div>
                        <i className="far fa-heart"></i>
                        {post.interactionsCount.likes}
                    </div>
                    <div>
                        <i className="far fa-share-square"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
