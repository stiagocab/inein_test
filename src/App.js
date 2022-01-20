import { Container } from "@mui/material";
import React from "react";
import Main from "./components/main";

function App() {
  return (
    <Container maxWidth="md" sx={{ boxShadow: 1, borderRadius: 2, padding: 3 }}>
      <Main />
    </Container>
  );
}

export default App;
