import { About } from "./component/about";
import Hero from "./component/hero";
import { Navbar } from "./component/navbar";
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
    </div>
  );
}
