import React from "react";
import "./SelectPlan.css";
import { Badge, Button } from "react-bootstrap";
const SelectPlan = ({ numUsers, setNumUsers }) => {
  return (
    <div className="slider">
      <Button variant="outline-primary">
        Selected Users <Badge bg="primary">{numUsers}</Badge>
      </Button>
      <br />
      <input
        className="mt-4"
        type="range"
        min="0"
        max="30"
        value={numUsers}
        onChange={(e) => setNumUsers(e.target.value)}
      />
    </div>
  );
};

export default SelectPlan;
