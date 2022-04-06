import React from "react";
import {useDispatch} from "react-redux";
import { updateTuit } from '../../../actions/tuits-actions';

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <div className="wd-color-gray row">
            <span className="col">
                <i className="far fa-comment me-2"></i>
                {tuit.stats && tuit.stats.comments}
            </span>
            <span className="col">
                <i className="fas fa-retweet me-2"></i>
                {tuit.stats && tuit.stats.retuits}
            </span>
            <span className="col">
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    likes: tuit.likes + (tuit.liked ? -1 : 1),
                    liked: !tuit.liked,
                })} className={`${tuit.liked ? "fas" : "far"} fa-thumbs-up me-2`}> </i>
                {tuit.likes}
            </span>
            <span className="col">
                <i onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    dislikes: tuit.dislikes + (tuit.disliked ? -1 : 1),
                    disliked: !tuit.disliked,
                })} className={`${tuit.disliked ? "fas" : "far"} fa-thumbs-down me-2`}> </i>
                {tuit.dislikes}
            </span>
            <span className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </span>
        </div>
    );
}

export default TuitStats;