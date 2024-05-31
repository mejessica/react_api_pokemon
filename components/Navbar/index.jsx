import React from "react";
import { useNavigate } from "react-router-dom"
import "../Navbar/index.css"

export default function Navbar({ filterPokemons, search }) {
    const navigate = useNavigate()
    return (

        <nav>
            <div className="img">
                <img src="../public/images/pokemon.png" cursor="pointer" onClick={()=>navigate("/")}/>
            </div>

            <div>
                {!search ? (
                <form>
                    <input type="text" onChange={(e)=>filterPokemons(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
                ): null}
            </div>
        </nav>
    )
}