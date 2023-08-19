import React, { useState } from 'react'
import {ColouredContainer, Container} from './sectionElements'

// Keep section and add the element in there
function Section({bg, section_element, id, start}){
    return(
        <>
            {   start ? 
                <Container id={id} >
                {section_element}
                </Container> : 
                <ColouredContainer id={id} bgcolor={bg}>
                    {section_element}
                </ColouredContainer>
            }
        </>
    );
}

export default Section;