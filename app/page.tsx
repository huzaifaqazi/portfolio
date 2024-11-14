import { About } from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import { Navbar } from "./component/navbar";
import { Project } from "./component/project";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Contact/>
      <Project/>
    </div>
  );
}
