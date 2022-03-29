import PostList from "../HomeScreen/PostList";
import './home.css';
import '../index.css';

const HomeScreen = () => {
    return (
        <>
                {/*<div*/}
                {/*    id="tuiter-nav"*/}
                {/*    className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"*/}
                {/*>*/}
                {/*    <NavigationSidebar active="Home"/>*/}
                {/*</div>*/}
                <div id="wd-home-body">
                    <PostList/>
                </div>
                {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">*/}
                {/*    <PostSummaryList/>*/}
                {/*</div>*/}
        </>
    );
}

export default HomeScreen;