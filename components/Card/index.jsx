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
                    <button className="btn btn-primary">Ver</button>
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
`
