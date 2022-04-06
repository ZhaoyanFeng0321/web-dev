import WhoToFollowListItem from "./WhoToFollowListItem";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whos = useSelector(state => state.who);

    return (
        <div
            id="tuiter-follow-recommendations"
            className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-3"
        >
            <div className="card">
                <h5>Who to follow</h5>
                {whos.map && whos.map(who => <WhoToFollowListItem who={who}/>)
                }

                <a href="#">Show more</a>
            </div>
        </div>
    );
}

export default WhoToFollowList;
