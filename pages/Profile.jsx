import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import axios from "axios";
import './Profile.css'
import { typesPokemons } from "../src/utils/handle";
import { useNavigate } from "react-router-dom";

export default function Profile({ pokemonData }) {
    // const [pokemon, setPokemon] = useState([])
    
    console.log(pokemonData)
    const { name, types } = pokemonData || {}

    const navigate = useNavigate()

    useEffect(()=>{
        if(!pokemonData){
            navigate('/')
        }
    }, [])

    if(!pokemonData){
        return null
    }

    // const getPokemon = () => {
    //    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonData.name}`)
    //    .then((res) => setPokemon(res))
    //    .catch((err) => console.log(err))

    //    return response
    // }


    return (
        <>
            <Navbar search />
            <div className="profile-container">
                <h1 className="profile-title">{pokemonData.name}</h1>
                <div className="profile-card">
                    <img className="profile-image" src={pokemonData.sprites.front_default} alt={pokemonData.name} />

                    <div className="profile-details">

                        <table className="profile-table">
                            <tbody>
                                <tr>
                                    <th scope="row"><strong>Height (cm):</strong></th>
                                    <td></td>
                                    <td> {pokemonData.height / 10} m</td>
                                </tr>
                                <tr>
                                    <th scope="row"><strong>Weight (g):</strong></th>
                                    <td></td>
                                    <td>{pokemonData.weight / 10} kg</td>
                                </tr>
                                <tr>
                                    <th scope="row"><strong>Type:</strong></th>
                                    <td></td>
                                    <td colSpan="2">{typesPokemons(types)}</td>
                                </tr>
                                <tr>
                                    <th scope="row"><strong>Abilities:</strong></th>
                                    <td></td>
                                    <td colSpan="2"> {pokemonData.abilities.map((ability) => ability.ability.name).join(", ")} </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="variacoes">
                        <h4>Variações</h4>
                        <img className="varicacoes-image" src={pokemonData.sprites.front_female} alt={pokemonData.sprites.front_female} />
                        <img className="varicacoes-image" src={pokemonData.sprites.front_shiny} alt={pokemonData.sprites.front_shiny} />
                        <img className="varicacoes-image" src={pokemonData.sprites.front_shiny_female} alt={pokemonData.sprites.front_shiny_female} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}