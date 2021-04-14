import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';

import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterHeader
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterHeader>About The Team</FooterHeader>
                <FooterLinksContainer>
                    {/* Two columns */}
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {/* Customize later with the rest of the group. Definitely need less */}
                            <FooterLinkTitle>Lyndon-John Lemmers</FooterLinkTitle>
                            <FooterLink href="https://github.com/LLemmers1030" target="_blank">Github</FooterLink>
                            <FooterLink href="/signin" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Andrew Tsai</FooterLinkTitle>
                            <FooterLink href="https://github.com/Andrew13560" target="_blank">Github</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/andrew-kevin-tsai/" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Samantha Perez</FooterLinkTitle>
                            <FooterLink href="https://github.com/samantha238" target="_blank">Github</FooterLink>
                            <FooterLink href="/signin" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Jeremy Chan</FooterLinkTitle>
                            <FooterLink href="https://github.com/Scientificmagic" target="_blank">Github</FooterLink>
                            <FooterLink href="/signin" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Zachary Goldsmith</FooterLinkTitle>
                            {/* Use 'a' tag for actual links*/}
                            <FooterLink href="https://github.com/WhaleTwoGoat" target="_blank">Github</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/zachary-earl-goldsmith/" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Jessica Medina</FooterLinkTitle>
                            <FooterLink href="https://github.com/Jess0420" target="_blank">Github</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/jessica-medina-5552b8173/" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Truong Nguyen </FooterLinkTitle>
                            <FooterLink href="https://github.com/Truonguyen" target="_blank">Github</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/truong-nguyen123/" target="_blank">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Jack Mobile Home Park</SocialLogo>
                        <WebsiteRights>Jack Mobile Home Park © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            {/* Must have // in front of href for link to work */}
                            <SocialIconLink href="//" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/andrew-kevin-tsai/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer >
    )
}

export default Footer
