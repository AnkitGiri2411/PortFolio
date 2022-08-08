import React from 'react'
import Imagge from '../image/Ankitgiri.jpg';

export default function Details() {
  return (
    <>
    <div>
      <div id='myintro'>
        <h2><b>Ankit Giri</b></h2>
        <h5><i>Hi My Name Is Ankit Giri and I am a Full-Stack Software Developer. I have Worked on React Js ,Spring Boot, Hiber-Nate, Java-Script,Html, Css and MySql.
            My Hobbies are Playing Cricket and Listining Music. Thanks For Reading About My-self. </i>
        </h5>
        <h6><i>My Github Link is = <a href="https://github.com/AnkitGiri2411">AnkitGiri2411</a> </i></h6>
        
    </div>
    <div>
    <img id='myimage' src={Imagge}></img>
    </div>
    
    </div>
    </>
  )
}
