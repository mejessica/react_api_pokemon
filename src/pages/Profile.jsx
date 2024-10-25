import { useEffect, useState, useContext } from "react";
import Navbar from '../components/Navbar';
import axios from "axios";
import './Profile.css'
import { typesPokemons } from "../utils/handle";
import { useNavigate } from "react-router-dom";
import { ThemeContext} from "../contexts/theme-context"

export default function Profile({ pokemonData }) {
    const [pokemon, setPokemon] = useState([])
    const { name, types } = pokemonData || {}

    const navigate = useNavigate()

    useEffect(() => {
        if (!pokemonData) {
            navigate('/')
            return
        }

        const getAbility = async () => {
            const pokemon = []
            const abilities = pokemonData.abilities.map((ability) => ability.ability.name)
            for (const ability of abilities) {
                const response = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
                pokemon.push(response)
            }
            setPokemon(pokemon)
        };

        getAbility()

    }, [])

    if (!pokemonData) {
        return null
    }

    const {theme} = useContext(ThemeContext)

    return (
        <div style={{color:theme.color, backgroundColor: theme.backgroundPage}}>
            <Navbar search />
            <div className="profile-container">
            <h1 className="profile-title">{pokemonData.name}</h1>
                <div className="profile-card" style={{backgroundColor: theme.background}}>
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
                                    <td colSpan="4">
                                        {pokemon.map((description, index) => (
                                            <li key={index}>{description.data.name} - {description.data.flavor_text_entries[0].flavor_text}</li>
                                        ))}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="variacoes">
                            <h4>Variações</h4>
                            <img className="varicacoes-image" src={pokemonData.sprites.front_female} alt={pokemonData.sprites.front_female} />
                            <img className="varicacoes-image" src={pokemonData.sprites.front_shiny} alt={pokemonData.sprites.front_shiny} />
                            <img className="varicacoes-image" src={pokemonData.sprites.front_shiny_female} alt={pokemonData.sprites.front_shiny_female} />
                        </div>

                        <h4>Ataques</h4>
                        <div className="moves">
                            {pokemonData.moves.map((move, index) => (
                                <p style={{backgroundColor: theme.moves}} key={index}>{move.move.name}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}