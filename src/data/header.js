import React from 'react'
import { IoHome } from "react-icons/io5";
import { MdRecommend } from "react-icons/md";
import { FcMusic } from "react-icons/fc";
import { MdMovieFilter } from "react-icons/md";
import { LuBookOpen } from "react-icons/lu";
import { CgGhostCharacter } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";
import { SiYoutubekids } from "react-icons/si";
import { LiaGooglePlay } from "react-icons/lia";
import { TiSocialInstagram } from "react-icons/ti";

export const headerMenus =[
    {
        title:"홈",
        icon:<IoHome />,
        src:"/"
    },
    {
        title:"추천 영상",
        icon:<MdRecommend />,
        src:"/today"
    },
    {
        title:"추천 음악",
        icon:<FcMusic />,
        src:"/music"
    },
    {
        title:"추천 영화",
        icon:<MdMovieFilter />,
        src:"/movie"
    },
    {
        title:"추천 도서",
        icon:<LuBookOpen />,
        src:"/book"
    },
    {
        title:"추천 애니",
        icon:<CgGhostCharacter />,
        src:"/anime"
    },
    {
        title:"유튜브",
        icon:<SiYoutubegaming />,
        src:"/youtube"
    }
];

export const searchKeyword =[
    {
        title:"MyYoutube",
        src:"/search/youtube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/css"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    }
];

export const snsLink =[
    {
        icon:<FaGithubAlt />,
        src:"https://github.com"
    },
    {
        icon:<SiYoutubekids />,
        src:"https://youtube.com"
    },
    {
        icon:<LiaGooglePlay />,
        src:"https://google.com"
    },
    {
        icon:<TiSocialInstagram />,
        src:"https://instagram.com"
    }
];