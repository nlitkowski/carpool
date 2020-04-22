import React from "react";
import "./NavButton.scss";

interface Props {
  name: string;
  forwardTo: string;
}

export const NavButton = (name: string) => {
  return (
    <>
      <button className="button">{name}</button>
      <a href="/asdfa" className="link">
        <div className="title">Work</div>
        <div className="bar"></div>
      </a>
    </>
  );
};
