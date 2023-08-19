import styled, {keyframes} from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height:100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    background: transparent;

`

export const ColouredContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-height:100vh;
    padding: 0 30px;
    position: relative;
    z-index: 1;
    background: ${props => (props.bgcolor)};

    animation: fadeIn ease 20s;
    -webkit-animation: fadeIn ease 20s;
    -moz-animation: fadeIn ease 20s;
    -o-animation: fadeIn ease 20s;
    -ms-animation: fadeIn ease 20s;
`