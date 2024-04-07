import { useState, useEffect } from "preact/hooks";
import { Pokemon } from "../types.ts";
import { FunctionComponent } from "preact";

const GetPokemones: FunctionComponent = () => {
    const [pokemones, setPokemones] = useState<Pokemon[]>([]);

    useEffect(() => {
        const fetchPokemones = async () => {
            const response = await fetch("/api/getPokemones");
            const pokemones = await response.json();
            setPokemones(pokemones);
        };

        fetchPokemones();
    }, []);

    return (
        <div class="pokemones">
            <ul style={{ listStyleType: 'none' }}>
                {pokemones.map((pokemon: Pokemon) => (
                    <li class="container-pokemon" key={pokemon._id}>
                        <a href={`/pokemon/${pokemon.name}`}>
                            <img class= "pokemon-img" src={pokemon.image}/>
                            <h2>{pokemon.name}</h2>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetPokemones;
