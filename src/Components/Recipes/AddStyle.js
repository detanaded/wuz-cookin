import styled from 'styled-components'
import {device} from '../MediaQueries'

export const Inputs = styled.input`
@media ${device.mobileS}{
border-top: none;
border-right: none;
border-left: none;
border-bottom: solid 1px;
width: 50px;
}
`

export const Form = styled.form`
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
`


export const Button1 = styled.button`
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

