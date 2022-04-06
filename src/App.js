import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes}
    from "react-router-dom";

import './App.css';
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/ExploreScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter/"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            {/*<Route path="notifications"*/}
                            {/*       element={<NotificationScreen/>}/>*/}

                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


// function App() {
//     return (
//         // sets up the base mechanism to navigate between multiple components
//         <BrowserRouter>
//             <div className="container">
//                 {/* To navigate between components we use the Route component from React Router to declare paths and map them to corresponding component we want to render for that path.*/}
//                 <Routes>
//                     <Route path="/hello"
//                            exact={true}
//                            element={<HelloWorld/>}/>
//                     <Route path="/"
//                            exact={true}
//                            element={<Labs/>}/>
//                     <Route path="/tuiter/home"
//                            exact={true}
//                            element={<HomeScreen/>}/>
//                     <Route path="/tuiter/bookmarks" element={<Bookmarks/>}/>
//
//                     <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
//
//                 </Routes>
//                 {/*<HelloWorld/>*/}
//                 {/*<Index/>*/}
//                 {/*<Index/>*/}
//                 {/*<h1>Hello World!</h1>*/}
//             </div>
//         </BrowserRouter>
//     );
// }

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }