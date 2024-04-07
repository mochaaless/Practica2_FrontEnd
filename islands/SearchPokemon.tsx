import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Pokemon } from "../types.ts";

const SearchPokemon: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [pokemons, setPokemons] = useState<Pokemon[]>();
    const [error, setError] = useState<boolean>(false);

    const search = async (e: Event, name: string) => {
        e.preventDefault();
        const response = await fetch(`/api/getPokemon/${name}`);
        const data = await response.json();
        if(data.error){
            setError(true);
        }
        else{
            setPokemons(data);
        }
    }

    return (
        <div class = "pokemones">
            <form method="GET" onSubmit={(e) => search(e, name)} class = "search-form">
                <h2>Search Pokemon</h2>
                <div>
                    <input type="text" id="name" name="name" value = {name} placeholder="Name"
                    onInput={(e) => {setName(e.currentTarget.value)}}
                    onFocus={() => {setError(false)}}
                    />
                </div>
                <button type="submit" class = "button">Buscar</button>
            </form>
            {pokemons && 
                pokemons.map((pokemon) => (
                    <li class="container-pokemon" key={pokemon._id}>
                        <a href={`/pokemon/${pokemon.name}`}>
                            <img class= "pokemon-img" src={pokemon.image} alt={pokemon.name} />
                            <h2>{pokemon.name}</h2>
                        </a>
                    </li>
                ))
            }
            {error && <p>Pokemon not found!</p>}
        </div>
    );
}

export default SearchPokemon;