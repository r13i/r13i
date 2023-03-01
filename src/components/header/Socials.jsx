import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub as GithubIcon } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/szpatrichard" target="_blank">
        <FontAwesomeIcon icon={GithubIcon} />
      </a>
    </div>
  );
};

export default Socials;
