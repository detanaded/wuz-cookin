import { device } from ".././MediaQueries";
import styled from "styled-components";

// export const Container = styled.div`
//   @media ${device.tablet}{
//     background-color: purple;
//     display: flex;
//     flex-wrap: wrap;
//   }`;


// export const Box = styled.div`
// @media ${device.tablet}{
//   background-color: aqua;
//   height: 300px;
//   width: 200px;
// }
// `

// export const Images = styled.img`
//   @media ${device.mobileS} {
//     width: 225px;
//     height: 200px;
//   }
//   @media ${device.mobileM} {
//     width: 275px;
//     height: 250px;
//   }
//   @media ${device.mobileL} {
//     width: 350px;
//     height: 325px;
//   }
//   @media ${device.tablet} {
//     width: 175px;
//     height: 200px;
//   }
// `;

// export const H1 = styled.h1`
// @media ${device.mobileS}{
//   font-size: 18px;
// }
// @media ${device.mobileM}{
//   font-size: 22px;
// }
// @media ${device.mobileL}{
//   font-size: 26px;
// }
// @media ${device.tablet}{
//   font-size: 16px
// }`

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
@media ${device.mobileS}{
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}
@media ${device.tablet}{
  flex-wrap: wrap;
  flex-direction: row
}
`;

export const Images = styled.img`
@media ${device.mobileS}{
  width: 90%;
  height: 60%;
  border-raduis: 6px;
}
`;

export const Box = styled.div`
@media ${device.mobileS}{
  width: 60%;
  height: 45vh;
	display: flex;
	flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: solid rgb(200, 202, 206) 3px;
  border-radius: 6px;
  
}
@media ${device.tablet}{
  width: 40%;
}`;


export const S1 = styled.span`
@media ${device.mobileS}{
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 15px;
}

`
export const Favorite = styled.button`
  @media ${device.mobileS}{
    border-radius: 3em;
    background: #0096D6;
    color: white;
    font-weight: bold;
    height: 40px;
    margin-top: 10px;
    padding: 0 24px;
    border: none;
    font-size: 14px;
    text-align: center;
    text-transform: captilize
    white-space: nowrap;
    :hover {
      background-color: purple;
      color: black;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }`

export const Logout = styled.button`
border-radius: 3em;
    background: #0096D6;
    color: white;
    font-weight: bold;
    height: 40px;
    margin-top: 10px;
    padding: 0 24px;
    border: none;
    font-size: 14px;
    text-align: center;
    text-transform: captilize
    white-space: nowrap;
    :hover {
      background-color: purple;
      color: black;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }`



export const View = styled.button`
border-radius: 3em;
    background: #0096D6;
    color: white;
    font-weight: bold;
    height: 40px;
    margin-top: 10px;
    padding: 0 24px;
    border: none;
    font-size: 14px;
    text-align: center;
    text-transform: captilize
    white-space: nowrap;
    :hover {
      background-color: purple;
      color: black;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }`

  export const Submit = styled.button`
  border-radius: 3em;
    background: #0096D6;
    color: white;
    font-weight: bold;
    height: 40px;
    margin-top: 10px;
    padding: 0 24px;
    border: none;
    font-size: 14px;
    text-align: center;
    text-transform: captilize
    white-space: nowrap;
    :hover {
      background-color: purple;
      color: black;
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
  }`


  export const Search = styled.input`
  margin: 0 15px 20px 30%;
  width: 30%
  height: 30px
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px
  font-size: 16px;
  `