import React from 'react';
import styled, { css } from 'styled-components/macro' 
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

const Section = styled.section`
    position:relative;
    height:100vh;
    max-height:70rem;
    overflow:hidden;
`
const Wrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const Slider = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    z-index:1;
    top:0;
    left:0;
    width:100%;
    height:100%;

    &::before {
        content:'';
        position:absolute;
        left:0;
        bottom:0;
        z-index:2;
        width:100%;
        height:100vh;
        opacity:40%;
        overflow:hidden; 
        background: linear-gradient(
            0deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2) 100%
        );
    }
`
const Image = styled.img`
    position:absolute;
    top:0;
    left:0;
    width: 100vw;
    height:100vh;
    object-fit:cover;

`
const Content = styled.div`
    position:relative;
    z-index: 10;
    display:flex;
    flex-direction:column;
    max-width:100rem;
    width: calc(100% - 6.35rem);
    color:#fff;

    h1 {
        font-size: clamp(1.8rem, 2.5vw, 2.8rem);
        font-weight:400;
        text-transform:uppercase;
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
        text-align:left;
        margin-bottom:0.8rem;
    }
    p{
        margin-bottom:1.2rem;
        text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    }
`
const Arrow = styled(IoMdArrowRoundForward)``

const arrowBtns = css`
    width: 3em;
    height: 3em;
    color:#fff;
    cursor:pointer;
    background:#000d1a;
    border-radius:100%;
    padding:0.625rem;
    margin-right:1rem;
    transition:0.3s;

    &:hover{
        background:#cd853f;
        transform:scale(1.05);
    }
    
`
const SliderButtons = styled.div`
   position:absolute;
   bottom:50px;
   right:50px;
   z-index:10;
`
const PrevArrow = styled(IoArrowBack)`
    ${arrowBtns}
`
const NextArrow = styled(IoArrowForward)`
    ${arrowBtns}
`

const Hero = ({slides}) => {
    return (
        <Section>
            <Wrapper>
                {slides.map((slide, index)=> {
                    return (
                        <Slider key={index}>
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                            />
                            <Content>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button 
                                    to={slide.path} 
                                    css={`max-width: 160px;`}
                                    primary
                                >
                                    {slide.label}
                                <Arrow/>
                                </Button>
                            </Content>
                        </Slider>
                    )
                })}
            </Wrapper>
                <SliderButtons>
                    <PrevArrow/>
                    <NextArrow/>
                </SliderButtons>
        </Section>
    );
};

export default Hero;