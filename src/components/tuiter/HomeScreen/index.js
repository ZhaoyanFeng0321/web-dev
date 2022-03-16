/* eslint-disable no-undef */

import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList"
import PostList from "../HomeScreen/PostList";
import './home.css';
import '../index.css';
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div
                    id="tuiter-nav"
                    className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
                >
                    <NavigationSidebar active="Home"/>
                </div>
                <div
                    id="wd-home-body"
                    className="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7"
                >
                    <PostList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
                    <PostSummaryList/>
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

export default HomeScreen;