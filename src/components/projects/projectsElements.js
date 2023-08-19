import styled from 'styled-components'
import terminal from "../../img/terminal.jpg";
import android_app from "../../img/android_2.jpg";
import ios_app from "../../img/ios.jpg"
import android_2 from "../../img/android_app.jpg";
import packaged from "../../img/package.jpg";
import rapiro from '../../img/rapiro.jpeg';
import medical from '../../img/medical.jpg';
import cloud from '../../img/cloud.jpg';
import scan from '../../img/medical_scan.jpg';
import multi from '../../img/multidevice.jpg';


// Easy working version

// export const ProjectCol = styled(Col)`
//   margin:0;
//   padding:0;
// `


export const ImgOverlay = styled.div`
    background: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
`

export const ContentOverlay = styled.div`
  color: white;
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 80%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
`

export const Content = styled.div`
  position: relative;
  min-width:28vw;
  max-height:50vh;
  &:hover ${ImgOverlay}{
      opacity: 1; 
    }
  &:hover ${ContentOverlay}{
    top: 50%;
    left: 50%;
    opacity: 1;
  }
`

export const ProjectImg = styled.img`
    display: block;
    min-width:28vw;
    max-width:75vw;
    height:300px;
    overflow: hidden;
 `

 export const ContentTitle = styled.p`
    font-weight:bold;
    font-size: 20px;
    margin: 0;
    padding: 0;

 `
 export const ContentLang = styled.p`
    font-size: .9em;

 `
 export const ModalImg = styled.img`
    width: auto;
    height: auto;
 `

 export const ContentText = styled.p`
    font-size: 1em;
 `

 export const FooterText = styled.p`
    font-size: 1.2em;
    font-weight: bold;
    padding: 5px;
 `

 export const Divider = styled.hr`
    height: 5px;
    color: 'red';
    background-color: 'red';
 `


export const ProjectHistory  = [{"img": terminal, "desc_img": ios_app, "title":"terminal_app", "lang":"iOS/Android/Java", 
   "description":"terminal_desc"},
      {"img":packaged, "desc_img": android_app, "title":"pack_app", "lang":"Android/Java/Python/HTML/CSS/SQLite", 
   "description": "pack_desc"},
      {"img":rapiro, "desc_img": android_2, "title":"sight_app", "lang":"Python/Android/Java/Arduino/SQLite/C/Bluetooth", 
   "description":"sight_desc"},
   {"img": medical, "desc_img": cloud, "title": "medical_system", "lang":"Python/React/GoLang/Lua/NGINX/Docker/GCloud", 
   "description":"medical_desc"},
   {"img": scan, "desc_img": multi, "title": "viewer_app", "lang":"Python/Flutter/Dart/MySQL", 
   "description":"viewer_desc"}]
