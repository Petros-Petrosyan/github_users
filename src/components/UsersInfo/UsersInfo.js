import React from 'react';
import PropTypes from 'prop-types';

// components
import { UserInfo } from '.';


const UsersInfo = (props) => {
    const {isRepo, repos, orgs} = props;

    if (isRepo) {
        if (repos.length) {
            const info = repos.map((repo) => {
                const {owner: {avatar_url, login}, created_at, name, id} = repo;

                return (
                    <UserInfo
                        key={id}
                        id={id}
                        projectName={name}
                        createdData={created_at}
                        src={avatar_url}
                        name={login}
                        isRepo={isRepo}
                    />
                )
            });

            return info
        } else {
            return <p>No Result</p>
        }
    } else {
        if (orgs.length) {
            const info = orgs.map((org) => {
                const {avatar_url, login, url, id} = org;
                return (
                    <UserInfo
                        key={id}
                        id={id}
                        src={avatar_url}
                        url={url}
                        name={login}
                        isRepo={isRepo}
                    />
                )
            });

            return info
        } else {
            return <p>No Result</p>
        }
    }
}


UsersInfo.propTypes = {
    isRepo: PropTypes.bool.isRequired,
    repos: PropTypes.array,
    orgs: PropTypes.array,
}


export { UsersInfo }