import { Container } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import City from "../components/City";

const CityContainer = styled(Container)({
  display: "flex",
  flexWrap: "wrap",
});

function CityPage() {
  const cities = useSelector((state) => state.cities.city);

  console.log(cities);

  return (
    <CityContainer>
      {cities.map(({ city, about, image }) => (
        <City key={city} city={city} about={about} image={image} />
      ))}
    </CityContainer>
  );
}

export default CityPage;
