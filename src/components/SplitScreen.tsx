import {Box, BoxProps} from "@mui/material";

interface SplitScreenProps extends Omit<BoxProps, "gridTemplateColumns"> {
  leftElement: JSX.Element;
  rightElement: JSX.Element;
  gridTemplateColumns?: string;
}

export const SplitScreen = (props: SplitScreenProps) => {
  const {leftElement, rightElement, gridTemplateColumns = "438px 1fr"} = props;
  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        gridTemplateColumns,
        bgcolor: "#B48EAD",
        height: "100%",
      }}
    >
      <Box
        height="100%"
        overflow="auto"
        boxShadow={"0 0 0 8px rgba(208,135,112, 0.16)"}
      >
        {leftElement}
      </Box>
      <Box height="100%" overflow="auto">
        {rightElement}
      </Box>
    </Box>
  );
};
