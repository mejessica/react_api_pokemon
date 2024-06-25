import React from "react";
import "../Card/index.css"
import { typesPokemons } from "../../src/utils/handle";
import styled from 'styled-components'

export default function Card({ name, image, type, onClick}) {

    return (
       
            <Div onClick={onClick}>
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
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 200px; /* Largura máxima do cartão */
    margin: 20px auto; /* Centraliza o cartão horizontalmente */
    background-color: white;
    display: inline-block;
    margin-left: 6rem;
    transition: transform 0.5s;
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

