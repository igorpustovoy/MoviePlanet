import { Menu, MenuItem } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SortMoviesButton = ({ setMovies, setPage, searchPoolMovies }) => {
  const [anchor, setAnchor] = useState(null);

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const openSortMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  window.onscroll = function () {
    closeOnScroll();
  };

  function closeOnScroll() {
    if (anchor) {
      setAnchor(null);
    }
  }

  const sortAscending = (key) => {
    if (typeof key == "string") {
      setMovies(
        [...searchPoolMovies.sort((a, b) => {
          if (a[key].toLowerCase() < b[key].toLowerCase()) return -1;
          if (a[key].toLowerCase() > b[key].toLowerCase()) return 1;
          return 0;
        })]
      );
    } else {
      setMovies(
        [...searchPoolMovies.sort((a, b) => {
          if (a[key] < b[key]) return -1;
          if (a[key] > b[key]) return 1;
          return 0;
        })]
      );
    }
    setPage(1);
  };

  const sortDescending = (key) => {
    if (typeof key == "string") {
      setMovies(
        [...searchPoolMovies.sort((a, b) => {
          if (a[key].toLowerCase() < b[key].toLowerCase()) return 1;
          if (a[key].toLowerCase() > b[key].toLowerCase()) return -1;
          return 0;
        })]
      );
    } else {
      setMovies(
        [...searchPoolMovies.sort((a, b) => {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
          return 0;
        })]
      );
    }
    setPage(1);
  };
  return (
    <div className="sortSection">
      <div className="sortButton" onClick={openSortMenu}>
        <SortIcon />
        <div>Sort</div>
      </div>
      <Menu
        className="sortMenu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleMenuClose}
        disableScrollLock={true}
      >
        <MenuItem
          onClick={() => {
            sortAscending("title");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Title</div>
            <div className="icon"><ArrowUpwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sortDescending("title");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Title</div>
            <div className="icon"><ArrowDownwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sortAscending("release_date");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Release Date</div>
            <div className="icon"><ArrowUpwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sortDescending("release_date");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Release Date</div>
            <div className="icon"><ArrowDownwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SortMoviesButton;
