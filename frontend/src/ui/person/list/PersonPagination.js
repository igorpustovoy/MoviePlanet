import { Pagination, Stack } from "@mui/material";

const PersonPagination = ({ setPage, page, setPeople, searchPoolPeople }) => {

  const handlePageChange = (number) => {
    setPage(number);
    if (searchPoolPeople) {
      if (number * 18 > searchPoolPeople.length - 1) {
        const endNumber = searchPoolPeople.length;
        setPeople(searchPoolPeople.slice((number - 1) * 18, endNumber));
      } else {
        const endNumber = number * 18;
        setPeople(searchPoolPeople.slice((number - 1) * 18, endNumber));
      }
    }
  };
  return (
    <div className="pagination">
      <Stack spacing={2}>
          <Pagination
            count={
              searchPoolPeople && Math.floor(searchPoolPeople.length / 18) + 1
            }
            size="large"
            defaultPage={1}
            onChange={(event, value) => handlePageChange(value)}
            page={page}
          />
      </Stack>
    </div>
  );
};

export default PersonPagination;
