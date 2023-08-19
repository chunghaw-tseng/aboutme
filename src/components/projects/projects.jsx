import React from 'react';
import { CCenteredRow, CTitle, CColumn } from '../shared/elements';
import {ProjectImg, Content, ContentOverlay, FooterText, ImgOverlay, ContentTitle, ContentLang, ProjectHistory} from './projectsElements'
import {Row, Col, Container} from 'reactstrap';
import Flip from 'react-reveal/Flip';
import ProjectModal from './projectModal';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';


// Create a grid of elements with interesting projects
// Do three images that can be hovered and clicked to show other stuff
// Show popup on click

function ProjectItem({title, lang, date, explanation, img, desc_img, btn_lbl}){
    console.log(title);
    return(
        <CColumn flex={"0 1 auto"} align={'center'}>
            <Content>
                <ImgOverlay></ImgOverlay>
                <ProjectImg src={img}/>
                <ContentOverlay>
                    <ContentTitle>{title}</ContentTitle>
                    <ContentLang>{lang}</ContentLang>
                    <ProjectModal buttonLabel={btn_lbl} image={desc_img} title={title} lang={lang} explanation={explanation}/>
                </ContentOverlay>
            </Content>
        </CColumn>
    );
}

const Projects = (props) =>
{
    const { t, i18n } = useTranslation();

    return(
        <Container fluid={true}>
            <Fade right>
            <CTitle>{t('project')}</CTitle>
            </Fade>
            <Fade bottom>
                <CCenteredRow> 
                    {ProjectHistory.map((item,_)=>{
                        return (<ProjectItem title={t(item.title)} lang={item.lang} img={item.img} desc_img={item.desc_img} explanation={t(item.description)} btn_lbl={t('info')}/>);
                    })}
                </CCenteredRow>
                <CCenteredRow><FooterText>{t('more_projects')}</FooterText></CCenteredRow>

            </Fade>
    </Container>
    )
}


export default Projects;