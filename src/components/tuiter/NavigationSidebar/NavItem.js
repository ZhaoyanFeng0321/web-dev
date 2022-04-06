import {Link} from "react-router-dom";

const NavItem = ({
                     link, active
                 }) => {
    return (

        <Link to={link.path}
              className="list-group-item list-group-item-action wd-list-group-item-override"
              {`${active === link.label ? 'active' : ''}`}>
            <i className={link.icon}></i>
            <span className="d-none d-xl-inline-block">  {link.label}</span>
        </Link>
    )
}
export default NavItem;