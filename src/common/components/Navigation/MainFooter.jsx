"use client";

import { appMetaData } from '@/common/data/appMetaData'
import Link from 'next/link'
import React from 'react'
import telegramIcon from '@/common/assets/images/icons/telegram.svg';
import twitterIcon from '@/common/assets/images/icons/twitter.svg';
import facebookIcon from '@/common/assets/images/icons/facebook-one.svg';
import youtubeIcon from '@/common/assets/images/icons/youtube.svg';
import instagramIcon from '@/common/assets/images/icons/instagram.svg';
import tiktokIcon from '@/common/assets/images/icons/tiktok.svg';
import footerIcon from '@/common/assets/images/bg/footer.svg';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from '@/common/data/breakpoints';

const Footer = styled.footer`
    margin-top: 150px;
`;

const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  background-image: url(${footerIcon.src});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;

  @media (max-width: ${breakpoints.lg}) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

const FooterListTitle = styled.p`
    @media (max-width: ${breakpoints.md}) {
        color: white;
    }
    &::selection {
        color: white;
    }
`;

const FooterListItem = styled.li`
    @media (max-width: ${breakpoints.md}) {
        color: white;
    }
`;

const FooterSocialMediaListItem = styled.li`
  @media (max-width: ${breakpoints.md}) {
    a {
        box-shadow: none;
    }
  }
`;

export default function MainFooter() {
    return (
        <Footer className='position-relative'>
            <Container>
                <BackgroundImage />
            </Container>
            <Container className='pb-5' style={{ paddingTop: "150px" }}>

                <div className="container position-relative z-3">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 text-white mb-lg-0 mb-3">
                            <p className='fw-bold fs-3 text-uppercase mb-3'>{appMetaData.title}</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6"></div>
                        <div className="col-lg-2 col-md-4 mb-md-0 mb-3">
                            <FooterListTitle className='mb-3 custom-color fw-bold'>Company</FooterListTitle>
                            <ul className='d-flex flex-md-column flex-wrap ps-0 ps-md-3 flex-row gap-3'>
                                <FooterListItem><Link href="#">About</Link></FooterListItem>
                                <FooterListItem><Link href="#">Careers</Link></FooterListItem>
                                <FooterListItem><Link href="#">Our Work</Link></FooterListItem>
                                <FooterListItem><Link href="#">Contact</Link></FooterListItem>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 mb-md-0 mb-3">
                            <FooterListTitle className='mb-3 custom-color fw-bold'>Products</FooterListTitle>
                            <ul className='d-flex flex-md-column flex-row flex-wrap gap-3 ps-0 ps-md-3'>
                                <FooterListItem><Link href="#">About</Link></FooterListItem>
                                <FooterListItem><Link href="#">Careers</Link></FooterListItem>
                                <FooterListItem><Link href="#">Our Work</Link></FooterListItem>
                                <FooterListItem><Link href="#">Contact</Link></FooterListItem>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 custom-color fw-bold">
                            <FooterListTitle className='mb-3'>Follow Us</FooterListTitle>
                            <ul className='d-flex flex-wrap gap-3 ps-0'>
                                <FooterSocialMediaListItem><Link href="#" className='primary-btn p-2'><SocialMediaIcon src={telegramIcon.src} alt="Telegram" /></Link></FooterSocialMediaListItem>
                                <FooterSocialMediaListItem><Link href="#" className='primary-btn p-2'><SocialMediaIcon src={twitterIcon.src} alt="Twitter" /></Link></FooterSocialMediaListItem>
                                <FooterSocialMediaListItem><Link href="#" className='primary-btn p-2'><SocialMediaIcon src={youtubeIcon.src} alt="YouTube" /></Link></FooterSocialMediaListItem>
                                <FooterSocialMediaListItem><Link href="#" className='primary-btn p-2'><SocialMediaIcon src={facebookIcon.src} alt="Facebook" /></Link></FooterSocialMediaListItem>
                                <FooterSocialMediaListItem><Link href="#" className='primary-btn p-2'><SocialMediaIcon src={instagramIcon.src} alt="Instagram" /></Link></FooterSocialMediaListItem>
                                <FooterSocialMediaListItem><Link href="#" className='primary-btn p-2'><SocialMediaIcon src={tiktokIcon.src} alt="TikTok" /></Link></FooterSocialMediaListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Footer>
    )
}
