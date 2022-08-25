import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Cards(props) {
  return (
    <Card sx={{ padding: 2, justifyContent: "center" }}>
      <CardMedia
        component="img"
        image={props.img}
        alt="green iguana"
        sx={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%"
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="primary.main">
          {props.section}
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {props.title}
        </Typography>
        <Link
          gutterBottom
          href={props.ogLink}
          underline="hover"
          color="inherit"
          variant="h6"
        >
          {`By ${props.author}`}
        </Link>

        <Typography variant="body1" color="text.secondary">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={`/${props.section}`} size="medium">
          {" "}
          {`Continue Reading ->`}{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
