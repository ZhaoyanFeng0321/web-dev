import React from "react";

const ShowPost = (
    {
        link = {
            previewImageSrc: '',
            previewTitle:'',
            previewDescription:'',
            baseUrl:''
        }
    }) => {
    if (link.previewImageSrc==='') {
        return (<div> </div>)
    } else {
    return (
        <div className="wd-post__link">
            <img
                src={link.previewImageSrc}
                className="wd-post__image wd-post__link-image"
            />
            <div className="wd-post__link-text">
                <p className="wd-post__link-title">{link.previewTitle}</p>
                <p className="wd-post__link-description">{link.previewDescription}</p>
                <p className="wd-post__link-url">
                    <a href={link.baseUrl} target="_blank">{link.baseUrl}</a>
                </p>
            </div>
        </div>

    )
}};

export default ShowPost;