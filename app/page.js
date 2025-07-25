import Image from "next/image";
import Head from "next/head";
import Navbar from "./components/navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Front End Development</title>
        <meta name="description" content="My Profile" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
