import React from 'react'
import "./MyFooter.css"
import {SiGeeksforgeeks} from "react-icons/si"
import {FaHackerrank} from "react-icons/fa"

export default function MyFooter(){
    return(
        <footer>
            <a href='' className=''>Yukta Lalitkumar Behare</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://auth.geeksforgeeks.org/user/yuktabefmd2" className=""><SiGeeksforgeeks/></a>
                <a href="https://www.hackerrank.com/2018bme010" className=""><FaHackerrank/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Yukta Lalitkumar Behare. All rights reserved.</small>
            </div>
        </footer>
    )
}