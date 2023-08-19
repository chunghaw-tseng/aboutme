import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import test_img from "../../img/background_image.jpeg";
import { ContentText, ContentTitle, Divider, ModalImg, ContentLang} from './projectsElements';
import { useTranslation } from 'react-i18next';


const ProjectModal = (props) => {
  const {
    buttonLabel,
    image,
    title,
    lang, 
    explanation
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { t, i18n } = useTranslation();

  return (
    <div>
        <Button outline color="info" onClick={toggle}>{buttonLabel}</Button>
        <Modal size="md" isOpen={modal} toggle={toggle}>
        <ModalImg src={image} />
        <ModalBody>
            <ContentTitle>
                {title}        
            </ContentTitle>
            <ContentLang>
                {lang}
            </ContentLang>
            <Divider/>
            <ContentText>
                {explanation}
            </ContentText>
        </ModalBody>
        <Button outline color="danger" onClick={toggle}>{t('close')}</Button>
        </Modal>

    </div>
  );
}

export default ProjectModal;