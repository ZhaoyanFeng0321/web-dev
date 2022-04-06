import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/TodoList.js";
import ReduxExamples from "./redux-examples";

import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ReduxExamples/>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>

        </>
    )
};

export default Labs;

