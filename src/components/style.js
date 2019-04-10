import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Title = styled(Typography)`
    padding-top: 2rem;
    color: #3D3D3D !important;
    font-weight: bold !important;
` 

export const Description = styled(Typography)`
    color: #707070 !important;
`

export const Button = styled.a`
    padding: 0.2rem 1rem;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
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