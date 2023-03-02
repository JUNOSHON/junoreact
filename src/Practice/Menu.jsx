import React from 'react';
import {Link, Outlet} from "react-router-dom";

export default function Menu() {
    return (
        <div>
          <ul>
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
          </ul>
        <Outlet />
        </div>
    )
}
