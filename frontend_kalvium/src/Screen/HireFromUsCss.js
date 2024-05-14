import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
//import { height } from "@mui/system";
export const useStyles = makeStyles({
  flex: { display: "flex", flexDirection: 'column', alignItems: 'center' },
  mainContainer: {
    // display:'flex',
    paddingLeft: '20%',
    //background:'#ecf0f1',
    width: 'auto',
    height: '50vh',
    backgroundColor: '#F9EFDB',
    backgroundImage: "url(https://kalvium.com/wp-content/uploads/2023/04/Grids-Bg-full.svg)", padding: 20,
    position: 'relative',
    
  '@media (max-width:667px) and (min-width:375px)': {
    // margin: 'auto',
    // padding: 'auto',
    // width:'78%',
    // height:'50vh',
     //backgroundColor:'black',

    paddingLeft: '20%',
    //background:'#ecf0f1',
    width: '100%',
    height: '80vh',
   // backgroundColor: '#F9EFDB',
    backgroundImage: "url(https://kalvium.com/wp-content/uploads/2023/04/Grids-Bg-full.svg)", padding: 10,
    position: 'relative',
    // marginTop:"10%"
  },
  '@media (max-width:1024px) and (min-width:768px)': {
    // margin: 'auto',
    // padding: 'auto',
    // width:'78%',
    // height:'50vh',
     //backgroundColor:'black',

    paddingLeft: '20%',
    //background:'#ecf0f1',
    width: '100%',
    height: '55vh',
   // backgroundColor: '#F9EFDB',
    backgroundImage: "url(https://kalvium.com/wp-content/uploads/2023/04/Grids-Bg-full.svg)", padding: 10,
    position: 'relative',
    // marginTop:"10%"
  },
    
  }

  ,
  // Add additional styles or overrides for other components as needed







  hireContainer: {
    position: 'absolute', left: "45%",
    top: 90,
    fontSize: 40,
    fontWeight: 700,
    '@media (max-width:667px) and (min-width:375px)': {
      position: 'absolute', left: "20%",
      top: 95,
      fontSize: 40,
      fontWeight: 500,
     //backgroundColor:'yellow'
    },
    
  '@media (max-width:1024px) and (min-width:768px)': {
    position: 'absolute', left: "28%",
      top:160,
      fontSize: 55,
      fontWeight: 600,
      //backgroundColor:'yellow'
  }
  },
  hireText1: {
    position: 'absolute',
    left: "20%",
    top: 150,
    fontSize: 18,
    fontWeight: 500,
    '@media (max-width:667px) and (min-width:375px)': {
      position: 'absolute',
      left: "4%",
      top: "32%",
      fontSize: 18,
      fontWeight: 500,
     // backgroundColor:'yellow'
    },
    '@media (max-width:1024px) and (min-width:768px)': {
      position: 'absolute',
      left: "5%",
      top: "51%",
      fontSize: 24,
      fontWeight: 550,
     // backgroundColor:'yellow'
    }
  }
  ,
  hireText2: {
    position: 'absolute',
    left: "37%",
    top: "50%",
    fontSize: 18,
    fontWeight: 500
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      position: 'absolute',
      left: "4%",
      top: "56%",
      fontSize: 18,
      fontWeight: 500
     // backgroundColor:'yellow'
    },
    '@media (max-width:1024px) and (min-width:768px)': {
      position: 'absolute',
      left: "5%",
      top: "65%",
      fontSize: 24,
      fontWeight: 550
     // backgroundColor:'yellow'
    }
  }
  , buttonContainer: 
  { 
    position: 'absolute',
   left: "47%", 
  top: 280,
   fontSize: 22,
   fontWeight: 500 ,
   '@media (max-width:667px) and (min-width:375px)': {
    position: 'absolute',
   left: "10%", 
  top: 400,
   fontSize: 22,
   fontWeight: 500,
   // backgroundColor:'yellow',
    display:'flex',alignItems:'çenter',justifyContent:'center'
    ,width:"80%"
   },
   '@media (max-width:1024px) and (min-width:768px)': {
    position: 'absolute',
    left: "7%", 
   top: 460,
    fontSize: 30,
    fontWeight: 600,width:"80%",
      //backgroundColor:'yellow',
      display:'flex',alignItems:'çenter',justifyContent:'center'
  }
},
  button: {
    fontSize: '16px',
    letterSpacing: '2px',
    textDecoration: "none",
    textTransform: 'uppercase',
    color: '#000',
    cursor: "pointer",
    border: "3px solid",
    padding: "0.25em 0.5em",
    boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
    position: "relative",
    userSelect: "none",
    webkitUserSelect: "none",
    touchAction: "manipulation", height: 50, backgroundColor: '#453C67'
    ,
    '@media (max-width:1024px) and (min-width:768px)': {
      width:"80%",
        
    },
    '@media (max-width:667px) and (min-width:375px)': {
      width:"80%",
     }
  },
  industrySkillContainer:
  {
    background: '#fff',
    width: '100%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width:667px) and (min-width:375px)': {
      background: '#fff',
      width: '100%',
      height: '140vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundColor:'yellow'
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      background: '#fff',
      width: '100%',
      height: '140vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
       backgroundColor:'#fff'//red
    }
  },

  industrySkillText:
  {
    background: '#fff',
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40, fontWeight: 700,
    alignItems: 'center',
    marginTop: 20
    ,
     '@media (max-width:667px) and (min-width:375px)': {
      background: '#fff',//yellow
    width: '70%',
    height: '15%',
    display: 'flex',
   // justifyContent: 'center',
    fontSize: 35, fontWeight: 700,
     alignItems: 'center',
    marginTop: 20,//marginLeft:"30%"
      },
      '@media (max-width:1025px) and (min-width:767px)': {
        background: '#fff',//yellow
    width: '80%',
    height: '10%',
    display: 'flex',
   // justifyContent: 'center',
    fontSize: 37, fontWeight: 700,
     alignItems: 'center',
    marginTop: 20,//marginLeft:"30%"
      }
  },
  industrySkillGridDiv:
  {
     marginTop: 80, display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor:'#fff',
     '@media (max-width:667px) and (min-width:375px)': {
      marginTop: 30,
      height:'110vh'
      ,
       display: 'flex',
       flexDirection: 'column',
       //alignItems: 'center',
        backgroundColor:'#fff'//black
      },
      '@media (max-width:1025px) and (min-width:767px)': {
        marginTop: 30,
        height:'110vh'
        ,
         display: 'flex',
         flexDirection: 'column',
         //alignItems: 'center',
          backgroundColor:'#fff'//black
      }
   },
  industrySkillImageGrid:
  {
    width: '40%',
     height: '40vh',
     backgroundColor: '#fff' ,marginRightright:"10%",marginTop:"-1%",
     '@media (max-width:667px) and (min-width:375px)': {
      width: '80%',
     height: '40vh',
    //  marginRightright:"10%",
     marginTop:"-1%"
     ,backgroundColor:'#fff',//yellow
     display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      },
      '@media (max-width:1025px) and (min-width:767px)': {
        width: '85%',
     height: '50vh',
    //  marginRightright:"10%",
     marginTop:"-1%"
     ,backgroundColor:'#fff',//yellow
     display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      }
    

  }
  ,
  
  industrySkillImageContainer:
  {
    width: '90%',
    height: '70%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    '@media (max-width:667px) and (min-width:375px)': {
      width: '95%',
    height: '90%',
    backgroundColor: '#fff',//blue
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,marginLeft:"0%"
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      width: '95%',
    height: '90%',
    backgroundColor: '#fff',//blue
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,marginLeft:"0%"
    }


    //  industrySkillImage:
    //  { 
    //   width: '50%',
    //   height: '80%', 
    //  backgroundColor: '#fff'
    //  }
  },
  industrySkillTextGrid:
  {
    width:"100%",
  height:"50vh",
  display:'flex',
  flexDirection:'column',
  backgroundColor:"#fff",
  justifyContent:"center",
  marginTop:"-10%"
  ,'@media (max-width:667px) and (min-width:375px)': {
    width:"78%",
    height:"60vh",
    display:'flex',
    flexDirection:'column',
    backgroundColor:"#fff",//green
    marginLeft:"0%",marginTop:"5%"
    //justifyContent:"center",
   },
   '@media (max-width:1025px) and (min-width:767px)': {
    width:"85%",
    height:"60vh",
    display:'flex',
    flexDirection:'column',
    backgroundColor:"#fff",//green
    marginLeft:"0%",marginTop:"5%"
    //justifyContent:"center",
  }
}
  ,
  industrySkillFullstack:
  {
    // backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 70,
    size: 50,
    '@media (max-width:667px) and (min-width:375px)': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 5,
      size: 50,
     }
     ,
   '@media (max-width:1025px) and (min-width:767px)': {
    display: 'flex',
      alignItems: 'center',
      marginTop: 0,
      size: 60,
  }
  },
  industrySkillProfessional:
  {
    //backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    size: 50,
    '@media (max-width:667px) and (min-width:375px)': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 5,
      size: 50,
     },
  },
  industrySkillProf:
  {
    //backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    size: 50,
    '@media (max-width:667px) and (min-width:375px)': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 5,
      size: 50,
     },
  },
  industrySkillProductive:
  {
    //backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginRightright: 20,
    '@media (max-width:667px) and (min-width:375px)': {
      display: 'flex',
      alignItems: 'center',
      marginTop: 5,
      size: 50,
     },
  },
  industryText:
  {
    fontSize: 18,
    fontWeight: 500,
    '@media (max-width:1025px) and (min-width:767px)': {
      fontSize: 28,
      fontWeight: 500
   }
  }







  ,
  hirringManagerContainer:
  {
    background: '#f7f1e3',
    width: '100%',
    height: '150vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width:667px) and (min-width:375px)': {
      background: '#f7f1e3',
      width: '100%',
      height: '150vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundColor:'yellow'
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      
      width: '100%',
      height: '150vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
       backgroundColor:'#f7f1e3'//grey
    }
  },

  hirringManagerTextContainer:
  {
    background: '#f7f1e3',
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40, fontWeight: 700,
    alignItems: 'center',
    marginTop: 20
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      background: '#f7f1e3',//yellow
      width: '90%',
      height: '13%',
      // display: 'flex',
      // justifyContent: 'center',alignItems:'center',
      fontSize: 35, fontWeight: 700,
       alignItems: 'center',
      marginTop: 20,//marginLeft:"30%"
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      background: '#f7f1e3',//yellow
      width: '90%',
      height: '13%',
      // display: 'flex',
      // justifyContent: 'center',alignItems:'center',
      fontSize: 35, fontWeight: 700,
       alignItems: 'center',
      marginTop: 20,//marginLeft:"30%"
    }
  },
  hirringSkillGridDiv:
  {
     marginTop: 30, display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor:'#f7f1e3',
     '@media (max-width:667px) and (min-width:375px)': {
      marginTop: 30,
      height:'120vh'
      ,
       display: 'flex',
       flexDirection: 'column',
       //alignItems: 'center',
        backgroundColor:'#f7f1e3'//black
      },
      '@media (max-width:1025px) and (min-width:767px)': {
        marginTop: 30,
      height:'120vh'
      ,
       display: 'flex',
       flexDirection: 'column',
       //alignItems: 'center',
        backgroundColor:'#f7f1e3'//black
      }
   },
  hirringSkillImageGrid:
  {
    width: '40%',
     height: '50vh',
     backgroundColor: '#f7f1e3' ,marginRightright:"10%",marginTop:"15%",
     '@media (max-width:667px) and (min-width:375px)': {
      width: '80%',
      height: '40vh',
     //  marginRightright:"10%",
      marginTop:"5%"
      ,backgroundColor:'#f7f1e3',//yellow
      display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
      },
      '@media (max-width:1025px) and (min-width:767px)': {
        width: '85%',
        height: '50vh',
       //  marginRightright:"10%",
        marginTop:"5%"
        ,backgroundColor:'#f7f1e3',//yellow
        display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
      }
    

  }
  ,
  
  hirringSkillImageContainer:
  {
    width: '90%',
    height: '70%',
    backgroundColor: '#f7f1e3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    '@media (max-width:667px) and (min-width:375px)': {
      width: '95%',
      height: '95%',
      backgroundColor: '#f7f1e3',//blue
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      padding: 20,marginLeft:"0%"
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      width: '95%',
      height: '95%',
      backgroundColor: '#f7f1e3',//blue
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      padding: 20,marginLeft:"0%"
    }



    //  hirringSkillImage:
    //  { 
    //   width: '50%',
    //   height: '80%', 
    //  backgroundColor: '#f7f1e3'
    //  }
  },
  hirringSkillTextGrid:
  {
    width:"100%",
  height:"50vh",
  display:'flex',
  flexDirection:'column',
  backgroundColor:"#f7f1e3",
  justifyContent:"center",
  marginTop:"10%",'@media (max-width:667px) and (min-width:375px)': {
    width:"78%",
    height:"90vh",
    display:'flex',
    flexDirection:'column',
    backgroundColor:"f7f1e3",//green
    marginLeft:"0%",marginTop:"5%"
   },
   '@media (max-width:1025px) and (min-width:767px)': {
    width:"78%",
    height:"60vh",
    display:'flex',
    flexDirection:'column',
    backgroundColor:"#f7f1e3",//green
    marginLeft:"0%",marginTop:"5%"
  }
}
  ,
  hirringSkillFullstack:
  {
    // backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: -10,
    size: 50
  },
  hirringSkillProfessional:
  {
    //backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    size: 50
  },
  hirringSkillProf:
  {
    //backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    size: 50
  },
  hirringSkillProductive:
  {
    //backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
    marginRightright: 20
  },
  hirringText:
  {
    fontSize: 18,
    fontWeight: 500,
    '@media (max-width:1025px) and (min-width:767px)': {
      fontSize: 28,
      fontWeight: 500
   }
  }
  ,
  // hirringManagerContainer: {
  //   background: '#f7f1e3',
  //   width: 'auto',
  //   height: '80vh',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center'
  // },
  // hirringManagerTextContainer:
  // {
  //   background: '#f7f1e3',
  //   width: '100%',
  //   height: '20%',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   fontSize: 40,
  //   fontWeight: 700,
  //   alignItems: 'center',
  //   marginTop: 20
  // },
  // hirringManagerText:
  // {
  //   fontSize: 18,
  //   fontWeight: 500
  // },
  // hirringManagerImageContainer:
  // {
  //   width: '15%',
  //   height: '50vh',
  //   backgroundColor: '#f7f1e3',
  //   display: 'flex',
  //   justifyContent: 'center'
  // },

  OurHirringContainer:
  {
    background: '#ffcccc',
    width: 'auto',
    height: '150vh',
    display: 'flex',
    flexDirection: 'column',
     alignItems: 'center',
    
    '@media (max-width:667px) and (min-width:375px)': {
      background: '#ffcccc',
    width: 'auto',
    height: '300vh',
    //display: 'flex',
    //flexDirection: 'column',
    //alignItems: 'center',
    
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      background: '#ffcccc',
    width: 'auto',
    height: '250vh',
    //display: 'flex',
    //flexDirection: 'column',
    //alignItems: 'center',
    }
  },
  OurHirringTextContainer:
  {
    background: '#ffcccc',
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 700,
    alignItems: 'center',
    marginTop: 20,
    '@media (max-width:667px) and (min-width:375px)': {
      background: '#ffcccc',//yellow
      width: '90%',
      height: '6%',
      // display: 'flex',
      // justifyContent: 'center',alignItems:'center',
      fontSize: 35, fontWeight: 700,
       alignItems: 'center',
      marginTop: 20,//marginLeft:"30%"
    
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      background: '#ffcccc',//yellow
      width: '90%',
      height: '4%',
      // display: 'flex',
      // justifyContent: 'center',alignItems:'center',
      fontSize: 44, fontWeight: 700,
       alignItems: 'center',
      marginTop: 20,//marginLeft:"30%"
    }
  },
  OurHirringInternshipContainer:
  {
    background: '#f8c291',//f8c291
    width: '95%',
    height: '15%',
    fontSize: 40,
    fontWeight: 700,
    marginTop: 20,
    border: '5px solid #a4b0be',
    display: "flex",
    justifyContent: 'space-between',
    '@media (max-width:667px) and (min-width:375px)': {
      background: '#f8c291',//blue
    width: '90%',
    height: '25%',
    fontSize: 38,
    fontWeight: 600,
    marginTop: 20,
    border: '5px solid #a4b0be',
    display: "grid",
    marginLeft:"2%",
    // justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(1, 1fr)',
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      background: 'f8c291',//   blue
    width: '90%',
    height: '25%',
    fontSize: 40,
    fontWeight: 650,
    marginTop: 20,
    border: '5px solid #a4b0be',
    display: "grid",
    marginLeft:"2%",
    // justifyContent: 'space-between',
    gridTemplateColumns: 'repeat(1, 1fr)',
    }
  },
  OurHirringFlex:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',justifyContent:"center",
    backgroundColor: '#F5E8DD',//F5E8DD
    width: "50%"
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',justifyContent:"center",
    backgroundColor: '#F5E8DD',// red
    width: "100%",
    height:"43%"
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',justifyContent:"center",
    backgroundColor: 'F5E8DD',//   red
    width: "100%",
    height:"30%"
    }
  },

  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    //gap: "-8%", // You can use Material-UI spacing values
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',//justifyContent:'space-around',
    backgroundColor: '#F5E8DD'
    , width: '60%',
    '@media (max-width:667px) and (min-width:375px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      //gap: "-8%", // You can use Material-UI spacing values
      // display: 'flex',
      // flexDirection: 'row',
      // alignItems: 'center',//justifyContent:'space-around',
      backgroundColor: "#F5E8DD"// yellow
      , width: '100%',
      height:"190.7%",
      marginTop:"-52.4%"
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      //gap: "-8%", // You can use Material-UI spacing values
      // display: 'flex',
      // flexDirection: 'row',
      // alignItems: 'center',//justifyContent:'space-around',
      backgroundColor: "#F5E8DD"//  yellow
      , width: '100%',
      height:"190%",
      marginTop:"-30%"
    }
  },

  OurHirringImage1:
  {
    border: '5px solid #a4b0be',
    width: "60%",
    height: "44%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: "10%",marginTop:"25%"
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      border: '5px solid #a4b0be',
    width: "80%",
    height: "54%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: "10%",//marginTop:"11%"
     },
     '@media (max-width:1025px) and (min-width:767px)': {
      border: '5px solid #a4b0be',
      width: "80%",
      height: "64%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 40,
      marginRight: "5%",marginTop:"11%"
    }
  },
  OurHirringImage2:
  {
    border: '5px solid #a4b0be',
    width: "60%",
    height: "44%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "-5%",marginTop:"25%"
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      width: "80%",
      height: "54%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "8%",//marginTop:"11%"
     }
     ,
     '@media (max-width:1025px) and (min-width:767px)': {
      width: "80%",
      height: "64%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "5%",marginTop:"11%"
    }
  }
  ,OurHirringImage3:
  {
    border: '5px solid #a4b0be',
    width: "60%",
    height: "44%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "-20%",marginTop:"25%"
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      border: '5px solid #a4b0be',
      width: "80%",
      height: "70%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15,
      marginRight: "10%",marginTop:"-6%"
     }
     ,
     '@media (max-width:1025px) and (min-width:767px)': {
      border: '5px solid #a4b0be',
      width: "80%",
      height: "74%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 40,
      marginRight: "5%",marginTop:"-6%"
    }
  },
  OurHirringImage4:
  {
    border: '5px solid #a4b0be',
    width: "60%",
    height: "44%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "-37%",marginTop:"25%"
    ,
    '@media (max-width:667px) and (min-width:375px)': {
      width: "80%",
      height: "70%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "8%",marginTop:"-6%"
     }
       ,
     '@media (max-width:1025px) and (min-width:767px)': {
      width: "80%",
      height: "74%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: "5%",marginTop:"-6%"
    }
  },
  
  // gridItem: {
  //   // padding: theme.spacing(2),
  //   border: '1px solid #ccc',
  //   height: "10%",
  //   width: "20%"
  //   // Add additional styling for grid items
  // },

  gridCompany: {
    // display: 'grid',
    // gridTemplateColumns: 'repeat(4, 1fr)',
    // gap: "16px", // You can use Material-UI spacing values
    display: 'flex', flexDirection: 'column', alignItems: 'center',//justifyContent:'space-around',
    // backgroundColor:'#F5E8DD',
    width: '100%',
    height: "50%", marginTop: 20,
    backgroundColor: '#ffcccc',
    
    '@media (max-width:667px) and (min-width:375px)': {
   display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: "16px", // You can use Material-UI spacing values
    //display: 'flex', flexDirection: 'column', alignItems: 'center',//justifyContent:'space-around',
    // backgroundColor:'#F5E8DD',
    width: '95%',
    height: "50%", marginTop: 20,
    backgroundColor: '#ffcccc',//  red
     }
     ,
     '@media (max-width:1025px) and (min-width:767px)': {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: "16px", // You can use Material-UI spacing values
      //display: 'flex', flexDirection: 'column', alignItems: 'center',//justifyContent:'space-around',
      // backgroundColor:'#F5E8DD',
      width: '95%',
      height: "80%", marginTop: 30,
      backgroundColor: '#ffcccc',//  red
    }
  },

  OurHirringCompanyContainer:
  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#ffcccc',
    width: "90%",
    height: "40"
    ,
    
    '@media (max-width:667px) and (min-width:375px)': {
      // display: 'flex',
      // flexDirection: 'row',
      // alignItems: 'center',
      display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: "16px",
      marginTop: "1%",
      backgroundColor: '#ffcccc',
      width: "100%",
      height: "40"
      ,
     }
     ,
     '@media (max-width:1025px) and (min-width:767px)': {
      // display: 'flex',
      // flexDirection: 'row',
      // alignItems: 'center',
      display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: "20px",
      marginTop: "17%",
      backgroundColor: '#ffcccc',
      width: "100%",
      height: "100%"
      ,
    }
  },

  OurHirringCompanyImage1:
  {
    border: '5px solid #a4b0be',
    width: "20%",
    height: "80%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35
    ,
    
    '@media (max-width:667px) and (min-width:375px)': {
      border: '5px solid #a4b0be',
      width: "90%",
      height: "90%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"7%"
    
     }
     ,
     '@media (max-width:1025px) and (min-width:767px)': {
      border: '5px solid #a4b0be',
      width: "90%",
      height: "75%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:"7%",
//marginTop:"-10%"
      
    }
  },
  OurHirringCompanyImage2:
  {
    border: '5px solid #a4b0be',
    width: "20%",
    height: "80%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30
    ,
    
    '@media (max-width:667px) and (min-width:375px)': {
      border: '5px solid #a4b0be',
      width: "90%",
      height: "90%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:"0%"
      
     }
     ,
     '@media (max-width:1025px) and (min-width:767px)': {
      border: '5px solid #a4b0be',
      width: "90%",
      height: "75%",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:"3%"
      ,
    }
  }, CompanybuttonContainer: 
  { 
   
  
   fontSize: 22,
   fontWeight: 500 ,width:"80%",marginLeft:"20%",marginTop:"-5%",
   '@media (max-width:667px) and (min-width:375px)': {
   display:'flex',//375  667 ,768  1024
   justifyContent:'center',
   fontSize: 22,
   fontWeight: 500,
     backgroundColor:'#ffcccc',width:"100%",marginLeft:"-4%",
     marginTop:"44%"
   }
   ,
   '@media (max-width:1025px) and (min-width:767px)': {
    display:'flex',//375  667 ,768  1024
   justifyContent:'center',
   fontSize: 22,
   fontWeight: 500,
     backgroundColor:'#ffcccc',width:"100%",marginLeft:"-4%",
     marginTop:"14%",marginBottom:'10%'
    ,
  }
},
CompanyButton: {
  fontSize: '16px',
  letterSpacing: '2px',
  textDecoration: "none",
  textTransform: 'uppercase',
  color: '#000',
  cursor: "pointer",
  border: "3px solid",
  padding: "0.25em 0.5em",
  boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px",
  position: "relative",
  userSelect: "none",
  webkitUserSelect: "none",
  touchAction: "manipulation", height: 50, backgroundColor: '#453C67',width:"80%",
},




})