import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FirstName from "./First-name";
import LastName from "./Last-name";
import Location from "./Location";
import NewsMini from "./News-mini";
import Feed from "./Feed";
import News from "./News";
import Clock from "./Clock";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Profile() {
  return (
    <div
      style={{
        marginLeft: "20%",
        paddingTop: "15px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item>
              <p>
                First Name: <FirstName name="Admin" />
              </p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <p>
                Last Name: <LastName name="Dev" />
              </p>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item>
              <div style={{height:"80px"}}>
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    height: "50px",
                    width: "50px",
                  }}
                >
                  AD
                </Avatar>
              </div>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <p>
                Location: <Location location="127.0.0.1" />
              </p>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Item>
              <NewsMini title="Grass Seen Outside" link="#" />
            </Item>
          </Grid>
          <Grid item xs={4.5}>
            <Item>
              <Feed />
            </Item>
          </Grid>
          <Grid item xs={4.5}>
            <Item>
              <News />
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Clock />
    </div>
  );
}

export default Profile;
