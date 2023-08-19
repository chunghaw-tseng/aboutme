import styled from 'styled-components';
import {StyledIconBase} from '@styled-icons/styled-icon'
import { Handshake } from '@styled-icons/fa-solid/Handshake';
import {Lightbulb} from '@styled-icons/bootstrap/Lightbulb';
import {Rocket} from '@styled-icons/icomoon/Rocket';
import {Devices} from '@styled-icons/material/Devices';

export const Diamond = styled.div`
    ${StyledIconBase}{
        color:white;
        margin-top: 13px;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    width: 80px;
    height: 80px;
    margin: 0 6px;
    text-align: center;
    display: inline-block;
    background-color: #4ECDC4;
    border: 1px solid #4ECDC4;
    border-radius: 2px;
    transform: rotate(45deg);
    line-height: 25px;
    transition: all 500ms ease;
`

export const SContent = styled.p`
    margin-top: 20px;
`

export const STitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
`

export const SText = styled.p`
    font-size: 16px;
`

export const PLabel = styled.div`
    /* Nothing here, move along */
    // TODO Might use this font
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`

export const PVisual = styled.div`
     /* Number of the seconds for complete animation */
    transition: width 2s;
    background:  ${props => (props.bgcolor)};
    width: calc(${props => (props.size)} - 100px);

`

export const PHeading = styled.div`
    display: inline-block;
    width: 100px;
    height: 30px;
    font-size: 15px;
    text-align: center;
    background: ${props => (props.bgcolor)};
    color: white;
    vertical-align: middle;
    font-weight: bold;
`

export const PPercentage = styled.p`
    position:absolute;
    background: transparent;
    color: black;
    right: 0;
    margin-right: 10px;
`

export const PFull = styled.div`
    display: flex;
    position: relative;
    /* change the value if you want different thickness */
    height: 30px;
    margin: 20px 10px 0;
    background: ${props => (props.bgcolor)};
`

export const Slanguages = [{"lang":"es", "percentage": "100%"}, {"lang":"en", "percentage": "100%"}, 
                            {"lang":"zh", "percentage": "80%"}, {"lang":"ja", "percentage": "70%"},]

export const PLanguages = [{"lang":"Python", "percentage":"90%"}, {"lang":"Javascript", "percentage":"90%"}, {"lang":"BashScript", "percentage":"90%"},
                            {"lang":"HTML", "percentage":"80%"},  {"lang":"Java", "percentage":"70%"}, 
                            {"lang":"CSS", "percentage":"60%"}, {"lang":"TypeScript", "percentage":"60%"}, 
                            {"lang":"GoLang", "percentage":"60%"}, {"lang":"C/C++", "percentage":"50%"}, 
                        ]
export const Framework = [ {"lang":"Android", "percentage":"90%"}, {"lang":"React", "percentage":"80%"},  {"lang":"Flutter", "percentage":"80%"}, 
                        {"lang":"iOS", "percentage":"70%"} ]


export const MainSkill = [{"skill":"teamwork", "reason":"team_reason", "icon":<Handshake size={55}/>},
                         {"skill":"prob_solve", "reason":"prob_reason", "icon":<Lightbulb size={55}/>},
                         {"skill":"adaptability", "reason":"adap_reason", "icon": <Rocket size={55} />},
                         {"skill":"exp", "reason":"exp_reason", "icon":<Devices size={55} />}]