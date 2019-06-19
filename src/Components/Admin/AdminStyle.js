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
