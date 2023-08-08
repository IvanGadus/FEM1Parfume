import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import styled from 'styled-components';
import '../style/style.css'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --text-color: #727170;
    --price-color: #3d8168;
    --dark-price-color:#174232;
    --padding-bottom-20: 20px;
  }
`

const Cardwrapper = styled.div`
  background-color: white;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  height: 400px;
  width: 550px;
  display: flex;

  @media(max-width: 600px){
    flex-direction: column;
    height: max-content;
    width: 300px;
  }
`

const BigSpaceHeading = styled.h4`
  letter-spacing: 8px;
  font-size: 0.9rem;
  color: var(--text-color);
  font-family: 'PT Sans Narrow', sans-serif;
  padding-bottom: var(--padding-bottom-20);
`

const ContentDiv = styled.div`
  background-color: white;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  padding: 30px;

  @media (max-width: 600px){
    padding: 20px;
  }
`

const ParfumeMainHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  font-family: 'Domine', serif;
  font-weight: bold;
  padding-bottom: var(--padding-bottom-20);
`


const ParfumeDescribtionparagraph = styled.p`
  color: var(--text-color);
  padding-bottom: var(--padding-bottom-20);
  line-height: 22px;

  @media (max-width: 600px){
    letter-spacing: 0.9px;
    font-size: 16px;
  }
`

const MainPrice = styled.p`
  margin-right: 30px;
  color: var(--price-color);
  font-family: 'Domine', serif;
  font-size: 30px;
`

const ButtonAddToCart = styled.button`
  background-color: var(--price-color);
  border: none;
  width: 100%;
  height: 33px;
  cursor: pointer;
  border-radius: 9px;
  color: white;
  font-weight: 700;

  &:active{
    background-color: var(--dark-price-color);
  }

  @media (max-width: 600px){
    height: 40px;
  }
`

const ParfumImage = styled.img`
  height:400px;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;

  @media (max-width: 600px){
    display: none;
  }
`

const ResponsiveParfumImage = styled.img`
  height:400px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  display: none;

  @media (max-width: 600px){
    width: 300px;
    height: 250px;
    object-fit: cover;
    display: block;
  }
`

export default function Card() {
  return (
    <Cardwrapper>
      <GlobalStyle />
        <div>
          <ParfumImage src={'../images/image-product-desktop.jpg'} alt="Parfum" />
          <ResponsiveParfumImage src={'../images/image-product-mobile.jpg'} alt="Parfum" />
        </div>
        <ContentDiv>
            <BigSpaceHeading>PARFUME</BigSpaceHeading>
            <ParfumeMainHeading>Gabrielle Essence Eau De Parfum</ParfumeMainHeading>
            <ParfumeDescribtionparagraph>A floral, solar and voluptuous interpretation composed by Olivier Polge, Parfumer-Creator for the House of CHANEL.</ParfumeDescribtionparagraph>
            <div style={{display:"flex", alignItems: "center", paddingBottom:"20px"}}>
              <MainPrice>$149.99</MainPrice>
              <s style={{color:"#727170"}} className="lastPrice">$169.99</s>
            </div>
            <ButtonAddToCart><RiShoppingCart2Line /> Add to Cart</ButtonAddToCart>
        </ContentDiv>
    </Cardwrapper>
  )
}