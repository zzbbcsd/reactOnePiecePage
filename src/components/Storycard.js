import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Storycard(props) {
  return (
    <Card
      sx={{
        padding: 2,
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "60%"
      }}
    >
      <CardMedia component="img" image={props.img} alt="green iguana" />
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
          variant="h5"
        >
          {`By ${props.author}`}
        </Link>

        <Typography
          sx={{ paddingBottom: 2, paddingTop: 2 }}
          variant="body1"
          color="text.secondary"
        >
          {props.content1}
        </Typography>
        <Typography
          sx={{ paddingBottom: 2, paddingTop: 2 }}
          variant="body1"
          color="text.secondary"
        >
          {props.content2}
        </Typography>
        <Typography
          sx={{ paddingBottom: 2, paddingTop: 2 }}
          variant="body1"
          color="text.secondary"
        >
          {props.content3}
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
