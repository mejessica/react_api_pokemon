import React, { useEffect, useState } from "react";
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import axios from "axios";
import '../pages/Home.css'
import { useNavigate, useParams } from "react-router-dom";


export default function Home({ setPokemonData }) {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = (newOffset = 0) => {
        const limit = 20
        let endpoints = []
        for (let i = newOffset + 1; i < newOffset + limit; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        const response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                setPokemons((prevPokemons) => [...prevPokemons, ...res]);
                setOffset(newOffset + limit)
            })
            .catch((err) => console.log(err))

        return response
    }

    const filterPokemons = (name) => {
        let filtered = []
        if (name === "") {
            getPokemons()
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filtered.push(pokemons[i]);
            }
        }
        setPokemons(filtered);
    }


    const handleClick = (pokemonData) => {
        setPokemonData(pokemonData)
        navigate(`/profile/${pokemonData.name}`);
    };

    const randomMore = () =>{
       getPokemons(offset)
    }

    return (
        <>
            <Navbar filterPokemons={filterPokemons} />
            {pokemons.map((pokemon, key) => (
                <Card name={pokemon.data.name} image={pokemon.data.sprites.front_default} key={key} type={pokemon.data.types} onClick={() => handleClick(pokemon.data)} />
            ))}
            <div className="button">
            <button className="carregar" onClick={randomMore}>More pokemons</button>
            </div>
        </>
    )
}