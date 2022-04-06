import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "../../../src/components/tuiter/NavigationSidebar";
import whoReducer from "./reducers/who-reducer";
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import './index.css';
import WhoToFollowList from "./WhoToFollowList";
import profileReducer from "./reducers/profile-reducer";

const reducer = combineReducers({tuits: tuitsReducer, profile: profileReducer, who: whoReducer});
const store = createStore(reducer);

const Tuiter = () => {
    return (
        <Provider store={store}>

            <div className="row mt-2">
                <div
                    id="tuiter-nav"
                    className="col-2 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2"
                >
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-sm-9 col-md-10 col-lg-6 col-xl-6 col-xxl-7">
                    <Outlet/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-3">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );

    // return(
    //     <>
    //         <ExploreScreen/>
    //     </>
    // )
//<Index active="home"/>
    // return(
    //     <>
    //         <h1>Tuiter</h1>
    //         <Link to="/hello">
    //             Hello
    //         </Link> |
    //         <Link to="/">
    //             Labs
    //         </Link>
    //     </>
    // )
};

export default Tuiter;
