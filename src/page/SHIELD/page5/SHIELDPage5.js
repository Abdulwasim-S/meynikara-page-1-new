import React from "react";
import "./GLIMPage5.css";

const SHIELDPage5 = () => {
  return (
    <div className="GLIMPage5">
      <div className="gmc">
        <div className="gmc-1">
          <p className="g5-h px-5 bg-dark">INTRODUCTION</p>
          <p className="g5-p">
            In response to the pressing need for heightened workplace safety,
            one of the leading Oil & Gas Corporation implemented a comprehensive
            safety program integrating advanced technologies such as VR and AI.
            <br />
            <br />
            This case study delves into the successful application of VR and AI
            detection algorithms to monitor employee behaviour, focusing on
            Personal Protective Equipment (PPE) compliance and restricted access
            areas within the workplace.
          </p>
        </div>
        <p className="g5-c"></p>
        <div className="gmc-1">
          <p className="g5-h bg-senju">CHALLENGE</p>
          <p className="g5-p">
            The company faced challenges related to ensuring consistent
            adherence to safety protocols among its workforce. Instances of
            improper PPE usage and unauthorised entry into hazardous areas on
            the job floor raised concerns about employee well-being and
            potential risks to operations.
          </p>
        </div>
        <p className="g5-c"></p>
        <div className="gmc-2">
          <p className="g5-h bg-namikaze">SOLUTION</p>
          <p className="g5-p">
            To address these challenges, the company partnered with us
            specialising in VR and AI-based safety solutions. The implementation
            involved two step processes : One was deploying training solutions
            to empower the workers about the safety tour of the factory , PPE
            kits and other safety protocols.
            <br />
            <br />
            The other was using our proprietary AI detection algorithms
            strategically placed across the workplace. These algorithms were
            designed to monitor and analyse employee actions in real-time.
          </p>
        </div>
        <p className="g5-c"></p>
        <div className="gmc-2">
          <p className="g5-h px-5 bg-dark">IMPLEMENTATION</p>
          <p className="g5-p">
            PPE Compliance Monitoring: The AI algorithms were configured to
            detect and alert supervisors when employees failed to comply with
            PPE standards. This included instances of incorrect PPE usage or, in
            some cases, the absence of necessary protective gear.
            <br />
            <br />
            Access Control for Hazardous Areas: Restricted zones within the job
            floor were equipped with AI-powered cameras linked to the detection
            algorithms. Unauthorised access triggered immediate alerts, allowing
            supervisors to intervene promptly.
          </p>
        </div>
        <div className="round-box py-3">
          <div className="m-r bg-namikaze">
            <p className="m-i"></p>
          </div>
          <div className="m-r bg-senju hidden">
            <p className="m-i"></p>
          </div>
          <div className="m-r bg-senju">
            <p className="m-i"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHIELDPage5;
