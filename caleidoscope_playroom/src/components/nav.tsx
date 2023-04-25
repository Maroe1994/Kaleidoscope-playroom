import React from "react";

export function Navbar (){
    return(
        
        <nav className="navbar">
            <div className="dropdown">
            <ul><a href="#"> Sala zabaw Kalejdoskop</a>
                <li><a href="#">Historia</a></li>
                <li><a href="#">Regulamin Sali</a></li>
                <li><a href="#">Polityka prywatności</a></li>
            </ul>
            <ul><a href="#">Atrakcje</a>
                <li><a href="#">Konstrukcja zabawowa</a></li>
                <li><a href="#">Strefa malucha</a></li>
                <li><a href="#">Strefa urodzinowa</a></li>
                <li><a href="#">Słodka strefa</a></li>
            </ul>
            <ul><a href="#">Urodzinki</a>
                <li><a href="#">Konstrukcja zabawowa</a></li>
                <li><a href="#">Strefa malucha</a></li>
                <li><a href="#">Strefa urodzinowa</a></li>
                <li><a href="#">Słodka strefa</a></li>
            </ul>
            <ul><a href="#">Kontakt</a>
            <li><a href="#">Konstrukcja zabawowa</a></li>
                <li><a href="#">Strefa malucha</a></li>
                <li><a href="#">Strefa urodzinowa</a></li>
                <li><a href="#">Słodka strefa</a></li>
            </ul>
            </div>
        </nav>
        
    )
}