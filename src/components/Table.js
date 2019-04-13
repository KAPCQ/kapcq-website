import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/style'

const MyTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-style: hidden;
    border-bottom: 1px solid rgba(112, 112, 112, 0.8);
    td, th {
        border: 1px solid rgba(112, 112, 112, 0.8);
        color: #666666;
    }
    th {
        background-color: #FFFFFF;
        border-bottom: 1px solid white;
        font-weight: normal;
        text-align: center;
    }
    td {
        padding: 1rem;
        line-height: 1.7rem;
    }
`

const CenterCell = styled.td`
    text-align: center;
`

const TitleCell = styled.td`
    text-align: center;
    font-size: ${props => props.size};
`

function Table(props) {
    const rows = props.rows.map((row, i) =>
        <tr key={i}>
            <TitleCell size={row.fontSize}>{row.data[0]}</TitleCell>
            <CenterCell>
                {row.data[1]}
            </CenterCell>
            <CenterCell>
                {row.data[2]}
            </CenterCell>
            <CenterCell>
                {row.data[3]}
            </CenterCell>
        </tr>
    );
    return (
        <div>
            <Header variant="h5" style={{borderBottom: "0.5rem solid #F0D7A4"}}>{props.name}</Header>
            <MyTable>
                <thead>
                    <tr>
                        <th style={{borderRight: "0"}}></th>
                        <th style={{width: "10rem", borderLeft: "0"}}></th>
                        <th style={{width: "20rem"}}>{props.header1}</th>
                        <th style={{width: "30rem"}}>{props.header2}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </MyTable>
        </div>
    );
}

export default Table;