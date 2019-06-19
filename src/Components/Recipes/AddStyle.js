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