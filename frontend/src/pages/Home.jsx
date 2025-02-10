import { useState } from "react";
import ExploreMenu from "../components/ExploreMenu"
import Hero from "../components/Hero"

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home