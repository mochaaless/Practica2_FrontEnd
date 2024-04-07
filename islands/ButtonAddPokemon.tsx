
const ButtonAddPokemon = () => {
    return (
        <button 
            class="layout-button" onClick={() => window.location.href = "/add"}>
            Add Pokemon
        </button>
    );
}

export default ButtonAddPokemon;