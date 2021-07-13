import './style.css'
import { SearchInContainer } from '../../components/search_bar'

// Icons paths
const homeIcon = require('../../assets/img/home-icon.png').default
const signInIcon = require('../../assets/img/sign_in.png').default
const brokenImg = require('../../assets/img/img_load_failed.png').default
const phoneImg = require('../../assets/img/phone_img.png').default
const emailImg = require('../../assets/img/email_img.png').default
const addressImg = require('../../assets/img/address_img.png').default
const manageImg = require('../../assets/img/manage_img.png').default
const searchHomeImg = require('../../assets/img/search_home.png').default
const signUpImg = require('../../assets/img/sign_up.png').default
const uploadImg = require('../../assets/img/upload_img.png').default

// Utility components
const Card = props => {
  const link = props.link || '#'
  const img = props.img || brokenImg
  const msg = props.msg || "I am a card card card card"
  return <div className = 'card-container bg-hovered fast-transition col p-3'>
    
    <a href = {link} className = 'link-card'>
      <img src = {img} className = 'img-card' alt='a card image'/>
      <hr/>
      <p className = 'msg-card font-monospace'>{msg}</p>
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
       <SearchInContainer/>
    </div>
  </div>
}

// About Us components
const AboutUsArea = props => {
  return <div className = "container">
    <div 
      className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 justify-content-center'>
        <Card 
          link = "#search-bar"
          img = {searchHomeImg}
          msg = {<>If you are looking for a new home, just go on and 
            search where you want your new home to be.</>} />

        <Card 
          link = "#"
          img = {signUpImg}
          msg = {<>If you are owner, agent or you want us to 
            remember you, sign up and become one of owr members</>} />

        <Card 
          link = "#"
          img = {uploadImg}
          msg = {<>If you are owner or agent and want to 
            let others know about your property, then go ahead and post it.</>} />

          <Card 
            link = "#"
            img = {manageImg}
            msg = {<>And we will manage all the rest!</>} />
        
    </div>
  </div>
}

//Contact us components
const ContactUsArea = props => {
  return <div className = "container">
    <div 
      className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3 justify-content-center'>
        <Card 
          link = "#"
          img = {phoneImg}
          msg = {<span>(+91) 9158798418<br/>(+91) 9264529523</span>} />
        
        <Card 
          link = "#"
          img = {emailImg}
          msg = {<span>karim.amiri@gmail.com <br/> hakimuddin123@mail.com</span>} />
        
        <Card 
          link = "#"
          img = {addressImg}
          msg = {<address>1206/13, Sudabhau Kelkar Path, 
            Deccan Gymkhana, Pune, 411004, Maharashtra, India</address>} />
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

    <div className="working-bg landing-container container-fluid">
      <h1 className = 'cards-header'>How It Works</h1>
      <AboutUsArea/>
    </div>

    <footer className="contact-bg landing-container container-fluid">
      <h1 className = 'cards-header'>Contact Us</h1>
      <ContactUsArea/>
    </footer>
  </>
  )
}

export default LandingPage;

// Some more functionalities to be added
//TODO: links to be added when all of pages are made
//TODO: mark icons can have names when hovering over them
