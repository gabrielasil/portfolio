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
        bgcolor: "#2E3440",
        height: "100%",
      }}
    >
      <Box
        height="100%"
        overflow="auto"
        boxShadow="2px 0px 8px 8px rgba(123,108,103, 0.16)"
      >
        {leftElement}
      </Box>
      <Box height="100%" overflow="auto">
        {rightElement}
      </Box>
    </Box>
  );
};
