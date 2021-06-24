import './style.css'

// Icons paths
const homeIcon = require('../../assets/img/home-icon.png').default
const signInIcon = require('../../assets/img/sign_in.png').default
const brokenImg = require('../../assets/img/img_load_failed.png').default

// Utility components
const Card = props => {
  const link = props.link || '#'
  const img = props.img || brokenImg
  return <div className = 'bg-hovered fast-transition col p-3'>
    
    <a href = {link} className = 'link-card'>
      <img src = {img} className = 'img-card' alt='a card image'/>
      <hr/>
      <p className = 'font-monospace'>I am a card card card card</p>
    </a>
    
  </div>
}

// Landing components
const MarkArea = (props) => {  
  return <div className="sm-hovered normal-transition mark-item col-sm-2">
  <img src={props.path} className = 'icon' /></div>
}

const SearchArea = (props) => {
  return <div className="search-area">
    <div className = "dark-bg">
      <h1 className = 'search-heading fs-3'>Lets find you a new home!</h1>
      <hr/>
      <p class='font-monospace'>Search the areas you would like to stay</p>
       <p>Search Area1</p> {/* TODO: We will put search bar here */}
    </div>
  </div>
}

// About Us components
const AboutUsArea = props => {
  return <div className = "container">
    <div 
      className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 justify-content-center'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  </div>
}

//Contact us components
const ContactUsArea = props => {
  return <div className = "container">
    <div 
      className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 justify-content-center'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  </div>
}

// Main page
const LandingPage = (props) => {
  return (<>
    <div className="search-area-bg landing-container container-fluid">
      <div className="container ">
        <div className="row justify-content-between">
          <MarkArea path={homeIcon}/>
          <MarkArea path={signInIcon}/>
        </div>
        <SearchArea />
      </div>
    </div>

    <div className="landing-container container-fluid border border-primary">
      <h1>About us:</h1>
      <AboutUsArea/>
    </div>

    <footer className="landing-container container-fluid border border-primary">
      <h1>Contact Us:</h1>
      <ContactUsArea/>
    </footer>
  </>
  )
}

export default LandingPage;

