import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Pokemon } from "../types.ts";

type SeePokemonProps = {
    pokemon: Pokemon;
}

const ShowPokemon: FunctionComponent<SeePokemonProps> = (props) => {
    const { pokemon } = props;
    const [showModal, setModal] = useState(false);
    const [creator, setCreator] = useState("");
    const [error, setError] = useState(false);

    const handleDelete = async () => {
        try{
            if(!creator){
                setError(true);
                return;
            }

            const response = await fetch(`/api/deletePokemon/${pokemon.name}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: pokemon.name,
                    creator: creator
                })
            });

            if(response.status === 200){
                alert("Successfully Deleted Pokemon");
                window.location.href = "/";
            }else{
                setError(true);
            }
        }catch(e){
            alert("Erorr deleting Pokemon");
        }
    }

    return (
        {pokemon} && <div class = "container-pokemon">
            <h2>{pokemon.name}</h2>
            <img class= "pokemon-img" src={pokemon.image} alt={pokemon.name} />
            <audio controls>
                <source src={pokemon.sound} type="audio/mpeg" class = "audio-player"/>
            </audio>
            <button class= "delete-button" onClick={() => setModal(true)}>Delete pokemon</button>

            {showModal && (
                <div class = "pokemones">
                    <div>
                        <h2>Delete pokemon</h2>
                        <input type="text" placeholder="Creator Name" value={creator} onInput={(e) => setCreator(e.currentTarget.value)} />
                        <button class= "delete-button" onClick={handleDelete}>Delete</button>
                        {error && <p>Incorrect Pokemon name</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShowPokemon;