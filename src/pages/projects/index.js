import React from 'react';
import Layout from '@theme/Layout';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import useBaseUrl from "@docusaurus/useBaseUrl";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';

//pictures
import rulesPicture from '@site/static/projectImages/theRulesHaveChanged.jpg'
import UndergroundLivingPicture from '@site/static/projectImages/underGroundLiving.png'
import discordBot from '@site/static/projectImages/discordBot.jpg'
import botWebsite from '@site/static/projectImages/botWebsite.png'
import personalWebsite from '@site/static/projectImages/personalWebsite.png'
import valorantWebsite from '@site/static/projectImages/valorantWebsite.png'
import ghubScript from '@site/static/projectImages/ghubScript.png'

//css
import styles from '@site/src/css/projects.module.css'

//custom style for the Cards
const CardCustom = styled(Card)(() => ({
    width: 345,
    boxShadow: "-15px 0px #1d8971",
    color:"#26c2a0", //hides the underline on hover
    '&:hover':{
        backgroundColor: "black",
        scale: "95%"
    }
}));

export default function Projects() {
    return (
        <Layout title='Projects'>
            <h1 className='header'>My Projects</h1>
            <Grid container direction={"row"} justifyContent={"center"} rowSpacing={5} columnSpacing={{ xs: 1, sm: 20, md: 50 }}>
                {/*Black ops 3 mod*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/changeTheRules")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={rulesPicture}
                                alt="Change the Rules Logo"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>Change The Rules</h1>
                                <p>A gameplay mod for BlackOps III.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>

                {/*underground living datapack*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/undergroundLiving")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={UndergroundLivingPicture}
                                alt="Underground Living"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>Underground Living</h1>
                                <p>A datapack for minecraft which forces players to live underground.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>

                {/*themootbot*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/discordBot")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={discordBot}
                                alt="My Discord bot's logo"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>Discord Bot</h1>
                                <p>A personal Discord bot I made.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>

                {/*bot website*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/botWebsite")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={botWebsite}
                                alt="My Discord Bot Logo"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>Bot Website</h1>
                                <p>A website that I made for my Discord Bot.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>

                {/*this website*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/personalWebsite")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={personalWebsite}
                                alt="Personal Website Picture"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>My Personal Website</h1>
                                <p>My personal website that I made to show my personal projects that I have worked on.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>

                {/*Valorant Strat Site*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/valorantStratSite")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={valorantWebsite}
                                alt="Valorant Strat Roulette Website Picture"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>Valorant Strat Roulette Website</h1>
                                <p>A simple strat roulette website for the game Valorant.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>

                {/*Logitech gHub profile adder*/}
                <Grid>
                    <CardCustom>
                        <CardActionArea href={useBaseUrl("projects/ghubGamePass")} className={styles.projectCard}>
                            <CardMedia
                                sx={{ height: 300 }}
                                image={ghubScript}
                                alt="Logitech ghub Script Image"
                            />
                            <CardContent className={styles.projectCardText}>
                                <h1>gHub Gamepass Profile Creator</h1>
                                <p>A script that helps add Xbox Gamepass games to Logitech gHub.</p>
                                <h3 className={styles.projectCardButton}>More Info</h3>
                            </CardContent>
                        </CardActionArea>
                    </CardCustom>
                </Grid>
            </Grid>
            <br/>
        </Layout >
    );
}