import ReactPaginate from "react-paginate";
import { PaginationProps } from "./pagination.defs";

export default function PagePagination({
    handlePageClick,
    pageCount,
    currentPageNumber,
}: PaginationProps) {
    return (
        <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            forcePage={currentPageNumber}
            nextLabel=">"
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    );
}
