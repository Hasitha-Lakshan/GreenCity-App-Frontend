import { useState } from "react"
import "./header.css"
import * as authService from "../../shared/services/auth.service"
import * as profileManagementService from "../../services/profileManagement.service"
import SignupModal from "../../Modal/SignupModal"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/Images/greencity_logo.png"

const Header = (props: any) => {
    const currentUser = localStorage.getItem('username');
    const currentUserRole = localStorage.getItem('userRole');
    const navigate = useNavigate();
    const { loginStatus } = props;
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const logOut = () => {
        authService.logout();
        props.loginStatusHandler(false);
    };

    const profile = () => {
        const username = localStorage.getItem("username");
        const userRole = localStorage.getItem("userRole");

        if (username && userRole) {
            if (userRole === "USER") {
                profileManagementService.userProfileDetails(username, userRole);
            } else if (userRole === "COLLECTION_CENTER") {
                profileManagementService.collectionCenterProfileDetails(userRole, userRole);
            }
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-md fixed-top sticky-top shadow py-0">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'> <img src={logo} alt="" height="60" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav text-uppercase text-center">
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item mt-2">
                                <Link className="nav-link" to='/'>About</Link>
                            </li>

                            {
                                loginStatus ? (
                                    <li className="nav-item mt-2">
                                        {currentUserRole === "USER" ? (<Link className="nav-link" to='customer/request'>Request</Link>)
                                            : currentUserRole === "COLLECTION_CENTER" ? (<Link className="nav-link" to='collectionRequest/requestDashboard'>Collection Request</Link>)
                                                : <></>}
                                    </li>
                                ) : <></>
                            }

                            {
                                loginStatus ? (
                                    <li className="nav-item mt-2">
                                        <Link className="nav-link" to={{ pathname: "/userProfile/" + currentUser }} onClick={() => profile()}>{currentUser}</Link>
                                    </li>
                                ) : <></>

                            }
                            <li className="nav-item mt-2">
                                {loginStatus ? (<Link className="nav-link" to='/login' onClick={() => logOut()}>Logout</Link>)
                                    : (<Link className="nav-link" to='/login'>Login</Link>)}
                            </li>
                            <li className="nav-item mt-2">
                                {!loginStatus ? (<a className="nav-link sign-up" onClick={() => setShowSignUpModal(true)}>Sign up</a>)
                                    : <></>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <SignupModal show={showSignUpModal} onHide={() => setShowSignUpModal(false)} />
        </>
    )
}

export default Header;
