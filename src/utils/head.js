export const createHead = data => {
  return {
    cells: data.map(d => ({
      key: d.key,
      content: d.content,
      isSortable: d.isSortable,
      width: d.width,
      shouldTruncate: false,
      colSpan: '',
      testId: d.key,
    })),
  };
};
