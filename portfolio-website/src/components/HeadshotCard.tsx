import Typewriter from "./Typewriter";
import gavinHeadshot from "/src/assets/LinkedInPfp.jpg";

function HeadshotCard() {
  const str1 = "Hi, I'm Gavin.";
  const str2 = "Welcome to my website";
  const str3 = "built with React!";


  return (
    <div
      className="card mx-auto bg-secondary-subtle text-nowrap"
      style={{ width: "90%" }}
    >
      <div className="row">
        <div className="col align-self-left d-block m-auto">
          <img
            src={gavinHeadshot}
            className="card-img"
            alt="Picture of Gavin"
          />
        </div>
        <div className="col align-self-center">
          <div className="card-body">
            <p>
              <Typewriter text={str1} delay={150} />
              <br />
              <Typewriter text={str2} delay={150}/>
              <br />
              <Typewriter text={str3} delay={150}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadshotCard;
