import React from 'react';
import AboutMe from './about_me/aboutMe';
import Career from './career/career';
import Contacts from './contacts/contacts';
import Projects from './projects/projects';
import Section from './shared/section';
import Skills from './skills/skills';
// import Footer from './shared/footer';


function Home(){
    return(
        <div>
            <Section id="aboutMe" section_element={<AboutMe/>} start={true}/>
            <Section id="career" bg="#5bc3eb" section_element={<Career/>} start={false}/>
            <Section id="projects" bg="#EE7674" section_element={<Projects/>} start={false}/>
            <Section id="skills" bg="#ECA72C" section_element={<Skills/>} start={false}/>
            <Section id="contacts" bg="#000000" section_element={<Contacts/>} start={false}/>
            {/* <Footer/> */}
        </div>
    );
}

export default Home;