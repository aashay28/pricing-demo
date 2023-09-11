import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import PricingCards from "./components/PricingCards/PricingCards";
import PricingHeader from "./components/PricingHeader/PricingHeader";
import Footer from "./components/Footer/Footer";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import { useState } from "react";
function App() {
  const [numUsers, setNumUsers] = useState(0);
  return (
    <>
      <Header />
      <PricingHeader />
      <Container>
        <PricingCards numUsers={numUsers} />
        <SelectPlan numUsers={numUsers} setNumUsers={setNumUsers} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
