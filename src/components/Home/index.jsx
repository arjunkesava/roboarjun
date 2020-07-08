import React from "react";
import ReposGrid from "../ReposGrid";
import AboutMe from "../AboutMe";
import BodyHeader from "../BodyHeader";

export default function Home() {
  return (
    <main>
      <BodyHeader />
      <AboutMe />
      <ReposGrid />
    </main>
  );
}
