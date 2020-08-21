import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// action
import { saveData } from '../../../store/user/action';

// classes
import classes from './UserInfo.module.scss';


const UserInfo = (props) => {
    const dispatch = useDispatch();
    const {isRepo, selected, id, projectName, createdData, src, name, url, onRemove} = props;

    const save = () => {
        if (!selected) {
            let data;
            if (isRepo) {
                data = {isRepo, id, src, name, projectName, createdData}
            } else {
                data = {isRepo, id, src, name, url}
            }
            dispatch(saveData(data));
        }
    }

    const remove = () => {
        onRemove(id);
    }

    let content;
    if (isRepo) {
        content = (
            <div>
                <h3>{name}</h3>
                <p><b>Project Name:</b> {projectName}</p>
                <p><b>Created at:</b> {createdData}</p>
            </div>
        )
    } else {
        content = (
            <div>
                <h3>{name}</h3>
                <p><b>Url:</b> {url}</p>
            </div>
        )
    }

    return (
            <div onClick={save} className={classes.section}>
                <img className={classes.img} src={src} />
                {content}
                {selected ? <span onClick={remove} className={classes.remove}>X</span> : null}
            </div>
    )
}


UserInfo.propTypes = {
    isRepo: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    projectName: PropTypes.string,
    createdData: PropTypes.string,
    src: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
}


export { UserInfo }