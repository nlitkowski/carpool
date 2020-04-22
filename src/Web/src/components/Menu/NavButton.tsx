import React from "react";
import "./NavButton.scss";

interface Props {
  name: string;
  forwardTo: string;
}

export const NavButton: React.FC<Props> = () => {
  return (
    <>
      <a href="/" className="link">
        <div className="title">Work</div>
        <div className="bar"></div>
      </a>
    </>
  );
};
