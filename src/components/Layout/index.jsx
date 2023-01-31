import React from 'react';
import Navbar from '../Navbar';
import './style.scss';

const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            {/* <div className="page">
                <span className="tags top-tag">
                    <p className="tags html-tag">&lt;html&gt;</p>
                    <br></br>
				    <p>&lt;body&gt;</p>
                </span>
                <Outlet />
                <span className="tags bottom-tag">
                    &lt;/body&gt;
                </span>
            </div> */}
        </div>
    );
};

export default Layout;
