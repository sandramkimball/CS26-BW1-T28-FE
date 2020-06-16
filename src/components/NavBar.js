import React from 'react'
import "../App.css";
import {NavLink, withRouter} from 'react-router-dom'


function NavBar(props){

    const logout = e => {
        localStorage.clear();
        props.history.push('/login')
    };

    return(
        <div className='NavBar'>
            <ul>
                {localStorage.getItem('user') && (
                    <NavLink to='/login'> <li onClick={logout}>Logout</li> </NavLink>
                )}

                {localStorage.getItem('user') && (
                    <NavLink to='/game'><li>Game</li></NavLink>
                )}

                {!localStorage.getItem('user') && (
                    <NavLink to='/login'><li>Login</li></NavLink>
                )}
                
                {!localStorage.getItem('user') && (
                    <NavLink to='/registration'><li>Signup</li></NavLink>
                )}
            </ul>
        </div>
    );
}

export default withRouter(NavBar);