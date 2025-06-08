import React from "react";
import Banner from "../components/Banner";
import StatisticsGrid from '../components/StatisticsGrid'
import FeaturedProperties from "../components/FeaturedProperties";

const Home = () => {
  return (
    <>
      <Banner />
      <StatisticsGrid/>
      <FeaturedProperties />
    </>
  );
};

export default Home;
