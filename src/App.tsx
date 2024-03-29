import {Avatar, Box, Typography} from "@mui/material";
import "./App.css";
import {SplitScreen} from "./components/SplitScreen";
import {pixelCat} from "./assets/images";

function App() {
  return (
    <Box
      component="div"
      sx={{
        flexGrow: 1,
        position: "relative",
        height: "100vh",
      }}
      display="flex"
      flexDirection="column"
    >
      <SplitScreen
        leftElement={
          <Box
            sx={{
              backgroundColor: "#A3BE8C",
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "40px 20px",
              gap: "10px",
            }}
          >
            <Avatar
              alt="Gabriela Silva"
              src={pixelCat}
              sx={{width: 200, height: 200}}
            />
            <Typography textAlign={"center"}>
              Olá! Sniff all the things cuddle no cuddle cuddle love scratch
              scratch poop on floor and watch human clean up, or walk on a
              keyboard. Munch on tasty moths human clearly uses close to one
              life a night no one naps that long so i revive by standing on
              chestawaken! love to play with owner's hair tie. Jump around on
              couch, meow constantly until given food, lie in the sink all day
              immediately regret falling into bathtub white cat sleeps on a
              black shirt there's a forty year old lady there let us feast. Why
              must they do that eat from dog's food for stare out the window so
              asdflkjaertvlkjasntvkjn (sits on keyboard) i will ruin the couch
              with my claws but mewl for food at 4am.
            </Typography>
          </Box>
        }
        rightElement={<Box></Box>}
      />
    </Box>
  );
}

export default App;
