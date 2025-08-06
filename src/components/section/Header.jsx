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





const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
          <a href='/'>
            <em aria-hidden='true'></em>
            <span>my<br/>youtube</span>
          </a>
        </h1>
        <nav className='header__menu'>
          <ul className='menu'>
            <li className='active'>
              <a href='/'><IoHome />홈</a>
            </li>
            <li>
              <a href='/today'><MdRecommend />추천 영상</a>
            </li>
            <li>
              <a href='/music'><FcMusic />추천 음악</a>
            </li>
            <li>
              <a href='/movie'><MdMovieFilter />추천 영화</a>
            </li>
            <li>
              <a href='/book'><LuBookOpen />추천 도서</a>
            </li>
            <li>
              <a href='/anime'><CgGhostCharacter />추천 애니</a>
            </li>
            <li>
              <a href='/youtube'><SiYoutubegaming />유튜브 사이트</a>
            </li>
          </ul>
          <ul className='keyword'>
            <li>
              <a href='/search/youtube'>MyYoutube</a>
            </li>
            <li>
              <a href='/search/html'>HTML</a>
            </li>
            <li>
              <a href='/search/css'>CSS</a>
            </li>
            <li>
              <a href='/search/javascript'>JavaScript</a>
            </li>
            <li>
              <a href='/search/react.js'>React.js</a>
            </li>
            <li>
              <a href='/search/java'>JAVA</a>
            </li>
            <li>
              <a href='/search/oracle'>ORACLE</a>
            </li>
            <li>
              <a href='/search/spring'>SPRING</a>
            </li>
          </ul>
        </nav>
        <div className='header__sns'>
          <ul>
            <li>
              <a href='https://github.com'><FaGithubAlt /></a>
            </li>
            <li>
              <a href='https://youtube.com'><SiYoutubekids /></a>
            </li>
            <li>
              <a href='https://google.com'><LiaGooglePlay /></a>
            </li>
            <li>
              <a href='https://instagram.com'><TiSocialInstagram /></a>
            </li>
          </ul>
        </div>
    </header>
  )
}

export default Header