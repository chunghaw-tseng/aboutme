import React, {useState, useContext} from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {CareerList, ExplanationText, LocationText, PeriodText, LeftAlignedColumn, TitleText, InstitutionText, Hexagon, InstitutionLink} from "./careerElements"
import { Container } from 'reactstrap';
import { CColumn, CRow, CTitle } from '../shared/elements';
import { MdWork } from 'react-icons/md';
import {BiRightArrowCircle} from 'react-icons/bi';
import Slide from 'react-reveal/Slide';
import { useTranslation } from 'react-i18next';


const CareerIcon = ({icon}) => {
    return(
        <CColumn flex={"0 0 70px"} width={"70px"} align={"center"}>
            <Hexagon>{icon}</Hexagon>
        </CColumn>

    );
}


// Using custom element
const CareerElement = (data) => {

    const { t, i18n } = useTranslation();

    return(
        <>
            <CRow>
                <CareerIcon icon={data.IconElement}/>
                <CColumn flex={4} align={"left"}>
                    <InstitutionLink href={data.Link} target="_blank"><InstitutionText>{t(data.Institution)}</InstitutionText></InstitutionLink>
                    <LocationText>{t(data.Location)}</LocationText>
                </CColumn>
                {/* Bullet points */}
                <CColumn flex={5} align={"left"}>  
                    <span><BiRightArrowCircle/> <TitleText>{t(data.Title)}</TitleText> <PeriodText>{t(data.Period)}</PeriodText></span>
                    <ExplanationText>
                        {data.Explantion.map((item, _)=>{
                            return <li key={item}>{t(item)}</li>
                        })}
                    </ExplanationText>
                </CColumn>
            </CRow>

        </>
    );
}


// Using VerticalTimeLine
const TimelineElement = (data) => {
    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // Content style of background color and the background for the box
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={data.Period}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            // Change icons depending on type
            icon={<MdWork />}
        >
            <h3 className="vertical-timeline-element-title">{data.Title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{data.Subtitle}</h4>
            <p>
                {data.Explantion}
            </p>
        </VerticalTimelineElement>
    )
}


const Career = (props) => {

    const { t, i18n } = useTranslation();

    return (
        <Container>
            <Slide left>
                <CTitle>{t('ed_career')}</CTitle>
            </Slide>
            <Slide bottom>
                {CareerList.map((item, _)=>{
                    return CareerElement(item);
                })}
            </Slide>
            {/* <VerticalTimeline>
                {CareerEn.map((item, _)=>{
                    return TimelineElement(item);
                })}
            </VerticalTimeline> */}
        </Container>       
    );
}

export default Career;