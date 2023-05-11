import React, { useState } from 'react';
import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/standard-button';
import { DynamicTableStateless } from '@atlaskit/dynamic-table';
import { createRowsData } from '../utils/rows';
import '../styles/table.css';

const TableCaption = <h2 className='caption'>List of Users</h2>;

export default function TableControlled({ head, items, isLoading }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [sortOrder, setSortOrder] = useState('ASC');
  const [sortKey, setSortKey] = useState('index');

  const navigateTo = pageNumber => {
    setPageNumber(pageNumber);
  };

  const handleSort = data => {
    setSortKey(data.key);
    if (sortOrder === 'ASC') setSortOrder('DESC');
    if (sortOrder === 'DESC') setSortOrder('ASC');
  };

  const rows = createRowsData(items);

  return (
    <div className='table-container'>
      <div className='table-btn-container'>
        <ButtonGroup>
          <Button
            isDisabled={pageNumber === 1}
            onClick={() => navigateTo(pageNumber - 1)}
          >
            Previous Page
          </Button>
          <Button
            isDisabled={pageNumber === 5}
            onClick={() => navigateTo(pageNumber + 1)}
          >
            Next Page
          </Button>
        </ButtonGroup>
      </div>
      <DynamicTableStateless
        caption={TableCaption}
        head={head}
        rows={rows}
        rowsPerPage={15}
        page={pageNumber}
        loadingSpinnerSize='large'
        isLoading={isLoading}
        isFixedSize
        sortKey={sortKey}
        sortOrder={sortOrder}
        onSort={handleSort}
        onSetPage={navigateTo}
      />
    </div>
  );
}
