import styled, { keyframes } from 'styled-components'
import {Col} from 'reactstrap';
import {FaFacebookSquare, FaLinkedinIn, FaPhoneSquareAlt, FaFileAlt, FaGithubAlt} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `

const moveUp = keyframes`
    0% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`
  
export const ContactCol = styled(Col)`
    padding:"5px";
    /* animation: 1s ${fadeIn} forwards; */
  `

export const contactList = [{"icon":  <MdEmail size={100} style={{fill:'white'}}/>, "title":"email", "link":"mailto:chunghaw.tseng@gmail.com", "subtitle":"chunghaw.tseng@gmail.com"},
                            {"icon":  <FaPhoneSquareAlt size={100} style={{fill:'white'}}/>, "title":"phone", "link":"none", "subtitle":"+81 7015949374"},
                            {"icon":  <FaLinkedinIn size={100} style={{fill:'white'}}/>, "title":"li", "link":"https://www.linkedin.com/in/chunghawtseng", "subtitle":"Chung Haw Tseng Fang"},
                            {"icon":  <FaFacebookSquare size={100} style={{fill:'white'}}/>, "title":"fb", "link":"https://www.facebook.com/chung.tseng/", "subtitle":"Chung-Haw Benjamin Tseng"},
                            {"icon":  <FaFileAlt size={100} style={{fill:'white'}}/>, "title":"resume", "link":"https://drive.google.com/drive/folders/1RvB1H5xhPJhqKSHpsWihEsCLcz5rZtwJ?usp=sharing", "subtitle":"Google Docs"},
                            {"icon":  <FaGithubAlt size={100} style={{fill:'white'}}/>, "title":"git", "link":"https://github.com/chunghaw-tseng", "subtitle":"chawtseng"},
                        ]