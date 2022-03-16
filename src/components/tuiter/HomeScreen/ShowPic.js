import React from "react";

const ShowPic = (
    {
        pic = ''

    }) => {
    if (pic==='') {
        return (<div> </div>)
    } else {
        return (
            <img
                src={pic}
                className="wd-post__image"
            />

        )
    }};

export default ShowPic;