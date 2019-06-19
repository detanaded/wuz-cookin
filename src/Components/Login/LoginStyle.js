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
  @media ${device.mobileL}{
    font-family: Poppins-Medium;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
  }
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
  @media ${device.mobileL} {
    border-right: none;
    background: #6a7dfe;
    background: -webkit-linear-gradient(left, #21d4fd, #b721ff);
    background: -o-linear-gradient(left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(left, #21d4fd, #b721ff);
    background: linear-gradient(left, #21d4fd, #b721ff);
    width: 100%;
    height: 100vh;
    margin: 0;
  }
`;
export const LoginInput = styled.input`
  border: 1px dotted grey @media ${device.mobileL} {
    font-size: 15px;
    color: #555555;
    line-height: 1.2;

    display: block;
    width: 100%;
    height: 45px;
    background: transparent;
    padding: 0 5px;
  }
`;
export const Logo = styled.img`
  height: 45px;
  width: 35%;
  @media ${device.mobileL} {
    display: none;
  }
`;

export const Containerbtn = styled.div`
@media${device.mobileL}{
display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 13px;
}
`

export const WrapBtn = styled.div`
@media ${device.mobileL}{
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 25px;
  overflow: hidden;
  margin: 0 auto;
} `


export const BtnRgb = styled.div`
@media ${device.mobileL}{
position: absolute;
z-index: -1;
width: 300%;
height: 100%;
background: #a64bf4;
background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
background: -o-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
background: -moz-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
background: linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
top: 0;
left: -100%;

-webkit-transition: all 0.4s;
-o-transition: all 0.4s;
-moz-transition: all 0.4s;
transition: all 0.4s;
}
`