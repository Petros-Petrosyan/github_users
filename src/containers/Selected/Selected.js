import React, { useState } from 'react';
import { getAllStorageData } from '../../utiles';
import { UserInfo } from '../../components/UsersInfo';
import toast from 'cogo-toast';

// classes
import classes from './Selected.module.scss';


const Selected = () => {
    const [users, setUsers] = useState(getAllStorageData());

    const remove = (id) => {
        localStorage.removeItem(id);
        setUsers(() => getAllStorageData());
        toast.success('successfully removed', {position: 'bottom-right'});
    }

    const userInfo = users.map((user) => {
        return <UserInfo key={user.id} onRemove={remove} selected={true} {...user} />
    });

    return (
        <section>
            <h2 className={classes.title}>Selected users</h2>
            {userInfo}
        </section>
    )
}


export { Selected }