import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Introduce from "../components/Introduce";
import Project from "../components/Project";
import Skill from "../components/Skill";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Skip from "../components/Skip";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Introduce />
            <Project />
            <Skill />
            <Career />
            <Contact />
        </Main>
    </>
    );
};

export default HomeView;