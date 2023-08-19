import { Col } from 'reactstrap'
import styled from 'styled-components'
import { Work } from '@styled-icons/material/Work';
import { BookAlt } from '@styled-icons/boxicons-regular/BookAlt';



// This page will contain all the information about the study plus career

export const IconColumn = styled(Col)`
    margin-top: 15px;
    width: .5vw;
`

export const Hexagon = styled.div`
    height: 60px;
    width: 60px;
    background: #4ECDC4;
    -webkit-clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
    clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
`

export const LeftAlignedColumn = styled(Col)`
    text-align: left;
    padding-bottom: 10px;
    padding-top: 10px;
`

export const InstitutionText = styled.p`
    font-weight:bold;
    font-size: 1.3em;
    margin: 0;
    padding: 0;
`
export const TitleText = styled.span`
    font-weight:bold;
    font-size: 1em;
    margin: 0;
    padding: 0;
`

export const LocationText = styled.p`
     font-size: 1.1em;
     margin: 0;
     padding: 0;
`
export const InstitutionLink = styled.a`
    color: black;
    
    &:hover{
        color:yellow;
    }
`

export const ExplanationText = styled.ul`
    font-size: 1em;
`

export const PeriodText = styled.p`
    font-size: 1em;
    font-style:italic;
    margin: 0;
    padding: 0;
`



// EN
// Education Data
const bathUni = {Period:"bath_period", Institution:"bath_uni", Title: "bath_title",  Explantion:["bath_1", "bath_2", "bath_3",  "bath_4"], 
                        Location:"bath_location", IconElement:<BookAlt size={30} style={{fill:'white', top:'15px', position:'relative'}}/>, Link:"https://www.bath.ac.uk/"}
const wasedaUni = {Period:"waseda_period", Institution:"waseda_uni", Title:"waseda_title", Explantion:["waseda_1", "waseda_2", "waseda_3"], 
                    Location:"waseda_location", IconElement:<BookAlt size={30} style={{fill:'white', top:'15px', position:'relative'}}/>, Link:"https://www.waseda.jp/top/en/"}
const gjunInfo = {Period:"gjun_period", Institution:"gjun", Title:"gjun_title", Explantion:["gjun_1", "gjun_2", "gjun_3"], 
                Location:"gjun_location", IconElement:<BookAlt size={30} style={{fill:'white', top:'15px', position:'relative'}}/>, Link:"https://www.pcschool.com.tw/"}

// Carrer Data
const arsCo = {Period:"ars_period", Title:"ars_title", Institution:"ars", Explantion:["ars_1", "ars_2", "ars_3", "ars_4"], 
                Location:"ars_location", IconElement:<Work size={30} style={{fill:'white', top:'15px', position:'relative'}}/>, Link:"http://www.arsjp.com/"}
const infervision = {Period:"infer_period", Title:"infer_title", Institution:"infervision", Explantion:["infer_1", "infer_2"], 
                Location:"infer_location", IconElement:<Work size={30} style={{fill:'white', top:'15px', position:'relative'}}/>, Link:"https://global.infervision.com/"}

// Other 
const dkhouse = {Period:"2011 - 2019", Title:"Test", Explantion:["Explained"], Subtitle:"Subtitle", Education:false}
const OCAC = {Period:"2011 - 2019", Title:"Test", Explantion:["Explained"], Subtitle:"Subtitle", Education:true}
const juijittsu = {Period:"2011 - 2019", Title:"Test", Explantion:["Explained"], Subtitle:"Subtitle", Education:false}


export const CareerList = [bathUni, wasedaUni, gjunInfo, arsCo, infervision];

