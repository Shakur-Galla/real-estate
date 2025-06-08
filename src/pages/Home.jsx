import React from "react";
import Banner from "../components/Banner";
import StatisticsGrid from '../components/StatisticsGrid'
import FeaturedProperties from "../components/FeaturedProperties";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <Banner />
      <StatisticsGrid/>
      <FeaturedProperties />
      <Clients/>
    </>
  );
};

export default Home;
