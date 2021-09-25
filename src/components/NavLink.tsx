import React from "react";
import { Link as MenuLink } from "react-scroll";

export default function NavLink({ path, label, children, ...rest }) {
  return (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {children}
    </MenuLink>
  );
}
