import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit}
    from "../../../actions/tuits-actions";
//    {
//         link = {
//             previewImageSrc: '',
//             previewTitle:'',
//             previewDescription:'',
//             baseUrl:''
//         }
//     }) => {

const PostItem = ({tuit}) => {
    const dispatch = useDispatch();

    return (
        <>
            <li className="list-group-item wd-tuit-item d-flex">
                <img src={tuit.avatarImage} className="wd-post__profileImage"
                />
                <div className=" wd-full-width">

                    <div>
                        <div className=" mb-2">

                            <p className="wd-post__annotations wd-full-width ">
                                <i onClick={() => deleteTuit(
                                    dispatch, tuit)}
                                   className="fas fa-times fa-pull-right wd-color-gray"> </i>

                                <span className="wd-post__author">{`${tuit.postedBy.username ? " · " + tuit.postedBy.username : ""}`}</span>
                                <span className="fa-stack" style={{"fontSize": "0.5em"}}>
                          <i className="fas fa-circle fa-stack-2x"> </i>
                          <i className="fas fa-check fa-stack-1x fa-inverse"> </i>
                        </span>
                                <span> @{tuit.handle}</span>

                                {`${tuit.time ? " · " + tuit.time : "1s"}`}
                            </p>
                            {tuit.tuit}
                        </div>

                        {tuit.attachments && tuit.attachments.image &&
                         <img className="wd-post__image mb-2" src={tuit.attachments.image}/>
                        }
                        {tuit.attachments && tuit.attachments.video &&
                         <iframe width="100%" height="350px"
                                 className="video-responsive"
                                 src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                 allowFullScreen></iframe>
                        }
                        <br/>
                        <TuitStats tuit={tuit}/>
                    </div>

                </div>
            </li>
        </>
    );
}

export default PostItem;
