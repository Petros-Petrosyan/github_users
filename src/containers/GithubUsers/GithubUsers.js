import React from 'react';
import { useSelector } from 'react-redux';

// material
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';

// components
import {
    Search,
    UsersInfo
} from '../../components';

// classes
import classes from './GithubUsers.module.scss';


const GithubUsers = () => {
    const {
        repositoriesList: {repositories, loading: loadingRepo, exist: existRepo},
        organisationsList: {organisations, loading: loadingOrg, exist: existOrg},
    } = useSelector((state) => state.userReducer);

    let viewRepositories = <p>Please search username for view repositories</p>
    if (loadingRepo) {
        viewRepositories = <div className={classes.center}><CircularProgress/></div>
    }
    if (existRepo) {
        viewRepositories = <UsersInfo isRepo={true} repos={repositories} />
    }

    let viewOrganisations = <p>Please search username for view organisations</p>
    if (loadingOrg) {
        viewOrganisations = <div className={classes.center}><CircularProgress/></div>
    }
    if (existOrg) {
        viewOrganisations = <UsersInfo isRepo={false} orgs={organisations} />
    }

    return (
        <section>
            <Search />
            <div className={classes.sectionController}>
                <Card className={classes.marginTop}>
                    <div className={classes.sectionController__card}>
                        <h2 className={classes.sectionController__card__title}>Repositories</h2>
                        <p className={classes.sectionController__card__title}><b>Click on user for save</b></p>
                        {viewRepositories}
                    </div>
                </Card>
                <Card className={classes.marginTop}>
                    <div className={classes.sectionController__card}>
                        <h2 className={classes.sectionController__card__title}>Organisations</h2>
                        <p className={classes.sectionController__card__title}><b>Click on user for save</b></p>
                        {viewOrganisations}
                    </div>
                </Card>
            </div>
        </section>
    )
}

export { GithubUsers }