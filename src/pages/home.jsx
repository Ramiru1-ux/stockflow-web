import React from "react";

import Card from "../components/card";
import Button from "../components/button";

import {Button as ShadCNButton} from "../components/ui/button"

function Home() {
  return (
    <div>
      Home
      <Card content={"Hi"}/>
      <Card content={"Ramiru"}/>
      <Button />
      <ShadCNButton>Ok</ShadCNButton>
      <ShadCNButton variant="outline">Cancel</ShadCNButton>
    </div>
  );
}

export default Home;
