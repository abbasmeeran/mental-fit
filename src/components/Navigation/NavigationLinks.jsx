import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { classNames, navDetails } from "../../util";

const NavigationLinks = (props) => {
  const { pathname } = useLocation();
  return (
    <>
      {navDetails
        .filter((nav) => !nav.isALlowed || nav.isALlowed())
        .map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={classNames(
              item.path.indexOf(pathname) !== -1 ? "active-menu" : "menu"
            )}
          >
            {item.title}
          </NavLink>
        ))}
    </>
  );
};

export default NavigationLinks;
