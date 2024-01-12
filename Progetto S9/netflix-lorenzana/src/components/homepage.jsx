import HarryPotterG from "./harrypottergalleria";
import TVShowsHeader from "./tvshowsheader";
import LordG from "./lordoftherings";
import StarWarsG from "./starwars";
import * as React from "react";

export default function Homepage(){
    return(
        <>
        <TVShowsHeader/>
        <HarryPotterG/>
        <LordG/>
        <StarWarsG/> 
        </>
    )
}