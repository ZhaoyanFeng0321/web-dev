import links from "./links.json";
import NavItem from "./NavItem";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'Explore'
    }) => {
    return (
            <div>
                <div className="d-none d-xxl-block">
                    <div className="list-group">
                        <Link to="/HomeScreen/index"
                           className="list-group-item list-group-item-action">
                            <i className="fab fa-twitter fa-lg"></i>
                        </Link>
                        {links.map(link => {
                        return (<NavItem link={link} active={active}/>);
                    })
                    }
                        <button type="button"
                                className="btn btn-primary btn-block rounded-pill mt-2">Tuit
                        </button>
                    </div>
                </div>
            </div>
            );
}

export default NavigationSidebar;

