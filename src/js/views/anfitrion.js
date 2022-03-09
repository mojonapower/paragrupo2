import React, {useContext, useEffect, useState} from 'react';
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Anfitrion = ()=>{
    let history = useHistory();
    const { store, actions } = useContext(Context);
    const {nombre} = useParams();
    const [perfil,setPerfil]= useState(null);
    useEffect(()=>{
        store.anfitriones.map((element)=>{
            if(element.nombre ==nombre){
                setPerfil(element);
            }
        })
    },[])
    return<>
    {sessionStorage.getItem('loged')=='true'?<div>
detalle :D de {nombre}
    
    {perfil==null?'loading':<>
    
    {perfil.estancias.map((e,k)=>{
        return(
            <li key={k}>
                {e.lugar}
            </li>
        )
    })}
    
    </>}
</div>:"pagina no encontrada"}
    
    </>
}


