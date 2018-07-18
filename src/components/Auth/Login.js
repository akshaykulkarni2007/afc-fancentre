import React, { Component } from "react"

// Material
import {
    withStyles,
    Card,
    CardContent,
    Grid,
    Typography,
    TextField,
    Button
} from "@material-ui/core"

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    card: {
        margin: "5rem auto"
    },
    sectionTitle: {
        color: "#000"
    },
    cardContent: {
        "padding-bottom": "3rem !important",
        "padding-top": "3rem"
    }
})

class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        })
	}
	loginAction = () => {
		console.log(this.state)
	}

    render() {
        const { classes } = this.props

        return (
            <div id="login">
                <Grid container spacing={0} justify="center">
                    <Grid item xs={12} md={6}>
                        <Card className={classes.card} raised={true}>
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    variant="display1"
                                    className={classes.sectionTitle}
                                >
                                    Login
                                </Typography>
                                <form
                                    className={classes.container}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="username"
                                        label="Username or Email"
                                        className="form-input"
                                        value={this.state.name}
                                        onChange={this.handleChange("username")}
                                        margin="normal"
                                    />
                                    <TextField
                                        id="password"
                                        label="Password"
                                        className="form-input"
                                        value={this.state.password}
                                        onChange={this.handleChange("password")}
                                        margin="normal"
                                    />

                                    <Button
                                        variant="contained"
                                        size="large"
										className="btn btn-primary"
										onClick={this.loginAction}
                                    >
                                        Login
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Login)
