import React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

// classes
import classes from './Menu.module.scss';


const Menu = () => {
    return (
        <AppBar position={'static'}>
            <header>
                <ul className={classes.container}>
                    <li className={classes.container__li}>
                        <Link to='/search'>Search GitHub Users</Link>
                    </li>
                    <li className={classes.container__li}>
                        <Link to='/selected'>Selected</Link>
                    </li>
                </ul>
            </header>
        </AppBar>

    )
}

export { Menu }