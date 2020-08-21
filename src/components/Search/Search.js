import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import SearchBar from 'material-ui-search-bar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// actions
import {
    getReposInit,
    getOrgsInit,
} from '../../store/user/action';

// classes
import classes from './Search.module.scss';


const Search = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [checkBox, setCheckBox] = React.useState({
        repo: true,
        org: false,
    });

    const changCheckbox = (event) => {
        const {target: {name, checked}} = event;
        setCheckBox({ ...checkBox, [name]: checked });
    }

    const getData = () => {
        if (name.length) {
            const {repo, org} = checkBox;
            if (repo) {
                dispatch(getReposInit(name));
            }
            if (org) {
                dispatch(getOrgsInit(name));
            }
        }
    }

    return (
        <div className={classes.search}>
            <SearchBar
                value={name}
                placeholder={'Search Username'}
                onChange={(value) => setName(value)}
                onRequestSearch={getData}
            />

            <div className={classes.search__center}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkBox.repo}
                            onChange={changCheckbox}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            name='repo'
                        />
                    }
                    label="Repositories"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checkBox.org}
                            onChange={changCheckbox}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            name='org'
                        />
                    }
                    label="Organisations"
                />
            </div>
        </div>
    )
}


export { Search }