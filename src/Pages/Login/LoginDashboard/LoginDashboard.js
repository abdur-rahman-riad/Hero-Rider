import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const LoginDashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className="mt-3 pt-3 mb-5 pb-5">
            <div className="container">
                <div className="w-75 mx-auto bg-light shadow-sm p-2 rounded-3 d-flex justify-content-around">
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
    );
};

export default LoginDashboard;