import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap';
import { CLink, CText, CTitle, Copyright} from '../shared/elements';
import Slide from 'react-reveal/Slide';
import {ContactCol, contactList} from './contactsElements';
import { useTranslation } from 'react-i18next';


function ContactItem({icon, text, link, subtext}){
    return(
        <ContactCol>
            {icon}
            <CText>{text}</CText>
            {link != "none" ? <CLink href={link} target="_blank">{subtext}</CLink> : <CText>{subtext}</CText>}
        </ContactCol>
    );
}


const Contacts = (props) =>
{
    const { t, i18n } = useTranslation();

    return(
        <>
       
         <Container>
            <Slide right>
                <CTitle>{t('contact')}</CTitle>
            </Slide>
            <Slide bottom>
            <Row>
                {contactList.map((item)=>{
                    return (<ContactItem icon={item.icon} text={t(item.title)} link={item.link} subtext={item.subtitle}/>);
                })}
            </Row>
            </Slide>
            <Copyright>
                <Col>
                    <CText>© Chung Haw Tseng Fang 2021</CText>
                </Col>
            </Copyright>
            </Container>
         
        </>
    )
}


export default Contacts;