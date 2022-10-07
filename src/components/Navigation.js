import React from "react";
import { Link, useHistory } from 'react-router-dom';

function Navigation({ isAuth, toggleAuth }) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                {/*Is de gebruiker ingelogd? Laat dan de blogposts en uitlog knop zien, en anders alleen de login knop */}
                {isAuth === true
                    ? <>
                        <li>
                            <Link to="/blogposts">
                                Blogposts
                            </Link>
                        </li>
                        <li>
                            <button type="button" onClick={signOut}>
                                Uitloggen
                            </button>
                        </li>
                    </>
                    :
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>}
            </ul>
        </nav>
    );
}

export default Navigation;