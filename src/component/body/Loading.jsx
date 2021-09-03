import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <section
      align="center"
      style={{ paddingTop: "100px", verticalAlign: "center" }}
    >
      <CircularProgress disableShrink />
    </section>
  );
}
