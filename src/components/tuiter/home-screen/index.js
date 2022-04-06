import TuitList from "../tuit-list";
import './home.css';
import '../index.css';
import WhatsHappening
    from "./whats-happening";

const HomeScreen = () => {
    return (
        <div id="wd-post-list">
            <WhatsHappening/>

            {/*<h2>Home</h2>*/}
            <TuitList/>
        </div>

    )
}
export default HomeScreen;