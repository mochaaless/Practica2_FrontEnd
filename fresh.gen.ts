// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $add from "./routes/add.tsx";
import * as $api_addPokemon from "./routes/api/addPokemon.tsx";
import * as $api_deletePokemon_name_ from "./routes/api/deletePokemon/[name].tsx";
import * as $api_getPokemon_name_ from "./routes/api/getPokemon/[name].tsx";
import * as $api_getPokemones from "./routes/api/getPokemones.tsx";
import * as $index from "./routes/index.tsx";
import * as $pokemon_name_ from "./routes/pokemon/[name].tsx";
import * as $search from "./routes/search.tsx";
import * as $AddPokemonForm from "./islands/AddPokemonForm.tsx";
import * as $ButtonAddPokemon from "./islands/ButtonAddPokemon.tsx";
import * as $ButtonIndex from "./islands/ButtonIndex.tsx";
import * as $ButtonSearchPokemon from "./islands/ButtonSearchPokemon.tsx";
import * as $GetPokemones from "./islands/GetPokemones.tsx";
import * as $SearchPokemon from "./islands/SearchPokemon.tsx";
import * as $ShowPokemon from "./islands/ShowPokemon.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/add.tsx": $add,
    "./routes/api/addPokemon.tsx": $api_addPokemon,
    "./routes/api/deletePokemon/[name].tsx": $api_deletePokemon_name_,
    "./routes/api/getPokemon/[name].tsx": $api_getPokemon_name_,
    "./routes/api/getPokemones.tsx": $api_getPokemones,
    "./routes/index.tsx": $index,
    "./routes/pokemon/[name].tsx": $pokemon_name_,
    "./routes/search.tsx": $search,
  },
  islands: {
    "./islands/AddPokemonForm.tsx": $AddPokemonForm,
    "./islands/ButtonAddPokemon.tsx": $ButtonAddPokemon,
    "./islands/ButtonIndex.tsx": $ButtonIndex,
    "./islands/ButtonSearchPokemon.tsx": $ButtonSearchPokemon,
    "./islands/GetPokemones.tsx": $GetPokemones,
    "./islands/SearchPokemon.tsx": $SearchPokemon,
    "./islands/ShowPokemon.tsx": $ShowPokemon,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
