import React, {useContext} from "react";
import "../Card/index.css"
import { typesPokemons } from "../../src/utils/handle";
import styled from 'styled-components';
import { tag } from '../../src/utils/tag'

import { ThemeContext, themes } from "../../src/contexts/theme-context"

export default function Card({ id, name, image, type, onClick}) {

    const {theme} = useContext(ThemeContext)

    return (
       
            <Div onClick={onClick} style={{color: theme.color, backgroundColor: theme.background}}>
                <p className="tag">#{tag(id)}</p>
                <div className="img">
                    <img src={image} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{typesPokemons(type)}</p>
                    <Button className="btn btn-primary">Ver</Button>
                </div>
            </Div>
    )

}


    const Div = styled.div`
    border: 1px solid none;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 200px; 
    margin: 20px auto; 
    background-color: white;
    display: inline-block;
    margin: 5rem;
    transition: transform 0.3s;
    &:hover{
    transform: scale(1.1);
    }
    `

    const Button = styled.button`
    display: inline-block;
    padding: 5px 15px;
    font-size: 1rem;
    color: white;
    background-color:#2c72b8; /* Cor azul para o botão */
    border: none;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    font-family: "Nunito", sans-serif;  
    &:hover{
    background-color: #0056b3;
    } 
    `

