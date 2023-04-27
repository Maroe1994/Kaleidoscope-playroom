import React from "react";

export function Navbar (){
    return(
        
        <nav className="navbar">
            <div className="dropdown">
            <a href="#"> Sala zabaw Kalejdoskop</a>
            <ul>
                <li><a href="#">Historia</a></li>
                <li><a href="#">Regulamin Sali</a></li>
                <li><a href="#">Polityka prywatności</a></li>
            </ul>
            </div>
            <div className="dropdown">
            <a href="#">Atrakcje</a>
            <ul>
                <li><a href="#">Konstrukcja zabawowa</a></li>
                <li><a href="#">Strefa malucha</a></li>
                <li><a href="#">Strefa urodzinowa</a></li>
                <li><a href="#">Słodka strefa</a></li>
            </ul>
            </div>
            <div className="dropdown">
            <a href="#">Urodzinki</a>
            <ul>
                <li><a href="#">Konstrukcja zabawowa</a></li>
                <li><a href="#">Strefa malucha</a></li>
                <li><a href="#">Strefa urodzinowa</a></li>
                <li><a href="#">Słodka strefa</a></li>
            </ul>
            </div>
            <div className="dropdown">
            <a href="#">Kontakt</a>
            <ul>
                <li><a href="#">Konstrukcja zabawowa</a></li>
                <li><a href="#">Strefa malucha</a></li>
                <li><a href="#">Strefa urodzinowa</a></li>
                <li><a href="#">Słodka strefa</a></li>
            </ul>
            </div>
        </nav>
        
    )
}