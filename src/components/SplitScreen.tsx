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
      <Box height="100%" overflow="auto">
        {leftElement}
      </Box>
      <Box height="100%" overflow="auto">
        {rightElement}
      </Box>
    </Box>
  );
};
