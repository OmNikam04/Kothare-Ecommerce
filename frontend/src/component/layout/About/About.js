import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
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
              src="/logo.png"
              alt="Founder"
            />
            <Typography>Kothari's Luggage Mall</Typography>
            <Button color="primary">
              Visit Instagram
            </Button>
            <span>
            Kothari's Luggage Mall in Nashik is one of the leading businesses in the Authorised Dealers. Also known for Authorised Dealers, Authorised Dealers-Samsonite and much more. Find Address, Contact Number, Reviews and ratings, Photos, Maps of Kothari's Luggage Mall, Nashik.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a href="#">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="#">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
