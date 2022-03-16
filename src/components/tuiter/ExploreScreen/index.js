import React from "react";
import {Link} from "react-router-dom";

import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent.js";
import './index.css';

const ExploreScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div
                    id="tuiter-nav"
                    className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
                >
                    <NavigationSidebar active="Explore"/>
                </div>
                <div
                    id="wd-explore-body"
                    className="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7"
                >
                    <ExploreComponent/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
                    <WhoToFollowList/>
                </div>
            </div>
            <br/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
        </>
    );
}

export default ExploreScreen;
