import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";
import fomaing from "../assets/foaming.png";
import eye from "../assets/eye.png";
import whitening from "../assets/whitening.png";
import blemish from "../assets/blemish.png";

const services = [
  {
    title: "Velovita Anti-Blemish Cream",
    image: blemish,
  },
  {
    title: "Velovita Whitening Cream",
    image: whitening,
  },
  {
    title: "Velovita Vitamin C Foaming Face Wash",
    image: fomaing,
  },
  {
    title: "Velovita Under Eye Gel",
    image: eye,
  },
];

function ServicesSection() {
  return (
    <Section>
      <SectionTitle title="Our Products" />
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
          />
        ))}
      </ServiceGrid>
    </Section>
  );
}

const Section = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 60px 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 928px;
  margin-top: 46px;
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

export default ServicesSection;
