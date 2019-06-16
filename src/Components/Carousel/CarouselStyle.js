import styled from 'styled-components'
import {device} from '../MediaQueries'


export const Centered = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%)
`;

export const Images = styled.img`
@media ${device.mobileS}{
  height: 200px;} 
  and
  @media ${device.mobileM}{
    height: 300px;
  }
  and
  @media ${device.mobileL}{
    height:325px;
  }
  and @media ${device.tablet}{
    height: 350px;
  }
  and
  @media ${device.laptop}{
    height: 400px
  }
  and
  @media ${device.laptopL}{
    height: 500px;
  }
  and
  @media ${device.desktop}{
    height: 600px;
  }`;

  export const H1 = styled.h1`
  @media ${device.tablet}{
    font-size: 4.5em;
    font-weight: bold;
  }
  @media ${device.mobileL}{
    font-size: 3.5em;
    font-weight: bold;
  }
  @media ${device.mobileM}{
    font-size: 2.5em;
    font-weight: bold;
  }
  @media ${device.mobileS}{
    font-size: 2.5em;
    font-weight: bold;
  }
  `

  export const Span = styled.span`
  @media ${device.tablet}{
    font-size: 3em;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media ${device.mobileL}{
    font-size: 2.5em;
    text-transform: uppercase;
    font-weight: bold;
  }
  @media ${device.mobileM}{
    font-size: 2.0em;
    text-transform: uppercase:
    font-weight: bold;
  }
  @media ${device.mobileS}{
    font-size: 1.5em;
    text-transform: uppercase:
    font-weight: bold;
  }
  `




// export const Span = styled.span`
// font-size: 3.0em;
// font-family: 'Sawarabi Gothic', 'Roboto', sans-serif; 
// line-height: 1;
// font-weight: bold;
// letter-space: .0125em;
// text-align:center;
// text-transform: uppercase;
// @media ${device.mobileS}{
//     font-size:1.5em;
//     font-weight: bold;
//     letter-space: .0125em;
// }
// `



















// This is for H1 tag

// color: #fff
// font-size: 4.5em;
// font-family: 'Sawarabi Gothic', 'Roboto', sans-serif;
// line-height: 1;
// font-weight: bold;
// letter-space: .0125em;
// text-align: center; 
// text-transform: uppercase;