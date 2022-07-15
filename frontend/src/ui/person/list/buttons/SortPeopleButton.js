import SortIcon from "@mui/icons-material/Sort";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SortPeopleButton = ({ setPeople, searchPoolPeople, setPage }) => {
  const [anchor, setAnchor] = useState(null);

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const openSortMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const sortAscending = (key) => {
    if (typeof key == "string") {
      setPeople(
        [...searchPoolPeople.sort((a, b) => {
          if (a[key].toLowerCase() < b[key].toLowerCase()) return -1;
          if (a[key].toLowerCase() > b[key].toLowerCase()) return 1;
          return 0;
        })]
      );
    } else {
      setPeople(
        [...searchPoolPeople.sort((a, b) => {
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
      setPeople(
        [...searchPoolPeople.sort((a, b) => {
          if (a[key].toLowerCase() < b[key].toLowerCase()) return 1;
          if (a[key].toLowerCase() > b[key].toLowerCase()) return -1;
          return 0;
        })]
      );
    } else {
      setPeople(
        [...searchPoolPeople.sort((a, b) => {
          if (a[key] < b[key]) return 1;
          if (a[key] > b[key]) return -1;
          return 0;
        })]
      );
    }
    setPage(1);
  };

  window.onscroll = function () {
    closeOnScroll();
  };

  function closeOnScroll() {
    if (anchor) {
      setAnchor(null);
    }
  }
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
            sortAscending("last_name");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Last Name</div>
            <div className="icon"><ArrowUpwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sortDescending("last_name");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Last Name</div>
            <div className="icon"><ArrowDownwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sortAscending("birth_date");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Birth Date</div>
            <div className="icon"><ArrowUpwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            sortDescending("birth_date");
            handleMenuClose();
          }}
        >
          <div className="menuLine" >
            <div>Birth Date</div>
            <div className="icon"><ArrowDownwardIcon fontSize="small" /></div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SortPeopleButton;
