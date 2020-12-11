import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import { HowToVoteRounded } from '@material-ui/icons';



const styles = ({
    avatar: {
        width: 200,
        height: 250,
        marginTop: 40,
    },

    media: {
        height: 350,
    },
    card: {
        marginTop: 0,
        position: 'fixed',
        top: 0,
        minWidth: 400,
        maxWidth: 400,
        minHeight: window.innerHeight,
        backgroundColor: 'silver',
    },
    infoCard: {
        marginTop: 20,
    },
    cardTitle: {
        backgroundColor: 'orange',
    },
    iconButton: {
        color: 'black',
    },
    goToButtons: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
            backgroundColor: 'yellow',
            color: 'green',
        },
        heading: {
            color: 'black',
        },
    }
})

    class Home extends Component {
        // TODO: Create the HOME page.
        state = {
            height: 0
        }

    componentDidMount() {
    this.setState({ height: window.innerHeight })
}

goToFlopDoodleGitHub = () => {
    window.open('https://github.com/kvisness/Flop-Doodle')//this is where git hub repository goes
}
goToWeeklyTaskList = () => {
    window.open('https://weekly-task-list-1.herokuapp.com/')
}
goToFraserLtd = () => {
    window.open('https://github.com/Fraser-Ltd/fraser-work-orders');
}
goToGitHub = () => {
    window.open('https://github.com/kvisness');
    //this is where git hub repository goes 
}
goToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/krisvisness/')//this is where git hub repository goes
}

goToEmail = () => {
    window.location.href = "mailto:krisvisness@gmail.com?subject=More Info Requested%20From%20Portfolio";
}

render() {
    const { classes } = this.props
    return (

        <Grid container>
            <Grid item xs={3}>
                <Card className={classes.card} >
                    <Grid container justify='center'>
                        <Avatar className={classes.avatar} alt="Headshot" src="ProfilePic.png" />
                    </Grid>
                    <Typography variant='h3' className={classes.heading}> Kris </Typography>
                    <Typography variant='h3' className={classes.heading}> Visness </Typography><br></br>
                    <Typography variant='h5' className={classes.heading}> Fullstack Developer </Typography><br></br><br></br>
                    <Typography className={classes.iconButton}>Welcome to my website!</Typography>
                    <Typography variant='body1' className={classes.iconButton}>Here are some of the projects that I created.
                    Excited to join the tech world when I graduate from Emerging Digital Academy in December of 2020.
                        I am ready to take on new challenges and help others become successful!</Typography><br></br><br></br>
                    <Typography className={classes.iconButton}>Please contact me here: </Typography>
                    <IconButton onClick={this.goToLinkedIn} className={classes.iconButton}><LinkedInIcon /></IconButton>
                    <IconButton onClick={this.goToGitHub} className={classes.iconButton}><GitHubIcon /></IconButton>
                    <IconButton onClick={this.goToEmail} className={classes.iconButton}><ContactMailIcon /></IconButton>
                </Card>
            </Grid >
            <Grid item xs={9}>
                <Grid container justify='space-evenly' alignItems='center'>
                    <Grid item xs={5}>
                        <Card className={classes.infoCard}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image="Flop-Doodle.jpeg"//project pic
                                style={{ height: '100%', width: '100%' }}
                            />
                            <Typography className={classes.cardTitle}>Flop-Doodle (solo project)</Typography>
                            <CardActionArea>
                                <Button className={classes.goToButtons} size='medium' color='primary' variant='outlined'
                                    onClick={this.goToFlopDoodleGitHub}>Go to Flop-Doodle on GitHub</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* <Grid item xs={10}>
                            <Grid container justify='space-evenly' alignItems='center'> */}
                    <Grid item xs={5}>
                        <Card className={classes.infoCard}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image="Weekly-Task-List.jpeg"//project pic
                                style={{ height: '100%', width: '100%' }}
                            />
                            <Typography className={classes.cardTitle}>Weekly-Task-List (solo project)</Typography>
                            <CardActionArea>
                                <Button className={classes.goToButtons} size='medium' color='primary' variant='outlined'
                                    onClick={this.goToWeeklyTaskList}>Go to Weekly-Task-List on Heroku</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.infoCard}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image="Fraser-LTD-MMS.png"//project pic
                                style={{ height: '100%', width: '100%' }}
                            />
                            <Typography className={classes.cardTitle}>Fraser LTD (group project)</Typography>
                            <CardActionArea>
                                <Button className={classes.goToButtons} size='medium' color='primary' variant='outlined'
                                    onClick={this.goToGitHub}>Go to Fraser LTD on GitHub</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Card className={classes.infoCard}>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image="ProfilePic.png"//project pic
                                style={{ width: '47%', marginLeft: '26.5%', marginTop: '1%' }}
                            />
                            <Typography className={classes.cardTitle}>Fraser LTD (group project)</Typography>
                            <CardActionArea>
                                <Button className={classes.goToButtons} size='medium' color='primary' variant='outlined'
                                    onClick={this.goToGitHub}>Go to GitHub Portfolio</Button>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* </Grid>
                        </Grid> */}
                </Grid>
            </Grid>
        </Grid>)

    //   < Card className={classes.root} >
    // <CardActionArea>
    //     <CardMedia
    //         component="img"
    //         alt="Contemplative Reptile"
    //         height="140"
    //         image="/static/images/cards/contemplative-reptile.jpg"
    //         title="Contemplative Reptile"
    //     />

}
}

export default withStyles(styles)(Home);