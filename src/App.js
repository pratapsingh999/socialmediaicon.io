import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter ,faGoogle, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
    {/* <hr/>
    <div class="d-flex flex-row mb-5 justify-content-evenly social-media">
    <button className='social-media-icon facebook'>
    <FontAwesomeIcon icon={faFacebookF}/> 
    </button>
    <button className='social-media-icon Twitter '>
    <FontAwesomeIcon  icon={faTwitter}/>
    </button>
    <button className='social-media-icon Google '>
    <FontAwesomeIcon icon={faGoogle} />
    </button>
    <button className='social-media-icon Github '>
    <FontAwesomeIcon icon={faGithub}/>
    </button>
    <button className='social-media-icon Instagram'>
    <FontAwesomeIcon icon={faInstagram}/>
    </button>
    </div> */}
    
    {/* <div class="d-flex flex-row mb-5 justify-content-evenly ">
    <button className='social-media-icon facebooks'>
    <a href="https://www.facebook.com/" >
    <FontAwesomeIcon className="font" icon={faFacebookF}/> 
    </a>
    </button>
    <button className='social-media-icon Twitter'>
    <a href="https://twitter.com/i/flow/login">
    <FontAwesomeIcon className="font" icon={faTwitter}/> 
    </a>
    </button>
    <button className='social-media-icon Google'>
    <a href="https://www.youtube.com/">
    <FontAwesomeIcon className="font" icon={faYoutube}/> 
    </a>
    </button>
    <button className='social-media-icon Github'>
    <a href="https://github.com/login">
    <FontAwesomeIcon className="font" icon={faGithub}/> 
    </a>
    </button>
    <button className='social-media-icon Instagram'>
    <a href="https://www.instagram.com/">
    <FontAwesomeIcon className="font" icon={faInstagram}/> 
    </a>
    </button>
    </div> */}

    <div className= " wrapper d-flex flex-row mb-5 justify-content-evenly" >
    <div className='icon facebooka'>
    <div className='tooltips'>Facebook</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faFacebookF}/> </span>
    </div>
    <div className='icon twitter'>
    <div className='tooltips'>twitter</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faTwitter}/> </span>
    </div>
    <div className='icon youtube'>
    <div className='tooltips'>youtube</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faYoutube}/> </span>
    </div>
    <div className='icon github'>
    <div className='tooltips'>github</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faGithub}/> </span>
    </div>
    <div className='icon instagram'>
    <div className='tooltips'>instagram</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faInstagram}/> </span>
    </div>
    </div>
    </>
  );
}

export default App;
