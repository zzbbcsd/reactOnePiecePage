import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Hightlight() {
  return (
    <Card sx={{ padding: 2, textAlign: "center" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" color="primary.main">
          Highlights
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          1 Second from 1000 Episodes of One Piece
        </Typography>
        <Link
          gutterBottom
          href="https://www.youtube.com/watch?v=hQagzXbyp9I"
          underline="hover"
          color="inherit"
          variant="body1"
        >
          {`By Crunchyroll Collection`}
        </Link>
      </CardContent>
      <iframe
        title="onepiece-video"
        width="820"
        height="615"
        src="https://www.youtube.com/embed/hQagzXbyp9I"
      ></iframe>
    </Card>
  );
}
