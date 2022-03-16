const WhoToFollowListItem = ( {
                                who = {
                                  avatarIcon: 'https://i1.sndcdn.com/avatars-JUvAAPvAA86fmbVE-SH0i6g-t500x500.jpg',
                                  userName: 'NASA',
                                  handle: 'NASA',
                                }
                              }) => {
  return(
    <div className="tuiter-follow-recommendation-item">
      <div className="profile-summary">
        <img src={who.avatarIcon}/>
        <div>
          <div><b>{who.userName} </b><span className="fa-stack" style={{"fontSize": "0.5em"}}>
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span></div>

          <div>@{who.handle}</div>
        </div>
      </div>
      <button className="btn">Follow</button>
    </div>
  );
}

export default WhoToFollowListItem;
