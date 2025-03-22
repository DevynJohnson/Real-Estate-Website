import EliseLogo from "../assets/Images/Elise Logo SVG Gold.svg";
const Home = () => {
    return (
        <main className="homePage">
        <figure className="hero d-flex align-items-center">
          <div className="card border-dark mx-left m-5" style={{ width: "30rem" }}>
            <img src={EliseLogo} className="card-img-top" alt="headshot" />
            <div className="card-body text-center">
              <h1 className="card-text">Elise Johnson, Realtor</h1>
              <br />
              <h3><a href="https://www.coldwellbanker.com/" target="_blank">Coldwell Banker</a></h3>
                <br />
                <p className="fw-bold lead">Are you buying or selling a home? Let's work together!</p>
            </div>
          </div>
        </figure>
        </main>
    );
    }

export default Home;