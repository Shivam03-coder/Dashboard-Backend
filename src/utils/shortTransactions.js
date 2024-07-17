const shortTransactions = (sort) => {
  const sortParsed = JSON.parse(sort);
  const sortFormatted = {
    [sortParsed.feilds]: (sortParsed.sort = "asc" ? 1 : -1),
  };
  return sortFormatted;
};

export default shortTransactions;
