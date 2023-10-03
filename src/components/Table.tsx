import { Box, Card, Typography, useMediaQuery } from "@mui/material";

type Props = {
  tableNumber: number;
  openModal: (number: number) => void;
  crossedOut: boolean;
};

export default function Table(props: Props) {
  const smallMedia = useMediaQuery("(max-width:360px)");
  const circleSize = smallMedia ? "30%" : "22%";

  return (
    <Box sx={{ width: circleSize, aspectRatio: "1/1" }}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          color={props.crossedOut ? "rgba(255, 140, 0,1)" : "white"}
          sx={{ cursor: "pointer" }}
          textAlign="center"
          variant="h4"
          onClick={() => props.openModal(props.tableNumber)}
        >
          {props.tableNumber}
        </Typography>
      </Card>
    </Box>
  );
}
