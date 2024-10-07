import React, { useState } from "react";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AmazonIcon from "@mui/icons-material/ShoppingCart"; // Use shopping cart as Amazon icon alternative
import fomaing from "../assets/foaming.png";
import eye from "../assets/eye.png";
import whitening from "../assets/whitening.png";
import blemish from "../assets/blemish.png";

const GetInTouch = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const testimonials = [
    {
      image: fomaing,
      feedback:
        "Achieve a radiant and clear complexion with Velovita Vitamin C Foaming Face Wash. This 100 ml bottle is formulated with a powerful blend of natural ingredients designed to reduce blemishes, pigmentation, and acne marks. Our unique formula includes: - Papaya (Carica) - 0.03 gm: Helps you fight signs of aging with its natural enzymes. - Yashtimadhu (Glycyrrhiza Glabra) - 0.25 gm: A rich source of antioxidants, offering skin lightening and anti-aging benefits. - Orange (Citrus Sinensis) - 1.5 gm: Improves the overall look of your skin with its brightening properties. - Neem (Azadirachta Indica) - 0.25 gm: Stimulates collagen production and reduces scars. - Amlaki (Emblica Officinalis) - 0.30 gm: Prevents the early effects of aging with its high vitamin C content. - Haridra (Curcuma Longa) - 1.0 gm: Traditionally used for skin whitening and improving complexion. - Tulsi (Ocimum Sanctum) - 0.20 gm: Known for its anti-bacterial, anti-fungal, and anti-inflammatory properties, it soothes the skin and relieves stress. - Khus-Khus (Vetiveria Zizanioides) - 0.25 gm: Provides a cooling effect and aids in skin rejuvenation. - Aloe Vera (Aloe Barbadensis) - 0.25 gm: Contains essential vitamins A, C, and E, known for their anti-inflammatory and hydrating properties. - Tea Tree Oil - 0.05 ml: Known for its anti-microbial action, it helps prevent and reduce acne scars. - Gulabarka (Rosa Centifolia) - 2.0 ml: Rosewater is renowned for its skin-soothing and anti-inflammatory properties.",
      link: "https://amzn.in/d/aR8XKU1", // Link for foaming face wash
    },
    {
      image: blemish,
      feedback:
        "Achieve flawless, radiant skin with Velovita Anti-Blemish Cream. This potent blend of natural ingredients is specifically formulated to target dark spots, acne scars, and uneven skin tone, providing you with a clear and even complexion. Our anti-blemish cream combines the benefits of powerful botanicals like Onion Bulb, Mulethi Root, and Green Tea Leaves to effectively reduce blemishes and nourish your skin. Directions for Use: Clean the face with a gentle foaming face wash. Apply Velovita Anti-Blemish Cream liberally over the face and neck, focusing on areas with blemishes, twice daily. Massage until completely absorbed for best results. Storage: Keep in a cool, dark, and dry place to maintain the effectiveness of the natural ingredients. - Net Weight: 100g - Suitable for: All skin types - Shelf Life: 24 months from the date of manufacture",
      link: "https://amzn.in/d/7LuOhDR",
    },
    {
      image: whitening,
      feedback:
        "Discover the secret to a radiant and even complexion with our Ayurvedic Whitening Face Cream. Infused with a nourishing blend of Ayurvedic oils and herbs, this revitalizing cream deeply moisturizes your skin, revealing an unparalleled silky and velvety feel. It visibly enhances complexion, restores natural fairness and glow, and evens skin tone while protecting against sunburns, blemishes, and pigmentation. Suitable for all skin types, it provides the rejuvenating moisture and nourishment crucial for healthy, glowing skin. Key Ingredients and Benefits: - Haridra (Curcuma longa) 1.0 g: Turmeric helps lighten dark spots and pigmentation while providing anti-inflammatory benefits. - Yashtimadhu (Glycyrrhiza glabra) 1.0 g: Licorice root extract helps in reducing dark spots and evening out skin tone. - Neem (Azadirachta indica) 0.25 g: Neem has antibacterial properties that help in treating acne and soothing the skin. - Tulsi (Ocimum sanctum) 0.30 g: Holy Basil purifies the skin, providing a clear and glowing complexion. - Kumkumadi Tailam 2.50 ml: This precious Ayurvedic oil blend brightens skin tone and reduces blemishes and pigmentation. - Kesar (Crocus sativus) 0.20 g: Saffron enhances skin brightness and radiance. - Aloevera (Aloe barbadensis) 1.0 g: Aloe Vera soothes and hydrates the skin deeply. - Shalmali (Salmalia malabarica) 0.25 g: Provides nourishment and helps in skin repair. - Jati (Jasminum officinale) 1.0 g: Jasmine helps in evening out skin tone and providing moisture. - Mandookparni (Centella asiatica) 0.5 g: Promotes collagen production and improves skin elasticity. - Cream Base Q.S.: Ensures optimal delivery and absorption of active ingredients. Directions for Use: Apply the Ayurvedic Whitening Face Cream at night everyday to get best results. Gently massage a small amount over the cleansed face and neck until completely absorbed. For best results, use regularly. - Net Weight: 100g - Suitable for: All skin types - Shelf Life: 24 months from the date of manufacture",
      link: "https://amzn.in/d/cQijnXe",
    },
    {
      image: eye,
      feedback:
        "Revitalize your under-eye area with Velovita Under Eye Gel. This 100 gm jar is packed with a potent blend of natural ingredients that work together to reduce puffiness, dark circles, and fine lines. Our unique formula includes: - Neem Patra (2 gm): Known for its anti-inflammatory and antibacterial properties, it helps to purify the skin and reduce puffiness. - Haldi (0.2 gm): Rich in antioxidants, Turmeric (Haldi) aids in reducing dark circles and brightens the skin. - Aloevera (0.3 gm): A soothing and hydrating ingredient that calms the skin and reduces inflammation. - Lodhra (0.05 gm): Traditionally used in Ayurveda for its skin-healing properties. - Ambe Haladi (0.05 gm): Helps to lighten pigmentation and even out skin tone. - Chandhan (0.05 gm): Sandalwood (Chandhan) is known for its cooling and calming effects on the skin. - Arjunsal (0.05 gm): Known for its antioxidant properties, it helps to protect the skin from damage. - Cucumber (0.02 gm): Provides a cooling effect and helps to reduce swelling and puffiness. Directions for Use: Apply Velovita Under Eye Gel twice a day, liberally over cleansed face and neck until completely absorbed. For best results, use consistently as part of your daily skincare routine. Why Choose Velovita Under Eye Gel? - Reduces puffiness and dark circles - Hydrates and soothes the skin - Natural ingredients with proven benefits - Suitable for all skin types",
      link: "https://amzn.in/d/2teTHzX", // Link for under-eye gel
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Automatically move to the next testimonial every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Box
      sx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        textAlign: "center",
        position: "relative",
        maxWidth: "100%",
      }}
    >
      {/* Heading Section */}
      <Stack component="section" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: isMobile ? 32 : 48,
            fontWeight: "bold",
            color: "#59a52c",
          }}
        >
          Know more about our product.
        </Typography>
        <Divider
          sx={{
            borderColor: "#bf5513",
            width: isMobile ? "60%" : "35%",
          }}
        />
      </Stack>

      {/* Carousel Section */}
      <Box
        sx={{
          position: "relative",
          width: isMobile ? "100%" : "80%",
          margin: "0 auto",
          overflow: "hidden",
          paddingTop: theme.spacing(4),
        }}
      >
        {/* Testimonial Content */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentTestimonial * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                alt={testimonial.name}
                src={testimonial.image}
                sx={{
                  width: isMobile ? "100%" : "35%",
                  borderRadius: 2,
                  marginRight: isMobile ? 0 : theme.spacing(4),
                  marginBottom: isMobile ? theme.spacing(2) : 0,
                }}
              />
              <Box
                sx={{
                  textAlign: isMobile ? "center" : "left",
                  maxWidth: "65%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: isMobile ? 16 : 18,
                    fontWeight: "medium",
                  }}
                >
                  {testimonial.feedback}
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? 16 : 18,
                    fontWeight: "medium",
                    color: "#59a52c",
                    mt: isMobile ? 2 : 4,
                  }}
                >
                  Available on Amazon:{" "}
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton
                      sx={{
                        color: "#FF9900", // Amazon brand color
                        fontSize: isMobile ? 24 : 28,
                      }}
                    >
                      <AmazonIcon />
                    </IconButton>
                  </a>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-1px",
            transform: "translateY(-50%)",
            color: "#F42A40",
            backgroundColor: "white",
            boxShadow: 3,
            "&:hover": { backgroundColor: "lightgray" },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-1px",
            transform: "translateY(-50%)",
            color: "#F42A40",
            backgroundColor: "white",
            boxShadow: 3,
            "&:hover": { backgroundColor: "lightgray" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Dots */}
      <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor:
                currentTestimonial === index ? "#F42A40" : "#C4C4C4",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default GetInTouch;
