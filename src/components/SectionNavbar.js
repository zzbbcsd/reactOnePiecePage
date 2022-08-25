import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const buttons = [
  <Button href="/About" variant="text" size="large">
    About
  </Button>,
  <Button href="/Author" variant="text" size="large">
    Author
  </Button>,
  <Button
    href="https://www.viz.com/shonenjump/chapters/one-piece?locale=en"
    variant="text"
    size="large"
    target="_blank"
  >
    Manga
  </Button>,
  <Button
    href="https://www.crunchyroll.com/"
    variant="text"
    size="large"
    target="_blank"
  >
    Anime
  </Button>,
  <Button href="/Highlight" variant="text" size="large">
    Highlight-Compilations
  </Button>
];

export default function SectionNavbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "info.main",
        padding: 2
      }}
    >
      <Stack spacing={6} direction="row">
        {buttons}
      </Stack>
    </Box>
  );
}
