import * as React from "react";
import Link from "@mui/material/Link";

export default function News(props) {
  return (
    <div>
      <p>{props.title}</p>
      <Link href={props.link} underline="hover">
        {"Read More"}
      </Link>
    </div>
  );
}
