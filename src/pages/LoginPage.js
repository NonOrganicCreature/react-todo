import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { ApiInstance } from "../api";
import { useInput } from "../hooks/input";
import { useSwitch } from "../hooks/switch";
import { useAuth } from "../hooks/auth";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormLabel-root.MuiInputLabel-root": {
            color: "#fff",
        },
        "& > .MuiFormControl-root.MuiTextField-root": {
            margin: theme.spacing(1),
            width: "25ch",
            color: theme.color,
        },
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiFormControlLabel-label": {
            color: "#fff",
        },
        "& .MuiFormControlLabel-root": {
            marginLeft: "10px",
        },
        "& input": {
            color: theme.colorText,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: theme.borderColorFocus,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: theme.borderColor,
            },
            "&:hover fieldset": {
                borderColor: theme.borderColor,
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.borderColorFocus,
            },
        },
        "&": {
            marginTop: "50vh",
            transform: "translateY(-50%)",
            display: "flex",
            flexFlow: "row nowrap",
        },
    },
}));

function LoginPage() {
    const classes = useStyles();
    const loginInput = useInput("");
    const passwordInput = useInput("");
    const typeSwitch = useSwitch(false);
    const [isAuthorized, doAuth] = useAuth();

    const doRegistration = async () => {
        try {
            await ApiInstance.post("/register", {
                login: loginInput.value,
                password: passwordInput.value,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const onAuthClick = async () => {
        doAuth(loginInput.value, passwordInput.value);
    };

    if (isAuthorized) {
        return <Redirect to="/" />;
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                    {...loginInput}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    {...passwordInput}
                />

                <FormControlLabel
                    control={
                        <Switch name="checkedRegistration" {...typeSwitch} />
                    }
                    label="Register"
                />
            </form>
            <Button
                onClick={typeSwitch.checked ? doRegistration : onAuthClick}
                variant="contained"
            >
                Go!
            </Button>
        </Grid>
    );
}

export { LoginPage };
