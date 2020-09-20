 import React from "react";
import './FirstPostStyle.css'

const FirstPost = ()=>
    <div className={"first"}>
        <div className={"textPart"}>
            <h4 className={"title"}>
                Health Tourism Institute
            </h4>
            <h3 className={"h3first"}>
                Trip planning and consulting
            </h3>
        </div>

        <div className={"pic"}>
            <div className={"Services"}>
    <a href={"http://avicennamedtour.com/39459-Beauty-services"}>
        <img src={"http://avicennamedtour.com/Content/images/shortcutTab/008ff5c4-f07a-4708-b60b-4bd5508cf352.jpg"}
             alt={"Beauty Services"}/>
        <div><h4>Beauty Services</h4></div>
    </a>
</div>
            <div className={"Services"}>
            <a href={"http://avicennamedtour.com/39460-Medical-services"}>
                <img src={"http://avicennamedtour.com/Content/images/shortcutTab/1ee07304-0b2a-4a3b-b506-5c1677487d79.jpg"}
                     alt={"Cure Services"}/>
                <div><h4>Cure services</h4></div>
            </a>
</div>
             <div className={"Services"}>
            <a href={"http://avicennamedtour.com/zsfdds"}>
                <img src={"http://avicennamedtour.com/Content/images/shortcutTab/a15f8191-1d92-40bc-becc-7dea7d907e45.jpg"}
                     alt={"Health services"}/>
                <div><h4>Health service</h4></div>
            </a>
</div>
        </div>
        <span className={"buttons"}>
            <a href={"http://avicennamedtour.com/38214-Consultation-request"}>
                <span>Consultation request</span>
            </a>
            <a href={"http://avicennamedtour.com/38216-%D9%88%DB%8C%D8%AF%DB%8C%D9%88-%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7"}>
                <span>Video</span>
            </a>
            <a href={"http://avicennamedtour.com/39950-%D8%A7%D9%86%DB%8C%D9%85%DB%8C%D8%B4%D9%86"}>
                <span>Animation</span>
            </a>

        </span>
        <div className={"text"}> <p><strong><span>Avicenna Medtour, with a team of doctors, nurses, pharmacists and professional translators, in partnership with the best hospitals, beauty treatments clinics and high quality Iranian hotels commits itself to provide the best beauty and health services to health tourists.</span></strong></p>
        <p><span className={"SpText"}><strong><span>&nbsp;In our opinion, patient is not a customer, but a member of our family</span></strong></span></p>
        </div>


</div>



 export default FirstPost;
