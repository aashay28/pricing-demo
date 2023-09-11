import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PricingCards from "../components/PricingCards/PricingCards";
import SelectPlan from "../components/SelectPlan/SelectPlan";
import PricingHeader from "../components/PricingHeader/PricingHeader";

const Home = () => {
  const [numUsers, setNumUsers] = useState(0);
  return (
    <Container>
      <PricingHeader />
      <PricingCards numUsers={numUsers} />
      <SelectPlan numUsers={numUsers} setNumUsers={setNumUsers} />
    </Container>
  );
};

export default Home;
