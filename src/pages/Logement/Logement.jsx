import React from "react";
import { useParams, NavLink } from "react-router-dom";
import housings from '../../assets/db.json'
import Error from "../Error/Error";

function Logement() {
    const { logementId } = useParams()
    const housing = housings.find(housing => housing.id === logementId)
    if (housing === undefined) { 
        
        return <Error />
}
}

export default Logement;
