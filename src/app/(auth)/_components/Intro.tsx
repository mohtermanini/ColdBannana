"use client";

import React from 'react'
import Link from 'next/link'

import { Container } from 'react-bootstrap'
import styled from 'styled-components';

import plantBg from '@/common/assets/images/bg/plant.svg'
import { breakpoints } from '@/common/data/breakpoints';

const IntroContainer = styled(Container)`
  min-height: 100vh;

  @media (max-width: ${breakpoints.sm}) {
    min-height: auto;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 60%;
  width: 40%;
  height: 100%;
  background-image: url(${plantBg.src});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;

  @media (max-width: ${breakpoints.md}) {
    top:30%;
    left: 60%;
  }

  @media (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const IntroContent = styled.article`
    flex-basis: 38%;

    @media (max-width: ${breakpoints.sm}) {
        flex-basis: 100%;
  }
`

export default function Intro() {
  return (
    <IntroContainer className='d-flex gap-5 align-items-center position-relative mb-md-0 mb-5'>
      <BackgroundImage />
      <IntroContent >
        <h2 className='text-uppercase fs-3 fw-bold mb-3'>Lorem ipsum dolor sit amet.</h2>
        <p className='mb-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link href="#" className='rounded-5 primary-btn'>Read more</Link>
      </IntroContent>
    </IntroContainer>
  )
}
