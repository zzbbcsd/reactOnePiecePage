import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Title() {
  return (
    <Box sx={{ padding: 10, textAlign: "center" }}>
      <Link
        href="/"
        variant="h1"
        underline="none"
        sx={{ fontWeight: "bold", fontSize: "150px", color: "black" }}
      >
        One Piece
      </Link>
      <Typography variant="h5" gutterBottom>
        The one manga that sparks genuine joy
      </Typography>
    </Box>
  );
}
