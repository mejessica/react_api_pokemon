import React, { useEffect, useState, useContext } from "react";
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import axios from "axios";
import '../pages/Home.css'
import { useNavigate, useParams } from "react-router-dom";
import { ThemeContext} from "../src/contexts/theme-context"

export default function Home({ setPokemonData }) {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)
    const [isFiltered, setIsFiltered] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = (newOffset = 0) => {
        const limit = 20
        let endpoints = []
        for (let i = newOffset + 1; i <= newOffset + limit; i++) {
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
        if (name === '') {
            filtered = []
            setIsFiltered(false);
            setPokemons(filtered)
            getPokemons()
        } else {
            setIsFiltered(true);
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
                .then((res) => {
                    filtered.push(res)
                    setPokemons(filtered)
                })
                .catch((err) => console.log(err))
        }
    }


    const handleClick = (pokemonData) => {
        setPokemonData(pokemonData)
        navigate(`/profile/${pokemonData.name}`);
    };

    const randomMore = () => {
        getPokemons(offset)
    }

    const {theme} = useContext(ThemeContext)

    return (
        <div style={{backgroundColor: theme.backgroundPage}}>
            <Navbar filterPokemons={filterPokemons} />
            {pokemons.map((pokemon, key) => (
                <Card id={pokemon.data.id} name={pokemon.data.name} image={pokemon.data.sprites.front_default} key={key} type={pokemon.data.types} onClick={() => handleClick(pokemon.data)} />
            ))}
             {!isFiltered && (
                <div className="button">
                    <button className="carregar" onClick={randomMore}>more pokemons</button>
                </div>
            )}
        </div>
    )
}

   