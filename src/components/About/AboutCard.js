import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Moustafa Bahaa </span>
            from <span className="purple"> Egypt.</span>
            <br />

            <br /> im 26 years old gratuated from zagazig higher institute of engineering and technology
            as a civil engineer then i made a career shift to be frontend developer
            <br />

            ive studied React Frontend Front End Diploma | React.js at IT SHARE center 
            <br />
            for more information check my updated resume 
            <br />
            <br />
            I am currently looking for a jop as  Frontend developer
            <br />
            <br />
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
