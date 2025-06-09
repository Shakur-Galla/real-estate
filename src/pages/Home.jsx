import React from "react";
import Banner from "../components/Banner";
import StatisticsGrid from '../components/StatisticsGrid'
import FeaturedProperties from "../components/FeaturedProperties";
import Clients from "../components/Clients";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <>
      <Banner />
      <StatisticsGrid/>
      <FeaturedProperties />
      <Clients/>
      <FrequentlyAskedQuestions/>
      <CallToAction/>
    </>
  );
};

export default Home;
