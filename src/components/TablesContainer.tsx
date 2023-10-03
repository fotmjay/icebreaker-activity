import { Container, useMediaQuery } from "@mui/material";
import Table from "./Table";
import TableModal from "./TableModal";
import { useState } from "react";

export default function TablesContainer() {
  const [open, setOpen] = useState<number | null>(null);

  const smallMedia = useMediaQuery("(max-width:450px)");

  const amountOfTablesToCreate = 20;
  const tableNumbers = [];

  for (let i = 0; i < amountOfTablesToCreate; i++) {
    tableNumbers.push(i + 1);
  }

  const getArrayStateInLocalStorage = () => {
    const crossedTableList = localStorage.getItem("crossedTableList");
    if (crossedTableList === undefined || crossedTableList === null) {
      const crossedTableArray = [];
      for (let i = 0; i < tableNumbers.length; i++) {
        crossedTableArray.push(false);
      }
      localStorage.setItem("crossedTableList", JSON.stringify(crossedTableArray));
      return crossedTableArray;
    } else {
      return JSON.parse(crossedTableList);
    }
  };

  const [crossedOut, setCrossedOut] = useState<boolean[]>(() => getArrayStateInLocalStorage());

  const openModal = (tableNumber: number) => setOpen(tableNumber);
  const closeModal = () => setOpen(null);

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: "10px", width: "100%" }}>
      {tableNumbers.map((number: number, i: number) => (
        <Table crossedOut={crossedOut[i]} openModal={openModal} key={number} tableNumber={number} />
      ))}
      {open && (
        <TableModal
          tableNumber={open}
          smallMedia={smallMedia}
          isModalOpen={open !== null ? true : false}
          closeModal={closeModal}
          crossedOut={crossedOut}
          setCrossedOut={setCrossedOut}
        />
      )}
    </Container>
  );
}
