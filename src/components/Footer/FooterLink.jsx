import { Link } from "@mui/material";
import React from "react";

const FooterLink = ({ text }) => {
  return (
    <Link
      href="https://maps.app.goo.gl/KjuRyTbh8cWYXVpM9"
      variant="p"
      target="_blank"
      component="a"
      sx={{
        fontSize: "0.9rem",
        fontWeight: "400",
        textDecoration: "underline",
        color: "white",
        textTransform: "capitalize",
        "&:hover": {
          color: "white",
        },
      }}
    >
      {text}
    </Link>
  );
};

export default FooterLink;
