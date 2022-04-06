import React from "react";

const ShowPic = (pic) => {
    if (pic.type ==='video') {
        return (
            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${pic.link}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>

        )
    } else if (pic.type === 'picture'){
        return (
            <img
                src={pic.link}
                className="wd-post__image"
            />

        )
    } else {
        return (<div> </div>)
    }};

export default ShowPic;