import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import {AboutText, AboutTitle, ImportantText} from './aboutMeElements';
import Zoom from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next';


// Think about the main cool title
// Want to return different data depending on language


const AboutMe = () =>
{
  const { t, i18n } = useTranslation();

    return(
      <>
      <Zoom top>
        <Container>
          <Row>
            <Col>
              <AboutTitle> 
              <div>{t('hello')}<ImportantText>Chung (チュン)</ImportantText></div> 
              <div>{t('main_title')}</div>
              </AboutTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <AboutText>
                {t("summary")}
              </AboutText>
              </Col>
          </Row>
        </Container>
       </Zoom>
       </>
    )
}


export default AboutMe;