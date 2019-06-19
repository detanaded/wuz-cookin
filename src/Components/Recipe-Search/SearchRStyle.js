import { device } from "../MediaQueries";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media ${device.mobileS} {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const Images = styled.img`
  @media ${device.mobileS} {
    width: 90%;
    height: 70%;
    border-raduis: 6px;
  }
`;

export const Box = styled.div`
  @media ${device.mobileS} {
    width: 60%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    border: solid rgb(200, 202, 206) 3px;
    border-radius: 6px;
  }
  @media ${device.tablet} {
    width: 40%;
  }
`;

export const S1 = styled.span`
  @media ${device.mobileS} {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 15px;
  }
`;
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
  }`;

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
  }`;
