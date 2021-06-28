
const socialIcons = {
    facebook: require('../assets/img/facebook_icon.png').default,
    github: require('../assets/img/github_icon.png').default,
    google: require('../assets/img/Google_icon_2015.png').default,
    linkedIn: require('../assets/img/linkedin_icon.png').default
}

const SocialHolder = (props) => {
    const imgUrl = props.imgUrl
    const color = props.color

    return <a href="#"><div className = 'col-auto' style = {{textAlign: 'center'}}>
        <img src={props.imgUrl} alt='A social app icon' style = {imgStyles}/>
    </div> </a>
}

const FacebookLogin = (props) => <SocialHolder imgUrl = {socialIcons.facebook} />
const GoogleLogin = (props) => <SocialHolder imgUrl = {socialIcons.google} />
const GithubLogin = (props) => <SocialHolder imgUrl = {socialIcons.github} />
const LinkedInLogin = (props) => <SocialHolder imgUrl = {socialIcons.linkedIn} />


export {
    FacebookLogin,
    GoogleLogin, 
    GithubLogin,
    LinkedInLogin
}

// Styles
const imgStyles = {
    height: 40,
    margin: '10%',
}


