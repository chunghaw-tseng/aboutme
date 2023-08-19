import { Link } from 'react-scroll'
import { Navbar, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import styled from 'styled-components'


// NavBar Items
export const NavDrop = styled(Dropdown)`
    top: -8px;
    color: #FFFFFF;
`
export const NavDropToggle = styled(DropdownToggle)`
    color: #FFFFFF;
`
export const NavDropItem = styled(DropdownItem)`
    color: #FFFFFF;
`
export const NavBrand = styled.a`
    padding-top: 10px;
    text-align:'left';
    &:hover{
        text-decoration: none;
    }
`
export const Brand = styled.p`
    font-weight:bold;
    font-size: 2em;
    color: #000;

`
export const SubBrand = styled.p`
    font-size: 1em;
    margin-top: -25px;
    color: #000;
`
export const CustomBar = styled(Navbar)`
    padding-left:'20px';
    padding-right:'20px';
    &.active{
        background: linear-gradient(90deg, rgb(66,2,194) 0%, rgb(0, 78, 194), 100%);
    }
`
export const NLink = styled(Link)`
    padding: 10px;
    color: #000;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    &.active{
        color: #4ECDC4;
        text-decoration: underline;
    }
    &:hover{
        color: #4ECDC4;
        text-decoration: underline;
    }
`
// Shared Elements

export const CContainer = styled.div`
    display: flex;
`

export const CRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 10px;
`

export const CCenteredRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 10px;
    align-items: center;
    justify-content:center;
`

export const CColumn = styled.div`
    min-width: ${props => (!props.width)? "200px": props.width};
    text-align: ${props => (props.align)};
    flex: ${props => (props.flex)};
`

// Contacts
export const CTitle = styled.p`
    color: white;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 5vw;
    text-transform: uppercase;
`
export const CLink = styled.a`
    color: white;
    font-size: 1em;

`
export const CText = styled.p`
    color: white;
    font-size: 1em;

`
export const Copyright = styled(Row)`
    position: absolute;
    bottom: 0;
`
