import React from "react";
import {Link} from "react-router-dom";
import "./index0.css"

const Bookmarks = () => {
    return (
    < div className="wd-bg-color-black">

    <div className=" wd-border wd-border-0 ">
        <div className="wd-font wd-padded-bm">
            <div className="wd-font-20">Bookmarks</div>
            <div className="wd-font-post">@WebDev</div>
        </div>
    </div>


    <div className=" wd-border wd-border-0 wd-container-bm">
        <div className="wd-left-element wd-padded-bm wd-no-pad-right">
            <img src="https://i.insider.com/5e3a0651ab49fd2da135ecd2?width=700"/>
        </div>

        <div className="wd-pad-2 wd-font">
            <div className="wd-pad-bt"><span className="wd-font-bold">Robert Zubrin </span>@robert_zubrin
                · Jul
                31
            </div>
            <div className="wd-pad-bt wd-wid-max wd-fg-white">It is a long established fact that a
                reader
                will be distracted by the readable content
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                a
                more-or-less normal distribution of letters, as opposed to using 'Content here,
                content
                here', making it look like readable English.
            </div>
            <img className="wd-post-img" src="https://static.dw.com/image/47775201_303.jpg"/>
                <div className="wd-post-text">
                    <div className="wd-pad-12">
                        <div className="wd-font-bold">Chanel pays tribute to Lagerfeld with his
                            final
                            collection
                        </div>
                        <div>With Fashion Week in Paris, the German designer's iconic white
                            ponytail and dark shades were missed. Karl Lagerfeld was nevertheless
                            present at
                            the
                            show with his final collection for Chanel.
                        </div>
                        <div>🔗rt.com
                        </div>
                    </div>
                </div>
                <table className="wd-font wd-table wd-wid-max">
                    <tbody>
                    <tr>
                        <td><a className="wd-icon wd-font-none-dec"
                               href="reply.html"><i className="fa fa-comment wd-icon wd-grayscale"
                                                    aria-hidden="true"></i></a>22
                        </td>
                        <td><a className="wd-icon wd-font-none-dec"
                               href="retuit.html"><i className="fa fa-reply wd-icon wd-grayscale"
                                                               aria-hidden="true"></i>
                            </a>9
                        </td>
                        <td><a className="wd-icon wd-font-none-dec wd-pink"
                               href="like.html"><i className="fa fa-heart wd-icon"
                                                               aria-hidden="true"></i>
                             </a> 37
                        </td>
                        <td><a className="wd-icon wd-font-none-dec"
                               href="retuit.html"><i className="fa fa-star wd-icon wd-grayscale"
                                                     aria-hidden="true"></i>
                            </a> 22
                        </td>
                    </tr>
                    </tbody>
                </table>


        </div>
    </div>

    </div>
    )
};

export default Bookmarks;
