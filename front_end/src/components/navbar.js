function NavBar(props) {
    const profile = props.profile || ''
    const searchResult = props.searchResult || ''
    const flatDetails = props.flatDetails || ''
    const logIn = props.logIn || ''
    const signUp = props.signUp || ''

    return <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className = "navbar-nav">
                    <li className="nav-item">
                        <a className={"nav-link" + profile} href="/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + flatDetails} href="/flat_details">Flat Details</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + searchResult} href="#">Search Result</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + logIn} href="/sign_in">Log In</a>
                    </li>
                    <li className="nav-item">
                        <a className={"nav-link" + signUp} href="/signup">Sign Up</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default NavBar;