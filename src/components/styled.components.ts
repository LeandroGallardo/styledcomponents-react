import styled from 'styled-components';

interface Props {
    primary?: boolean;
    height?: number;
    src?: string;
}

export const ButtonDemo = styled.button<Props>`
    color:red;
    border:1px solid #000;
    padding:10px;
    ${props => props.primary ? 'background: green' : 'background: #FFF'}
`

export const Flex = styled.div<Props>`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

export const Container = styled.div<Props>`
    height: calc(${props => props.height}vh - 50px);
    width: 90%;
    background:url(${props => props.src}) no-repeat;
    background-size: contain;
    background-position:center;
    margin-top:50px;
    border-radius: 10px 10px 0 0;
    opacity:0.6;
`
export const ContainerInfo = styled.div<Props>`
    height: ${props => props.height}vh;
    width: 100%;

    color:#FFF;
    background:#000;
`

export const AvatarContainer = styled.div<Props>`
    height: ${props => props.height}vh;
    width: 100%;
    background:url(${props => props.src}) no-repeat;
    position: absolute;
    top:0;
    margin:auto;
`
export const Avatar = styled.div<Props>`
    height: ${props => props.height}vh;
    width: auto;
    background:url(${props => props.src}) no-repeat;
    background-position: top;
    background-size: cover;
`

export const Degrade = styled.div<Props>`
    height: ${props => props.height}vh;
    width: 100%;
    background:url(${props => props.src}) no-repeat;
    position: absolute;
    top:0;
    margin:auto;
    z-index:2;
    background: linear-gradient(transparent 0, #000 90%)
`
export const MiniAvata =  styled.div<Props>`
    height: 50px;
    width: 50px;
    background:url(${props => props.src}) no-repeat;
    background-position: top;
    background-size: cover;
    border-radius: 50%;
    border: 2px solid #FFF;

`

export const ButtonBuy = styled.button<Props>`
    color:#fff;
    border:none;
    padding:10px;
    width:80%;
    background:red;
    border-radius:10px;
    margin-top:10px;
    cursor:poiner;
`