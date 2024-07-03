import React from "react";
import { useNavigate } from "react-router-dom"
import "../Navbar/index.css"
import styled from 'styled-components'

export default function Navbar({ filterPokemons, search }) {
    const navigate = useNavigate()
    return (

        <Nav>
            <div className="img">
                <img src="../public/images/pokemon.png" cursor="pointer" onClick={()=>navigate("/")}/>
            </div>

            <div>
                {!search ? (
                <form onSubmit={filterPokemons}>
                    <Input placeholder="qual é esse pokémon?" type="text" onChange={(e)=>filterPokemons(e.target.value)}/>
                    <img style={{ width: '40px', height: '40px' }}  src="./public/images/pngwing.com.png" alt="" />
                </form>
                ): null}
            </div>
        </Nav>
    )
}

const Nav = styled.nav`
    padding: 10px;
    margin: 2rem 0 2rem 0;
`

const Button = styled.button`
  padding: 5px 10px;
    font-size: 18px;
    color: white;
    background-color: #2c72b8; /* Cor azul para o botão */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    &:hover{
    background-color: #0056b3;
    }
`
const Input = styled.input`
    padding: 7px;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px; /* Espaço entre o input e o botão */
    &::placeholder {
    color: gray;
    font-size:15px;
    font-family: "Nunito", sans-serif
    }
`