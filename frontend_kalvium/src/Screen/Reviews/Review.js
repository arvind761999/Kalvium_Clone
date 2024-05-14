import { useEffect, useState } from "react";

import { Button, AppBar, Box, CssBaseline, IconButton, Toolbar, Typography, Menu, MenuItem, div, Grid, } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./ReviewsCss";
export default function Reviews(props) {
    const classes = useStyles()
    const theme = useTheme();
    const navigate=useNavigate()

    const matches = useMediaQuery(theme.breakpoints.up('md'))

const handleSubmit=()=>{
    Swal.fire({
       // title: "Sweet!",
        text: "Everything you need to know about kalvium's advanced computer science Engineering program",//Modal with a custom image.
        //imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",

      });
      navigate('/login')
      
}


    return (
        <div style={{ height: "100%" }}>

            <div className={classes.mainContainer}>
                <div className={classes.hireContainer}>
                   <div>Students</div> <div><img src="/assets/love.png" style={{ width: '100%', height: '100%',backgroundColor:'#DFF5FF' }} /></div>    <div>kalvium</div> 
                </div>
                <div className={classes.hireText1}>
                Hear it from our Kalvium Engineers
                </div>
                
                
            </div>









            {/* <div className={classes.industrySkillContainer}>

                <div className={classes.industrySkillText}>
                    Students With Industry Skills
                </div>

                <div className={classes.industrySkillGridDiv} >
                    <div className={classes.industrySkillImageGrid}>
                        <div className={classes.industrySkillImageContainer}>
                            <img src="/assets/computer.png" alt="Logo" style={{ width: '100%', height: '110%', backgroundColor: '#fff' }} />
                        </div>
                    </div>

                    <div className={classes.industrySkillTextGrid}>
                        <div>
                            <div className={classes.industrySkillFullstack}>
                                <span style={{fontSize: 40, }}
                                class="material-symbols-outlined" >
                                    stacks
                                </span>
                                <span className={classes.industryText} >
                                    Full-stack: Trained on backend, frontend, full-stack web development.
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={classes.industrySkillProfessional}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined">
                                    person
                                </span>
                                <span className={classes.industryText} >
                                    Professional: Skills taught in a professional open-office environment from Day 1.
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={classes.industrySkillProf}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined" >
                                    stacks
                                </span>
                                <span className={classes.industryText} >
                                    Proof: A large open-source project on github for you to verify skills.
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className={classes.industrySkillProductive}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined">
                                    lightbulb
                                </span>
                                <span className={classes.industryText} >
                                    Productive on Day 1: Worked on project using industry-standard git-flow, and SDLC, including code-reviews and deployments.
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>











            <div className={classes.hirringManagerContainer}>

                <div className={classes.hirringManagerTextContainer}>
                    Designed For Hiring-Managers
                </div>

                <div className={classes.hirringSkillGridDiv} >


                    <div className={classes.hirringSkillTextGrid}>
                        <div>
                            <div className={classes.hirringSkillFullstack}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined" >
                                    stacks
                                </span>
                                <span className={classes.hirringText} >
                                    Full-stack: Trained on backend, frontend, full-stack web development.
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={classes.hirringSkillProfessional}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined">
                                    person
                                </span>
                                <span className={classes.hirringText} >
                                    Professional: Skills taught in a professional open-office environment from Day 1.
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className={classes.hirringSkillProf}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined" >
                                    stacks
                                </span>
                                <span className={classes.hirringText} >
                                    Proof: A large open-source project on github for you to verify skills.
                                </span>
                            </div>
                        </div>
                        <div >
                            <div className={classes.hirringSkillProductive}>
                                <span style={{fontSize: 40, }}class="material-symbols-outlined">
                                    lightbulb
                                </span>
                                <span className={classes.hirringText} >
                                    Productive on Day 1: Worked on project using industry-standard git-flow, and SDLC, including code-reviews and deployments.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={classes.hirringSkillImageGrid}>
                        <div className={classes.hirringSkillImageContainer}>
                            <img src="/assets/search.png" alt="Logo" style={{ width: '100%', height: '110%', backgroundColor: '#f7f1e3' }} />
                        </div>
                    </div>
                </div>

            </div> */}






            {/* <div className={classes.hirringManagerContainer}>


                <div className={classes.hirringManagerTextContainer}>
                    Designed For Hiring-Managers
                </div>

                <Grid xs={12} container spacing={2}  >

                    <Grid item xs={7} spacing={2} style={{ marginLeft: 70, }}>
                        <Grid xs={12}>
                            <div className={classes.industrySkillFullstack}>
                                <span class="material-symbols-outlined" >
                                    stacks
                                </span>
                                <span className={classes.hirringManagerText} >
                                    Full-stack: Trained on backend, frontend, full-stack web development.
                                </span>
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <div className={classes.industrySkillProfessional}>
                                <span class="material-symbols-outlined">
                                    person
                                </span>
                                <span className={classes.hirringManagerText} >
                                    Professional: Skills taught in a professional open-office environment from Day 1.
                                </span>
                            </div>
                        </Grid>
                        <Grid xs={12}>
                            <div className={classes.industrySkillProf}>
                                <span class="material-symbols-outlined" >
                                    stacks
                                </span>
                                <span className={classes.hirringManagerText} >
                                    Proof: A large open-source project on github for you to verify skills.
                                </span>
                            </div>
                        </Grid>
                        <Grid xs={12} >
                            <div className={classes.industrySkillProductive}>
                                <span class="material-symbols-outlined">
                                    lightbulb
                                </span>
                                <span className={classes.hirringManagerText} >
                                    Productive on Day 1: Worked on project using industry-standard git-flow, and SDLC, including code-reviews and deployments.
                                </span>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={4} className={classes.hirringManagerImageContainer}>
                        <div >
                            <img src="/assets/search.png" alt="Logo" style={{ width: '90%', height: '100%', backgroundColor: '#f7f1e3' }} />
                        </div>
                    </Grid>

                </Grid>


            </div> */}











            {/* <div className={classes.OurHirringContainer}>


                <div className={classes.OurHirringTextContainer}>
                    Our Hiring Partners
                </div>


                <div className={classes.OurHirringInternshipContainer}> */}


                    {/* First child div with text */}
                    {/* <div className={classes.OurHirringFlex}>
                        <div style={{ marginLeft: 50 
                        }}> International Internships</div>


                    </div> */}

                    {/* Second child div with grid of four columns */}
                    {/* <div className={classes.gridContainer}>

                        <div className={classes.OurHirringImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringImage3}>
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringImage4} >
                            <img src="/assets/logo.png" />
                        </div>

                    </div>

                </div>


                <div className={classes.gridCompany}>
                    <div className={classes.OurHirringCompanyContainer}>
                        <div className={classes.OurHirringCompanyImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage1}>
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                         </div> */}
                        {/*<div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div> */}
                    {/* </div>


                    <div className={classes.OurHirringCompanyContainer}>
                        <div className={classes.OurHirringCompanyImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage1}>
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div> */}
                        {/* <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div> */}
                    {/* </div>


                    <div className={classes.OurHirringCompanyContainer}>
                        <div className={classes.OurHirringCompanyImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage1}>
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage1} >
                            <img src="/assets/logo.png" />
                        </div>
                        <div className={classes.OurHirringCompanyImage2}>
                            <img src="/assets/logo.png" />
                        </div> */}
                        {/* <div className={classes.OurHirringCompanyImage2} >
                            <img src="/assets/logo.png" />
                        </div> */}
                    {/* </div>

                </div>

                <div className={classes.CompanybuttonContainer}>
                    <button className={classes.CompanyButton} role="button">Lets Talk!</button>
                </div>

            </div> */}
        </div>


    )


}