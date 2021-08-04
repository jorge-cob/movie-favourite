import React from 'react';

interface Props {
  currentMoviesPages: number;
}


const Pagination = ({currentMoviesPages}: Props) => {

  function getPaginationItems() {
    var indents = [];
    for (var i = 0; i < currentMoviesPages; i++) {
      indents.push(
      <div className="pagination-item" key={i}>
        <a href="#" className="pagination-link">
          {i+1}
        </a>
      </div>);
    }
    return indents;
      
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row'}} >
      {getPaginationItems()}
    </div>
  );
}

export default Pagination;
