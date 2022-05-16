import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/kothariluggagemall";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/kothariofficial/image/upload/v1650952124/11_gnt1yh.png"
              alt="Founder"
            />
            <Typography>Kothari Luaggage Mall</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <Typography>Kothari Luaggage Mall</Typography>
            <span>
              Kothari Luggage Mall is All in One store for all types of Bags. We are first largest showroom of  VIP in Maharashtra
              This is our second generation business since 1980. Customer trust on our service,
              with 99% accuracy. We have also launched the products online.. So, that you can buy any product at
              yhe tip of your finger. 
              
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect with us</Typography>
            <a
              href="https://www.youtube.com/channel/"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/kohtariluggage" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
