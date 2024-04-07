import { FreshContext } from "$fresh/server.ts";
import ButtonSearch from "../islands/ButtonSearchPokemon.tsx";
import ButtonAddPokemon from "../islands/ButtonAddPokemon.tsx";
import ButtonIndex from "../islands/ButtonIndex.tsx";

export default async function Layout (req: Request, ctx: FreshContext) { 
    return (
        <div>
            <div class="layout">
                <h1>
                    POKEDEX
                </h1>
                <div class="button-container">
                    <ButtonIndex/>
                    <ButtonAddPokemon/>
                    <ButtonSearch/>
                </div>
            </div>
            <ctx.Component/>
        </div>
    );
}