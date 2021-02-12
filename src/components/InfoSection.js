import React from 'react';
import styled from 'styled-components'
import { Button } from './Button';

const Section = styled.section`
    width:100%;
    height:100%;
    padding: 4rem 0rem;
`
const Container = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:50rem;
    padding: 3rem calc((100vw - 90rem) / 2);

    @media screen and (max-width:48rem){
        grid-template-columns: 1fr;
    }
`
const ColumnText = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    line-height:1.4;
    padding:1rem 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};

    h1 {
        font-size: clamp(1.5rem, 6vw, 2rem);
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 2rem;
    }
`
const ColumnImage = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    order: ${({ reverse }) => (reverse ? '1' : '2')};

    @media screen and (max-width:48rem) {
        order: ${({ reverse }) => (reverse ? '2' : '1')};
    }

    img {
        width:100%;
        height:100%;
        object-fit:cover;

        @media screen and (max-width:48rem){
            width:90%;
            height:90%;
        }
    }
`

const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section>
            <Container>
                <ColumnText>
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='/homes' primary='true'>{buttonLabel}</Button>
                </ColumnText>
                <ColumnImage reverse={reverse}>
                    <img src={image} alt='home'></img>
                </ColumnImage>
            </Container>
        </Section>
    );
};

export default InfoSection;