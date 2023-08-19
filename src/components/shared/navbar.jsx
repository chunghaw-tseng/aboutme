import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {options} from '../config/options'
import { Brand, SubBrand, NLink, CustomBar, NavBrand, NavDropToggle, NavDropItem, NavDrop } from './elements';

function NavigationItem({toID, label}) {
    return (
        <>
            <NavItem>
                <NLink
                    activeClass="active"
                    to={toID}
                    spy={true}
                    smooth={true}
                    offset={-5}
                    duration={500}
                >
                {label}
                </NLink>
                </NavItem>
        </>
    );
}


const CustomNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [dropdown, setdropdown] = useState(false);
    const toggleDropdown = () => setdropdown(!dropdown);
    const toggle = () => setIsOpen(!isOpen);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    const changeNavBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', changeNavBackground);

    return (
    <CustomBar color={navbar ? "light" : "faded"} light expand="md" sticky='top'>
         <NavBrand href="/">
             <Brand>Chung Haw Tseng Fang</Brand>
             <SubBrand>Full Stack Engineer</SubBrand>
        </NavBrand>
        <NavbarToggler style={{color:'white'}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavigationItem toID="aboutMe" label={t('aboutMe')}/>
                <NavigationItem toID="career" label={t('ed_career')}/>
                <NavigationItem toID="projects" label={t('project')}/>
                <NavigationItem toID="skills" label={t('skill')}/>
                <NavigationItem toID="contacts" label={t('contact')}/>
                <NavItem>
                    <NavDrop isOpen={dropdown} toggle={toggleDropdown}>
                    {options.map((element, _) => {
                    if (element["value"] == i18n.language){
                        return <NavDropToggle nav caret>
                        {t(element["label"])} {getUnicodeFlagIcon(element["code"])}
                    </NavDropToggle>;
                    }
                    })}
                    <DropdownMenu right>
                    {options.map((item, _) => {
                    return <NavDropItem 
                                onClick={()=>{changeLanguage(item["value"])}} 
                                key={item["value"]}
                                value={item["value"]}>{t(item["label"])} {getUnicodeFlagIcon(item["code"])}</NavDropItem>;})}
                    </DropdownMenu>
                </NavDrop>
                </NavItem>
            </Nav>
        </Collapse>
      </CustomBar>
    )
}

export default CustomNavBar;