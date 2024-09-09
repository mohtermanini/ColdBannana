"use client";

import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { breakpoints } from '@/common/data/breakpoints';

//Images
import bg1 from '@/common/assets/images/bg/1.svg';
import bg2 from '@/common/assets/images/bg/2.svg';
import mainBg from '@/common/assets/images/bg/3.svg';

const HeroContainer = styled(Container)`
  min-height: 100vh;
  background-image: url(${mainBg.src});
  background-size: cover;
`;

const HeroContent = styled.div`
  max-width: 400px;
  margin-left: 300px;
  z-index: 2;

  @media (max-width: ${breakpoints.lg}) {
    margin-left: 250px;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-left: 200px;
  }

  @media (max-width: ${breakpoints.sm}) {
    margin-left: 100px;
  }

  @media (max-width: ${breakpoints.xs}) {
    margin-left: 50px;
  }
`;

const BackgroundImage1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 35%;
  background-image: url(${bg1.src});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;

  @media (max-width: ${breakpoints.sm}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 80%;
  }
`;

const BackgroundImage2 = styled.div`
  position: absolute;
  top: 20%;
  left: 80%;
  width: 40%;
  height: 70%;
  background-image: url(${bg2.src});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;

  @media (max-width: ${breakpoints.sm}) {
    left: 70%;
  }

  @media (max-width: ${breakpoints.xs}) {
    width: 80%;
    left: 60%;
  }
`;

export default function Hero() {
    return (
        <HeroContainer className='d-flex align-items-center position-relative px-0' fluid="xxl">
            <BackgroundImage1 />
            <BackgroundImage2 />
            <HeroContent className='d-flex flex-column gap-2'>
                <h1 className='fw-bold fs-1 mb-2 text-uppercase lh-base'>
                    Lorem ipsum dolor sit amet.
                </h1>
                <div className='d-flex'>
                    <Link href="#" className='rounded-5 primary-btn'>Read more</Link>
                </div>
            </HeroContent>
        </HeroContainer>
    );
}
