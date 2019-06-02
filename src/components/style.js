import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Text = styled.p`
    font-size: ${props => props.fontSize};
    color: #707070;
    text-align: ${props => props.center ? 'center' : 'left'};
    font-weight: bold;
`

export const Title = styled.h1`
    color: #3D3D3D !important;
    font-weight: bold !important;
    font-size: 3rem;
    text-align: center;
` 

export const Banner = styled.div`
    background-color: ${props => props.backgroundColor};
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.3rem;
    color: #707070;
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const DateBox = styled.div`
    background-color: ${props => props.backgroundColor};
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
`

export const Divider = styled.div`
    background-color: ${props => props.background};
    border-radius: 1rem;
    width: 3rem;
    height: 0.5rem;
`

export const MainTitle = styled.h1`
  font-size: 3rem;
  color: ${props => props.color};
  padding-top: 12rem;
`

export const MainDescription = styled.h2`
  font-size: 1.3rem;
  color: ${props => props.color};
  padding: 4rem 0 10rem 0;
`

export const Background = styled.div`
  background-image: url(${props => props.image});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
` 

export const Image = styled.div`
    height: 0;
    padding-top: 56.25%;
    display: block;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const MobileTitle = styled.h1`
    color: #3D3D3D;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
` 

export const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    background: #fff;
    border-radius: 4px;
`

export const Header = styled.h1`
    color: #606060;
    font-weight: bold;
    font-size: 1.5rem;
`

export const SubHeader = styled(Typography)`
    color: #707070 !important;
`

export const Description = styled.p`
  color: #95989A;
`

export const Button = styled.a`
    padding: 0.2rem 1rem;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
`

export const PrimaryButton = styled.button`
  background: ${props => props.background};
  color: white;
  font-size: 1.3em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border: 0;
  border-radius: 3px;
`;

export const UnderLine = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-top: -1rem;
`

export const Circle = styled.div`
    background: ${props => props.background};
    border-radius: 50%;
    width: ${props => props.radius};
    height: ${props => props.radius};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`

// export const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.primary ? "#DFAC44" : props.secondary ? "rgba(112, 112, 112, 0.78)" : "white"};
//   color: ${props => props.primary || props.secondary ? "white" : "#DFAC44"};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid ${props => props.secondary ? "rgba(112, 112, 112, 0.78)" : "#DFAC44"};
//   border-radius: 3px;
// `;