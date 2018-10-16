import React from 'react';

const Pagination = (props) => {
  return (
    <nav className="my-2" aria-label="Search result list navigation.">
      <ul className="pagination pagination-sm justify-content-center">
        <li className="page-item" onClick={props.onPreviousPage}>
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li id="page-1" className="active page-item" onClick={props.onSelectPage}><a className="page-link">1</a></li>
        <li id="page-2" className="page-item" onClick={props.onSelectPage}><a className="page-link">2</a></li>
        <li id="page-3" className="page-item" onClick={props.onSelectPage}><a className="page-link">3</a></li>
        <li id="page-4" className="page-item" onClick={props.onSelectPage}><a className="page-link">4</a></li>
        <li id="page-5" className="page-item" onClick={props.onSelectPage}><a className="page-link">5</a></li>
        <li id="page-6" className="page-item" onClick={props.onSelectPage}><a className="page-link">6</a></li>
        <li id="page-7" className="page-item" onClick={props.onSelectPage}><a className="page-link">7</a></li>
        <li id="page-8" className="page-item" onClick={props.onSelectPage}><a className="page-link">8</a></li>
        <li id="page-9" className="page-item" onClick={props.onSelectPage}><a className="page-link">9</a></li>
        <li id="page-10" className="page-item" onClick={props.onSelectPage}><a className="page-link">10</a></li>
        <li className="page-item" onClick={props.onNextPage}>
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;