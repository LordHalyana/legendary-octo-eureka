import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";

export default function News(props) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 420,
        bgcolor: "background.paper",
        height: "300px",
        maxHeight: "100%",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Grass seen outside"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                BBC News:
              </Typography>
              {" — Ass have been eaten. Grass spoted outside"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Need to go to Store for Supplies"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                CNN News
              </Typography>
              {" — Fridge is empty. Go to store bruh"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="IMPORTANT: Water is running out"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Norwegian Goverment
              </Typography>
              {
                " — Make sure to shower 3times a day to get your fill before we run out!"
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
