import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount }) => {
    return (
        <ReactPaginate
            previousLabel = {"Prev"}
            nextLabel = {"Next"}
            breakLabel = {"..."}
            pageCount = {pageCount}
            marginPagesDisplayed = {1}
            pageRangeDisplayed = {1}
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