import { device } from ".././MediaQueries";
import styled from "styled-components";

export const Container = styled.div`
  @media ${device.tablet}{
    background-color: purple;
    display: flex;
    flex-wrap: wrap;
  }`;


export const Box = styled.div`
@media ${device.tablet}{
  background-color: aqua;
  height: 300px;
  width: 200px;
}
`

export const Images = styled.img`
  @media ${device.mobileS} {
    width: 225px;
    height: 200px;
  }
  @media ${device.mobileM} {
    width: 275px;
    height: 250px;
  }
  @media ${device.mobileL} {
    width: 350px;
    height: 325px;
  }
  @media ${device.tablet} {
    width: 175px;
    height: 200px;
  }
`;

export const H1 = styled.h1`
@media ${device.mobileS}{
  font-size: 18px;
}
@media ${device.mobileM}{
  font-size: 22px;
}
@media ${device.mobileL}{
  font-size: 26px;
}
@media ${device.tablet}{
  font-size: 16px
}`
