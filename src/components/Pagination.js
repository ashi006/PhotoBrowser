import ReactPaginate from "react-paginate";

const Pagination = () => {
    const handlePageClick = (data) => {
        console.log(data.selected);
    }

    return (
        <ReactPaginate
            previousLabel = {"Prev"}
            nextLabel = {"Next"}
            breakLabel = {"..."}
            pageCount = {25}
            marginPagesDisplayed = {2}
            pageRangeDisplayed = {3}
            onPageChange = {handlePageClick}
            containerClassName = {"pagination justify-content-center"}
            pageClassName = {"page-item"}
            pageLinkClassName = {"page-link"}
            previousClassName = {"page-item"}
            previousLinkClassName = {"page-link"}
            nextClassName = {"page-item"}
            nextLinkClassName = {"page-link"}
            breakClassName = {"page-item"}
            breakLinkClassName = {"page-link"}
            activeClassName = {"active"}
        />
    );
}

export default Pagination;