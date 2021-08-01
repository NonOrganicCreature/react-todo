import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '10px'
    },
}));

function TodoListPage() {
    const classes = useStyles();
    
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.root}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    variant="contained"
                >
                    Add todo
                </Button>
            </Grid>
        </Grid>
    );
}

export { TodoListPage };
