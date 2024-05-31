import React from "react";
import "../Card/index.css"
import { typesPokemons } from "../../src/utils/handle";

export default function Card({ name, image, type, onClick}) {

    return (
       
            <div className="card" onClick={onClick}>
                <div className="img">
                    <img src={image} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{typesPokemons(type)}</p>
                    <button className="btn btn-primary">Ver</button>
                </div>
            </div>
   

    )
}