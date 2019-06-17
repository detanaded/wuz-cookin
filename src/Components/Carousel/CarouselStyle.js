import styled from "styled-components";
import { device } from "../MediaQueries";

export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Images = styled.img`
  @media ${device.mobileS} {
    height: 200px;
  }
  @media ${device.mobileM} {
    height: 300px;
  }
  @media ${device.mobileL} {
    height: 325px;
  }
  @media ${device.tablet} {
    height: 400px;
  }
  @media ${device.laptop} {
    height: 450px;
  }
  @media ${device.laptopL} {
    height: 550px;
  }
  @media ${device.desktop} {
    height: 600px;
  }
`;

export const H1 = styled.h1`
  @media ${device.mobileS} {
    font-size: 2.5em;
    font-weight: bold;
  }
  @media ${device.mobileM} {
    font-size: 2.7em;
    font-weight: bold;
  }
  @media ${device.mobileL} {
    font-size: 3.5em;
    font-weight: bold;
  }
  @media ${device.tablet} {
    font-size: 4.5em;
    font-weight: bold;
  }
  @media ${device.laptop} {
    font-size: 5.5em;
    font-weight: bold;
  }
  @media ${device.laptopL} {
    font-size: 6.5em;
    font-weight: bold;
  }
`;

export const Span = styled.span`
position: relative;
top: 50%;
left: 50%;
transform: translate(-50%, 40%);
text-transform: uppercase;
@media ${device.mobileS}{
  font-size: 1.8em;
  text-transform: uppercase;
  font-weight: bold;
}
    @media ${device.mobileM}{
      font-size: 2.0em;
      text-transform: uppercase;
      font-weight: bold;
    }
    @media ${device.mobileL}{
      font-size: 2.5em;
      text-transform: uppercase;
      font-weight: bold;
    }
  @media ${device.tablet}{
    font-size: 3em;
    text-transform: uppercase;
    font-weight: bold;
  }
  `;

export const Parent = styled.div`
  display: flex;
  text-align: center;
`;

