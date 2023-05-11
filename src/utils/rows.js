import React from 'react';
import Button from '@atlaskit/button/standard-button';

export const createRowsData = data => {
  const rows = data.map((row, index) => {
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
            <Button
              onClick={() => {
                console.log(':::modal button');
              }}
            >
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
