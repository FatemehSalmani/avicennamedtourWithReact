import React from "react";
import Post from "./Post";
import './ThirdPostStyle.css'

const posts=[

    {
        img:"http://avicennamedtour.com/Content/images/shortcutTab/30f8f1f9-10a3-4954-aa44-ed9a9f6c7434.jpg",
        title:"Nasal Surgery package",
        price :"Price from $ 1440",
        desc1:'Visit doctor',
        desc2:'Medical imaging',
        desc3:'Laboratory tests',
        desc4:'Stay in a 3 to 5 star hotel',
        desc5:'Supply of transportation need',
        desc6:'Translator',
        desc7:'SIM and high speed Internet',
        btn:"Show More"
    },
    {
        img:"http://avicennamedtour.com/Content/images/shortcutTab/8797c897-c8d7-4c73-a802-2905a3d5741a.jpg",
        title :"Hair transplant package",
        price :"price from $ 900",
        desc1:'Visit doctor',
        desc2:'Medical imaging',
        desc3:'Laboratory tests',
        desc4:'Stay in a 3 to 5 star hotel',
        desc5:'Supply of transportation need',
        desc6:'Translator',
        desc7:'SIM and high speed Internet',
        btn:"Show More"
    },
    {
        img:"http://avicennamedtour.com/Content/images/shortcutTab/28fb4327-dca2-4d71-94a6-057d59857cda.jpg",
        title :"Gastric ballon Package",
        price :"Price from $ 1925",
        desc1:'Visit doctor',
        desc2:'Medical imaging',
        desc3:'Laboratory tests',
        desc4:'Stay in a 3 to 5 star hotel',
        desc5:'Supply of transportation need',
        desc6:'Translator',
        desc7:'SIM and high speed Internet',
        btn:"Show More"
    },
    {
        img:"http://avicennamedtour.com/Content/images/shortcutTab/3696e81d-4a20-4657-974b-9ac928f29318.jpg",
        title :"Hollywood smile package",
        price :"price from $ 900",
        desc1:'Visit doctor',
        desc2:'Medical imaging',
        desc3:'Laboratory tests',
        desc4:'Stay in a 3 to 5 star hotel',
        desc5:'Supply of transportation need',
        desc6:'Translator',
        desc7:'SIM and high speed Internet',
        btn:"Show More"
    },
    {
        img:"http://avicennamedtour.com/Content/images/shortcutTab/5448997d-0463-46cb-8f5e-47281c880a72.jpg",
        title:"PRK package",
        price:"price from $ 731",
        desc1:'Visit doctor',
        desc2:'Medical imaging',
        desc3:'Laboratory tests',
        desc4:'Stay in a 3 to 5 star hotel',
        desc5:'Supply of transportation need',
        desc6:'Translator',
        desc7:'SIM and high speed Internet',
        btn:"Show More"
    },
    {
        img:"http://avicennamedtour.com/Content/images/shortcutTab/2e66774f-f071-43ee-8b58-f2a0d5b44241.jpg",
        title:"implant package",
        price:"price from $ 900",
        desc1:'Visit doctor',
        desc2:'Medical imaging',
        desc3:'Laboratory tests',
        desc4:'Stay in a 3 to 5 star hotel',
        desc5:'Supply of transportation need',
        desc6:'Translator',
        desc7:'SIM and high speed Internet',
        btn:"Show More"
    },
]

const ThirdPost = ()=>{
    return<div className={"third"}>
        <div className={"main"}>
            <h1>Most popular packages List</h1>
            {posts.map(posts=>{
                return <Post imag={posts.img}
                             title={posts.title}
                             price={posts.price}
                             desc1={posts.desc1}
                             desc2={posts.desc2}
                             desc3={posts.desc3}
                             desc4={posts.desc4}
                             desc5={posts.desc5}
                             desc6={posts.desc6}
                             desc7={posts.desc7}
                             btn={posts.btn}

                />
            })
            }

        </div>




    </div>
};


export default ThirdPost;