import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import NoSsr from "@material-ui/core/NoSsr";
import SvgIcon from "@material-ui/core/SvgIcon";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Search from "@material-ui/icons/Search";
import React from "react";
import styles from "./BottomNavBar.module.css";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <NoSsr>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        classes={{
          root: styles.root
        }}
        showLabels
      >
        {/* Home Icon */}
        <BottomNavigationAction
          label="Home"
          icon={
            <HomeIcon
              classes={{
                root: value === 0 ? styles.itemSelected : styles.item
              }}
            />
          }
          classes={{
            root: styles.item,
            selected: styles.itemSelected
          }}
        />

        {/* Search Icon */}
        <BottomNavigationAction
          label="Search"
          icon={
            <Search
              classes={{
                root: value === 1 ? styles.itemSelected : styles.item
              }}
            />
          }
          classes={{
            root: styles.item,
            selected: styles.itemSelected
          }}
        />

        {/* Favories Icon */}
        <BottomNavigationAction
          label="Favorites"
          icon={
            <FavoriteIcon
              classes={{
                root: value === 2 ? styles.itemSelected : styles.item
              }}
            />
          }
          classes={{
            root: styles.item,
            selected: styles.itemSelected
          }}
        />

        {/* Nearby Icon */}
        <BottomNavigationAction
          label="Nearby"
          icon={
            <LocationOnIcon
              classes={{
                root: value === 3 ? styles.itemSelected : styles.item
              }}
            />
          }
          classes={{
            root: styles.item,
            selected: styles.itemSelected
          }}
        />
      </BottomNavigation>
    </NoSsr>
  );
}
