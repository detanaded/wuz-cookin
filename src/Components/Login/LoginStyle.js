import {device} from '../MaxMedia'
import styled from 'styled-components'

export const Heading = styled.h3`
  text-transform: uppercase;
  padding-top: 13px;
  font-size: 16px;
  margin-top: -2px;
`;

export const FormBtn = styled.button`
background-color: black;
color: white
width: 65%;
height: 25px;
border: none;
text-transform: uppercase;
font-size: 11px;
  `;
export const FormContainter = styled.form`
  margin-top: 16px;
  display: flex;
  height: 61%;
  width: 50%;
  border-right: 1px grey solid;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; 
  }
`;
export const LoginInput = styled.input`
  border: 1px dotted grey 
  }
`;
export const Logo = styled.img`
  height: 45px;
  width: 35%;
`;

