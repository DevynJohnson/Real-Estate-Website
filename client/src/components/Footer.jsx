import InstagramLogo from "../assets/Images/Instagram_logo_2022.svg"; // Ensure correct path

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container text-center">
        <div className="row justify-content-md-center">
          <div className="col-8 lead">
            <p>Follow me on social media for listings, updates, announcements, and more!</p>
          </div>
          <div className="col-2">
            <a
              href="https://www.facebook.com/elisejohnsonrealtor1"
              target="_blank"
              rel="noopener noreferrer"
              className="socials"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
          </div>
          <div className="col-2">
            <a
              href="https://www.instagram.com/elise_johnson_realtor/"
              target="_blank"
              rel="noopener noreferrer"
              className="socials"
            >
              <img
                src={InstagramLogo}
                width="30"
                height="30"
                alt="Instagram logo linking to Elise Johnson Realtor account"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
