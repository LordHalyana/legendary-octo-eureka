import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function Honestquestions() {
  return (
    <div
      style={{
        width: "45%",
        marginLeft: "27.5%",
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Stack sx={{ width: "100%" }} spacing={1}>
            <Alert variant="outlined" severity="success">
              <Typography variant="body2">
                <p style={{ textAlign: "center", fontSize: "14px" }}>
                  You have been invited to participate in an exercise to learn
                  about each other.
                </p>
                <p>
                  The inviter is willing to answer questions honestly and hopes
                  you will do the same.
                </p>
                <p>
                  For everyone to feel comfortable, You must be willing to
                  answer what you ask.
                </p>
                <p>
                  All questions can be dismissed if they make any party feel
                  uncomfortable.
                </p>
              </Typography>
            </Alert>
            <Alert variant="outlined" severity="info">
              Suggested Rules:
              <Typography color="text.secondary" variant="body2">
                <div style={{ textAlign: "center", alignContent: "center" }}>
                  <ul style={{ textAlign: "left" }}>
                    <li>Get to know each other better</li>
                    <li>Be respectful to each other</li>
                    <li>The Invitee gets to ask the first question</li>
                  </ul>
                </div>
              </Typography>
            </Alert>
            <Alert variant="outlined" severity="warning">
              <Typography variant="body2">
                <p style={{ textAlign: "center", fontSize: "14px" }}>
                  To make it less uncomfortable, please answer all questions
                  with 1,2,3 when you read it
                </p>
                <ol style={{ textAlign: "left" }}>
                  <li> Willing to answer</li>
                  <li> I am uncomfortable with this type of question</li>
                  <li>
                    {" "}
                    WTF ARE YOU EVEN ON ABOUT YOU CREEP? LEAVE ME ALONE FOREVER
                  </li>
                </ol>
                <p>
                  After replying with a number 1. Take your time to reply
                  or 2. Take your time to come up with a question to ask
                </p>
              </Typography>
            </Alert>
            <p style={{fontSize:"35px"}}>✌️</p>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
