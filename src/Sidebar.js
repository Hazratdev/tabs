import React from 'react';
import {Link} from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="side" >
            <Link to={"/"}>
                    Sidebar

            </Link>
            <hr style={{
                width: "40px",
                height: "0"
            }} />
            <ul>
                <li>
                    <Link to={"/dashboard"} href="">Dashboard </Link>
                </li>
                <li>
                    <Link to={"/orders"} href="">Orders </Link>
                </li>
                <li>
                    <Link to={"/custumers"} href="">Custumers </Link>
                </li>
                <li>
                    <Link to={"/report"} href="">Report  </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;