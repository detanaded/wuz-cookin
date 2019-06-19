import styled from "styled-components";
import { device } from "../MediaQueries";

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: evenly;
  @media ${device.mobileS}{
  flex-wrap: none;
  align-items: center;
  flex-direction: row
  }
`;

export const Container = styled.div`
@media${device.mobileS}{
  width: 60%;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: solid rgb(200, 202, 206) 3px;
  border-radius: 6px; 
}`;

export const Title = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;
export const Desc = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
  font-weight: bold;
`;

export const DeleteBtn = styled.button`
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
`