import React from "react";
import './ThirdPostStyle.css'

const Post = ({imag,title,price,desc1,desc2,desc3,desc4,desc5,desc6,desc7,btn})=>{
    return <div className={"post"}>
        <div className={"headImg"}>
            <img src={imag}/>
        </div>
        <h3 className={"h3Third"}>{title}</h3>
        <div className={"cost"}>
            <span>{price}</span>
        </div>
        <div className={"list"}>
            <ul>
                <li>{desc1}</li>
                <li>{desc2}</li>
                <li>{desc3}</li>
                <li>{desc4}</li>
                <li>{desc5}</li>
                <li>{desc6}</li>
                <li>{desc7}</li>
            </ul>
        </div>
      <a>{btn}</a>
    </div>
};

export default Post;