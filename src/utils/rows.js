import React from 'react';
import Button from '@atlaskit/button/standard-button';

export const createRowsData = (data, callback, sortOrder, sortKey) => {
  const sortedItems = [...data].sort((a, b) => {
    if (sortOrder === 'ASC') {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    } else {
      if (a[sortKey] < b[sortKey]) return 1;
      if (a[sortKey] > b[sortKey]) return -1;
      return 0;
    }
  });

  const rows = sortedItems.map((row, index) => {
    return {
      key: row.id,
      cells: [
        {
          key: 'index',
          content: index + 1,
        },
        {
          key: 'firstName',
          content: row.firstName,
        },
        {
          key: 'lastName',
          content: row.lastName,
        },
        {
          key: 'age',
          content: row.age,
        },
        {
          key: 'company',
          content: row.company.name,
        },
        {
          key: 'bloodGroup',
          content: row.bloodGroup,
        },
        {
          key: 'email',
          content: row.email,
        },
        {
          key: 'phone',
          content: row.phone,
        },
        {
          key: 'gender',
          content: row.gender,
        },
        {
          key: 'details',
          content: (
            <Button appearance='primary' onClick={() => callback(row.id)}>
              Details
            </Button>
          ),
        },
      ],
      testId: row.id,
      isHighlighted: index % 2,
    };
  });

  return rows;
};
