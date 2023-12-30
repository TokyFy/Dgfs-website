import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Preface from "@/components/Preface";
import Missions from "@/components/Missions";
import Actus from "@/components/Actus";
import Departments from "@/components/Departments";
import Footer from "@/components/Footer";
import {Contact} from "@/components/Contact";

export default function Home() {

  return (
    <>
        <Header/>
        <Preface/>
        <Missions/>
        <Intro/>
        <Departments/>
        <Actus/>
        <Contact/>
        <Footer/>
    </>
  )
}
