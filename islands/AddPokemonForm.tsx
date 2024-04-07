import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";


const Form: FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [creator, setCreator] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    let errorWarn = false;

    const isComplete = () => {
        if(name === "" || image === "" || sound === "" || creator === ""){
            setError(true);
            errorWarn = true;
        }
    }

    const addPokemon = async (e: Event, name: string, image: string, sound: string, creator: string) => {
        e.preventDefault();
        isComplete();
        if(!errorWarn){
            const response = await fetch("/api/addPokemon", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, image, sound, creator})
            });
            const data = await response.json();
            if(data.error){ 
                setError(true);
            }
            else{ 
                alert("Successfully Added Pokemon!");
                window.location.href = "/";
            }
        }
    }

    return (
        <div class = "pokemones">
            <form method="POST" onSubmit={(e) => addPokemon(e, name, image, sound, creator)}>
                <h2> Nuevo pokemon</h2>
                <div>
                    <input 
                        type="text" id="name" name="name" value = {name} placeholder="Name"
                        onInput={(e) => {setName(e.currentTarget.value)}}
                        onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <input 
                        type="text" id="image" name="image" value = {image} placeholder="Image URL"
                        onInput={(e) => {setImage(e.currentTarget.value)}}
                        onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <input
                        type="text" id="sound" name="sound" value = {sound} placeholder="Sound URL"
                        onInput={(e) => {setSound(e.currentTarget.value)}}
                        onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <input 
                        type="text" id="creator" name="creator" value = {creator} placeholder="Creator Name"
                        onInput={(e) => {setCreator(e.currentTarget.value)}}
                        onFocus={() => {setError(false)}}
                    />
                </div>

                <div>
                    <button 
                        type="submit" class = "button">Add Pokemon
                    </button>
                </div>
            
                {error && <span class = "error">Error adding Pokemon</span>}
            </form>
        </div>
    );
}

export default Form;