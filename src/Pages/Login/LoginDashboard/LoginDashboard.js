import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import LoginHome from '../LoginHome/LoginHome';
import RiderLogin from '../RiderLogin/RiderLogin';
import DrivingLernerLogin from '../DrivingLearnerLogin/DrivingLearnerLogin';
import AdminLogin from '../AdminLogin/AdminLogin';

const LoginDashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <>
            <div className="mt-3">
                <div className="container">
                    <h4 className='fw-bold text-center mb-3 fst-italic'>Please Choose Your Option</h4>
                    <div className="w-75 mx-auto mb-4 bg-light shadow-sm p-2 rounded-3 d-flex justify-content-around">
                        <Link to={`${url}/riderlogin`}>
                            <button className="btn btn-light fw-bold">Rider Login</button>
                        </Link>
                        <Link to={`${url}/drivinglogin`}>
                            <button className="btn btn-light fw-bold">Driving Learner Login</button>
                        </Link>
                        <Link to={`${url}/adminlogin`}>
                            <button className="btn btn-light fw-bold">Admin Login</button>
                        </Link>


                    </div>
                </div>
            </div>

            <Switch>
                <Route exact path={path}>
                    <LoginHome />
                </Route>
                <Route path={`${path}/riderlogin`}>
                    <RiderLogin />
                </Route>
                <Route path={`${path}/drivinglogin`}>
                    <DrivingLernerLogin />
                </Route>
                <Route path={`${path}/adminlogin`}>
                    <AdminLogin />
                </Route>
            </Switch>
        </>
    );
};

export default LoginDashboard;