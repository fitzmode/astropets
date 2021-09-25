import React from "react";
import NavLink from "./NavLink";
import { Text } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <NavLink
      to={to}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      activeClass="active"
      {...rest}
    >
      <Text
        mb={{ base: isLast ? 0 : 8, sm: 0 }}
        mr={{ base: 0, sm: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        {children}
      </Text>
    </NavLink>
  );
};

export default MenuItem;
