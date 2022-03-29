import {React, useState} from "react";
import { useSelector } from "react-redux";
import Profile from "./profile";
import EditProfile from "./edit-profile";
import "./index.css";

const ProfileScreen = () => {
    const profile = useSelector((store) => store.profile);
    const [editing, setEditing] = useState(false);

    return (
        <>
            {
                !editing ?
                (<Profile profile={profile} onEdit={() => setEditing(true)} />) :
                (<EditProfile profile={profile} leaveEdit={() => setEditing(false)} />)
            }
        </>
    );

};

export default ProfileScreen;