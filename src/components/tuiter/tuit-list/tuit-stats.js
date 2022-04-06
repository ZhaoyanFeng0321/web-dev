import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };

    return (
        <div className="wd-color-gray row">
            <span className="col">
                <i className="far fa-comment me-2"></i>
                {tuit.interactionsCount && tuit.interactionsCount.comments}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"></i>
                {tuit.interactionsCount && tuit.interactionsCount.retweets}
            </span>
            <span onClick={likeTuit} className="col">
                {
                    tuit.liked &&
                    <span className="wd-color-red">
                        <i className="fas fa-heart me-2"></i>
                        {tuit.interactionsCount && tuit.interactionsCount.likes}
                    </span>
                }
                {
                    !tuit.liked &&
                    <span>
                        <i className="far fa-heart me-2"></i>
                        {tuit.interactionsCount && tuit.interactionsCount.likes}
                    </span>
                }
            </span>
            <span className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </span>
        </div>
    );
}

export default TuitStats;