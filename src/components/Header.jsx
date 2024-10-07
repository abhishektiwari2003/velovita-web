import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";
import crossstoneBg from "../assets/IMG_8600.png";

const RootStyle = styled(Box)(({ theme }) => ({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: theme.spacing(10),
  backgroundColor: "white",
  backgroundImage: `url(${crossstoneBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
    zIndex: 1,
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    paddingTop: theme.spacing(5),
  },
}));

const ContentStyle = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#FFFFFF",
  marginTop: "-64px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check if any field is empty
    if (!formData.fullName || !formData.mobileNumber || !formData.location) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .send(
        "service_c227b8j", // Replace with your EmailJS service ID
        "template_l2yu3fp", // Replace with your EmailJS template ID
        formData,
        "5EYKy33XMZnqWzGhu" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your consultation request has been sent!");
          setFormData({
            fullName: "",
            mobileNumber: "",
            location: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("There was an error sending your request. Please try again.");
        }
      );
  };

  return (
    <RootStyle component="header" sx={{ mb: 12 }}>
      <ContentStyle>
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={isMobile ? 2 : 8}
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            alignItems={isMobile ? "center" : "flex-start"}
          >
            <Typography
              sx={{
                fontSize: { xs: 40, md: 55 },
                fontWeight: "bold",
                color: "#FFFFFF",
                mb: 0,
              }}
            >
              Facing a skin problem ??
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: 50, md: 85 },
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  mt: 1,
                  fontFamily: "Alice",
                }}
              >
                Embrace it with our{" "}
                <span style={{ color: "#59a52c", fontFamily: "Alice" }}>
                  velo
                </span>
                <span style={{ color: "#bf5513", fontFamily: "Alice" }}>
                  vita
                </span>
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 23 },
                fontWeight: "600",
                color: "#FFFFFF",
                mt: 1,
              }}
            >
              One stop solution for all your
              <br />
              skin problem.
            </Typography>
          </Grid>
          <Box
            sx={{
              height: { xs: "auto", md: 401 },
              width: { xs: "90%", md: 750 },
              backgroundColor: "white",
              marginTop: isMobile ? 2 : 0,
              borderRadius: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              component="form"
              onSubmit={handleSubmit}
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Typography
                component="span"
                sx={{ color: "green", fontWeight: "bold", fontSize: 24 }}
              >
                Connect with Us!
              </Typography>{" "}
              <Typography
                sx={{ fontSize: 16, fontWeight: "bold", color: "black" }}
              >
                To know more about our product.
              </Typography>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: {
                    backgroundColor: "#D9D9D9",
                    color: "#202020",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: {
                    backgroundColor: "#D9D9D9",
                    color: "#202020",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                name="location"
                value={formData.location}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  style: {
                    backgroundColor: "#D9D9D9",
                    color: "#202020",
                    fontWeight: "bold",
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#bf5513",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Connect with us
              </Button>
            </Stack>
          </Box>
        </Stack>
      </ContentStyle>
    </RootStyle>
  );
};

export default Header;
