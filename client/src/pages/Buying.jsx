import BackgroundImage from "../assets/Images/Background_3_Steps_For_Offer_v2.svg";
import LoanStockPhoto from "../assets/Images/LoanStockPhoto.svg";
import Neighborhood from "../assets/Images/Neighborhood.svg";
import MeetYourAgentSVG from "../assets/Images/meet_your_agent.svg";

const buyingTips = [
  {
    img: LoanStockPhoto,
    alt: "Stock photo of man in suit speaking to couple",
    text: "1. Get pre-approved for a mortgage. Speak to a lender to know how much you can borrow.",
  },
  {
    img: Neighborhood,
    alt: "Aerial photo of suburban neighborhood",
    text: "2. Research the neighborhood: investigate the area, schools, and local amenities.",
  },
  {
    img: MeetYourAgentSVG,
    alt: "Photo of Elise Johnson",
    text: "3. Work with a real estate agent to get expert advice and guidance during the process.",
  },
];

const Buying = () => {
  return (
    <main>
      <div className="card bg-dark text-white">
        <img src={BackgroundImage} className="card-img" alt="Background Image" />
        <div className="card-img-overlay">
          <div className="card bg-dark text-white mb-3">
            <h1 className="card-title text-center">
              3 Tips Before Making An Offer On A Property
            </h1>
          </div>
          <div className="row">
            {buyingTips.map((tip, index) => (
              <div key={index} className="col-12 col-md-4 mb-3">
                <div className="card bg-light text-dark border-dark h-100">
                  <div className="card-body d-flex flex-column align-items-center">
                    <img
                      src={tip.img}
                      className="card-img-top mb-3 img-fluid"
                      alt={tip.alt}
                    />
                    <h4 className="card-text text-center">{tip.text}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Buying;
