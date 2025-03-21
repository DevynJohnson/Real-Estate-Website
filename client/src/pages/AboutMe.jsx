import MeetYourAgentSVG from "../Images/Meet Your Agent SVG.svg";

const AboutMe = () => {
  return (
    <main className="d-flex justify-content-center">
      <div className="meetYourAgent card w-100">
        <img 
          src={MeetYourAgentSVG} 
          className="card-img-top" 
          alt="Photo of Elise Johnson" 
          style={{ height: "400px", width: "400px" }} 
        />
        <div className="card-body text-center">
          <p className="card-text lead">
            As a dedicated real estate agent, I take pride in helping my clients find their perfect home.
            With a deep knowledge of the local markets in both Minnesota and Wisconsin and a passion for connecting people
            with the right property, I am committed to making every real estate journey as smooth and successful as possible.
          </p>
          <p className="card-text lead">
            Outside of real estate, I am a mother of four wonderful boys—two teenagers and twin toddlers—and enjoy spending
            time with my loving husband. When I'm not working, I love to unwind by gardening and exploring my creative side
            through art. My family and I cherish the vibrant community we call home, and I look forward to helping others find
            their special place here too.
          </p>
          <p className="card-text lead">
            Let's work together to find the home that's right for you!
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
