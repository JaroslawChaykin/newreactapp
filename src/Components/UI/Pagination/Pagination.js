import React from 'react';
import { getPagesArray } from '../../../utils/pages';
import './Pagination.css'

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages);

    return (
      <div className={'pages-count'}>
          {
              pagesArray.map(p => {
                  return <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}>
                          {p}
                      </span>;
              })
          }
      </div>
    );
};

export default Pagination;