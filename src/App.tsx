import {
  Avatar,
  Box,
  Icon,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import "./App.css";
import {SplitScreen} from "./components/SplitScreen";
import {pixelCat} from "./assets/images/images";
import {GitHub, LinkedIn} from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: ["Inconsolata"].join(","),
  },
});

function App() {
  const openInNewTab = (url: string) => {
    var win = window.open(url, "_blank");
    if (win) win.focus();
  };
  return (
    <ThemeProvider theme={theme}>
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
                padding: "40px 30px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <Typography
                  textAlign={"center"}
                  fontWeight={800}
                  fontSize="24px"
                >
                  Hello! I'm Rhysand
                </Typography>
                <Avatar
                  alt="Gabriela Silva"
                  src={pixelCat}
                  sx={{width: 200, height: 200}}
                />
                <Typography textAlign="justify" fontWeight={600}>
                  Since I played my first video game at childhood, it has become
                  my greatest passion. When growing up, I also got interested on
                  coding and web development, and choose that as a career. I’m
                  currently a web developer, working primarily with React.js and
                  NodeJS, but have great interest on game development, mostly as
                  a Game Designer or Narrative Designer, the main roles that I
                  took on all my prototypes done till now, and that I still want
                  to learn more.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <GitHub
                  onClick={() => openInNewTab("github.com/gabrielasil")}
                  cursor="pointer"
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                />
                <LinkedIn
                  onClick={() =>
                    openInNewTab(
                      "linkedin.com/in/gabriela-melo-silva-338950159"
                    )
                  }
                  cursor="pointer"
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </Box>
            </Box>
          }
          rightElement={<Box></Box>}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
