import { Pagination, Stack } from "@mui/material";

const MoviePagination = ({ setPage, page, searchPoolMovies, setMovies }) => {
      const handlePageChange = (number) => {
        setPage(number);
        if (searchPoolMovies) {
          if (number * 18 > searchPoolMovies.length - 1) {
            const endNumber = searchPoolMovies.length;
            setMovies(searchPoolMovies.slice((number - 1) * 18, endNumber));
          } else {
            const endNumber = number * 18;
            setMovies(searchPoolMovies.slice((number - 1) * 18, endNumber));
          }
        }
      };
  return (
    <div className="pagination">
      <Stack spacing={2}>
          <Pagination
            count={
              searchPoolMovies &&
              Math.floor((searchPoolMovies.length - 1) / 18) + 1
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

export default MoviePagination;
