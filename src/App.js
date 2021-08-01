import "./App.css";

import React from "react";
import Container from "@material-ui/core/Container";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/dark";
import { TodoListPage } from "./pages/TodoList";

const useStyles = makeStyles((theme) => ({
    root: {
        "&": {
            background: theme.background,
            height: "100vh",
        },
    },
}));

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CustomContainer />
        </ThemeProvider>
    );
}

function CustomContainer() {
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth={false}>
            <Router>
                <Switch>
                    <Route path="/login">
                        <LoginPage></LoginPage>
                    </Route>
                    <Route path="/">
                        <TodoListPage></TodoListPage>
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
