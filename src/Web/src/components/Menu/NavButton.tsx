import React from "react";
import "./NavButton.scss";

interface Props {
  name: string;
  forwardTo: string;
}

export const NavButton = (props: Props) => {
  return (
    <>
      <button className="button">{props.name}</button>
      <a href="/asdfa" className="link">
        <div className="title">Work</div>
        <div className="bar"></div>
      </a>
    </>
  );
};
