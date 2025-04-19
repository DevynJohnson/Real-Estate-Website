import EliseLogo from "../assets/Images/Elise Logo SVG Gold.svg";
import keysInDoor from "../assets/Images/Key in door.jpg";
import CB_Logo from "../assets/Images/CB_Logo_no_background.png";
const Home = () => {
    return (
      <main className="homePage" style={{backgroundImage: `url(${keysInDoor})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <figure className="hero d-flex align-items-center" style={{ paddingTop: "2rem", paddingBottom: "2rem"}}>
        <div className="card border-dark" style={{ width: "25rem", marginLeft: "2rem" }}>
        <img src={EliseLogo} className="card-img-top mx-auto d-block" alt="elise johnson realtor logo" style={{width: "75%", border: "solid black 5px"}} />
        <div className="card-body text-center">
          <h3 className="card-text">Elise Johnson</h3>
          <h4>Licensed Real State Agent</h4>
          <br />
          <a href="https://www.coldwellbanker.com/" target="_blank">
          <img src={CB_Logo} className="mx-auto d-block" style={{ width: "50%" }}/>
          </a>
        </div>
        </div>
      </figure>
      </main>
    );
    }

export default Home;