import React, { useContext, useState } from 'react';
import AdminNavbar from '../admin-navbar/AdminNavbar';
import AddItem from '../navbar-components/add-item/AddItem';
import Dashbord from '../navbar-components/dashbord/Dashbord';

import "./admin.scss"


const Admin = () => {

    const [panel, setPanle] = useState(0)



    const select_panel = () => {
        switch (panel) {
            case (0): return <Dashbord />
            case (1): return <AddItem />
            default: return <Dashbord />
        }
    }




    return (
        <div className="admin">
            <div className="admin-panel">
                <AdminNavbar panel={panel} set={setPanle} />
                <div className="nav-contetn">
                    {select_panel()}
                </div>
            </div>
        </div>
    );
}

export default Admin;