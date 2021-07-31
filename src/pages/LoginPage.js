import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    const [state, setState] = React.useState({
        checkedRegistration: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

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
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                />

                <FormControlLabel
                    control={
                        <Switch
                            name="checkedRegistration"
                            onChange={handleChange}
                            checked={state.checkedRegistration}
                        />
                    }
                    label="Register"
                />
            </form>
        </Grid>
    );
}

export { LoginPage };
