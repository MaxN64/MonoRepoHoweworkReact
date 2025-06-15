import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Это тестовое приложение
        </Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Использовать Material UI?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это простое React-приложение с использованием Material UI. Вы можете
            настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose} autoFocus>
            Согласен
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
