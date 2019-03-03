import React from 'react';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import Grid from '@material-ui/core/Grid';
import PreviousIcon from '@material-ui/icons/NavigateBefore'
import NextIcon from '@material-ui/icons/NavigateNext'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import LastPageIcon from '@material-ui/icons/LastPage'
import Typography from '@material-ui/core/Typography';

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    & ul {
        font-size: 1rem;
    }

    & ul li {
        display: inline;
        padding: 0.8rem !important;
        cursor: pointer;
    }

    & ul li a {
        color: #000;
        vertical-align: top;
        font-size: 1.2rem;
    }

    & ul li a:hover {
        color: #4177F6;
    }

    & ul li a:focus {
        color: #4177F6;
    }
`

const Description = styled(Typography)`
    margin-top: 2rem !important;
`

function SimplePagination(props) {
    const [activePage, setPage] = React.useState(1);
    const [content, setContent] = React.useState(null);

    function handlePageChange(pageNumber) {
        setPage(pageNumber);
        var end = pageNumber * props.itemsPerPage;
        var activeItem = props.items.slice(end - props.itemsPerPage, end);
        setContent(<Grid container spacing={24} style={{marginTop: "1rem"}}>{activeItem}</Grid>);
    }

    React.useEffect(() => {
        handlePageChange(activePage);
    }, [props.items]);

    return (
        <div>
            <div>
                <Description variant="h6" align="center">{props.description}</Description>
            </div>
            <div>{content}</div>
            <PaginationWrapper>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={props.itemsPerPage}
                    totalItemsCount={props.items.length}
                    onChange={handlePageChange}
                    firstPageText={<FirstPageIcon style={{paddingTop: 1}}/>}
                    lastPageText={<LastPageIcon/>}
                    prevPageText={<PreviousIcon/>}
                    nextPageText={<NextIcon/>}
                />
            </PaginationWrapper>
        </div>
    )
}

export default SimplePagination