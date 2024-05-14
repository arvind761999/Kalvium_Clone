import React from "react";
import LPU from '../assets/leftbg_files/LPU-Jalandhar.png'
import MANIPAL from '../assets/leftbg_files/Manipal-University-Jaipur.png'
import RV from '../assets/leftbg_files/RV-University-Bengaluru.png'
import JECRC from '../assets/leftbg_files/JECRC-University-Jaipur.png'
import MIT from '../assets/leftbg_files/MIT-ADT-University-Pune.png'
import VELS from '../assets/leftbg_files/VISTAS(Vels)-Chennai.png'
import CHITKARA from '../assets/leftbg_files/Chitkara-University-baddi.png'
import APOLLO from '../assets/leftbg_files/The-Apollo-University-Chittoor.png'

const LeftSide = () => {
  return (
    <div className="an-left-container">
      <h2 className="h2">Get Started with Your Kalvium Journey</h2>
      <p className="text-xl ...">
        Register and Qualify the KQ (Kalviness Quotient) Assessment to pursue
        the Kalvium program at any of the <span>10+ leading universities</span> in India and
        abroad.
      </p>
      <div className="an-logos">
        <img src={LPU} alt="" title="Lovely Professional University, Jalandhar"/>
        <img src={MANIPAL} alt="" title="Manipal University, Jaipur"/>
        <img src={RV} alt="" title="RV University"/>
        <img src={JECRC} alt="" title="JECRC University, Bangalore"/>
        <img src={MIT} alt="" title="MIT ADT University, Pune"/>
        <img src={VELS} alt="" title="Vels Institute of Science, Technology & Advanced Studies, Chennai"/>
        <img src={CHITKARA} alt="" title="Chitkara University, Baddi"/>
        <img src={APOLLO} alt="" title="Apollo University, Chittoor"/>
      </div>
    </div>
  );
};

export default LeftSide;
