import { Box } from "@mui/material";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%"
        }}
      >
        <Cards
          img="https://i.pinimg.com/originals/b6/dc/a1/b6dca19c44e361371e37f65e2e9f4fc6.png"
          section="About"
          author="Wikipedia"
          ogLink="https://en.wikipedia.org/wiki/One_Piece"
          title="What is One Piece"
          content="One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997.."
        />

        <Cards
          img="https://i.pinimg.com/736x/38/e7/b9/38e7b914934c8057154e6072d4566a1f.jpg"
          section="Author"
          author="Wikipedia"
          ogLink="https://en.wikipedia.org/wiki/Eiichiro_Oda"
          title="Oda Eiichiro - The Legendary Manga Artist Behind One Piece"
          content="Eiichiro Oda (Japanese: 尾田 栄一郎, Hepburn: Oda Eiichirō, born January 1, 1975) is a Japanese manga artist and the creator of the series One Piece (1997–present). With more than 516.5 million tankōbon copies in circulation worldwide, One Piece is both the best-selling manga in history.."
        />

        <Cards
          img="https://i.pinimg.com/736x/ac/8a/84/ac8a8426531902c107f8cbd64db2d4ed.jpg"
          section="Recommendation"
          author="Dave Aubrey"
          ogLink="https://www.thegamer.com/one-piece-story-generation/"
          title="Why you should start reading One Piece now?"
          content="One Piece might be the greatest story ever told. It might be the Tolkien-tier odyssey of our generation. It might take over your life. These are just a few things that I, a One Piece obsessive, tell people in order to convince them to read my favourite story. "
        />
      </Box>
    </div>
  );
}
