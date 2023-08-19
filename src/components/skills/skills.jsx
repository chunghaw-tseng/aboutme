import React from 'react';
import { Handshake } from '@styled-icons/fa-solid/Handshake';
import { Container, Row, Col } from 'reactstrap';
import { CColumn, CRow, CText, CTitle } from '../shared/elements';
import ProgressLine from './progressLine';
import Slide from 'react-reveal/Slide';
import { Diamond, PLanguages, Slanguages, STitle, SText, SContent, Framework, MainSkill } from './skillsElements';
import LightSpeed from 'react-reveal/LightSpeed';
import Rotate from 'react-reveal/Rotate';
import { useTranslation } from 'react-i18next';


// Use Progess Bar to show these
const Skills = (props) =>
{
    const { t, i18n } = useTranslation();

    return(
            <Container>
                <Slide left>
                    <CTitle>{t('skill')}</CTitle>
                </Slide>
                <Slide bottom>
                <CRow>
                    {MainSkill.map((item, _) => {
                        return(
                        <CColumn flex={"0 0 25%"} align={"center"}>
                            <Diamond>{item.icon}</Diamond>
                            <SContent>
                            <STitle>{t(item.skill)}</STitle>
                            <SText>{t(item.reason)}</SText>
                            </SContent>
                        </CColumn>
                        );
                    })}
                </CRow>
                </Slide>
                <LightSpeed left>
                <CRow>
                    <CColumn flex={2} align={"center"} style={{marginLeft:"10px"}}>
                    {Slanguages.map((item, _ )=>{
                        return (<ProgressLine label={t(item.lang)} backgroundColor="lightgrey" textbgColor="#0090C1" needsTag={true}
                                key={t(item.lang)}
                                visualParts={[
                                {
                                    percentage: item.percentage,
                                    color: "#046E8F"
                                }
                                ]}
                        />)
                    })}
                    {Framework.map((item, _)=>{
                        return (<ProgressLine label={item.lang} backgroundColor="lightgrey" textbgColor="#4C2A85"
                        key={item.lang}
                        visualParts={[
                        {
                            percentage: item.percentage,
                            color: "#6B7FD7"
                        }
                        ]}
                />)
                    })}
                    {/* TODO Add the frameworks */}
                    </CColumn>
                    <CColumn flex={2} align={"center"}>
                    {PLanguages.map((item,_)=>{
                        return (
                            <ProgressLine label={item.lang} backgroundColor="lightgrey" textbgColor="#7AE582"
                                key={t(item.lang)}
                                visualParts={[
                                {
                                    percentage: item.percentage,
                                    color: "#25A18E"
                                }
                                ]}
                            />
                        )
                    })}
                    </CColumn>
                </CRow>
                </LightSpeed>
            </Container>
    )
}


export default Skills;