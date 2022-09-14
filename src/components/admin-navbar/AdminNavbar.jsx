import React, { useEffect } from 'react';

import "./admin-navbar.scss"
import { nav_links } from './admin-panel';

const AdminNavbar = ({panel,set}) => {

    const toggle_nav=()=>{
        document.querySelector(".admin-navbar").classList.toggle("de-active")
    }

    useEffect(()=>{
        
        let navs=document.querySelectorAll(".e-link")
        navs.forEach(e=>e.classList.remove("active"))
        navs[panel].classList.add("active")

    },[panel])
    return (
        <div className="admin-navbar de-active">
            <div className="content">
                <div className="head">
                    <i className="fas fa-arrow-right" onClick={toggle_nav}/>
                    پنل مدیریت
                </div>
                <div className="list">
                    {nav_links.map((link,index)=>
                        
                        <div className="e-link" onClick={()=>{set(index)}}>
                            <div className="icon">
                                <i className={`fas fa-${link.icon}`}/>
                            </div>
                            <div className="dis">
                                {link.label}
                            </div>
                        </div>
                        )}
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;