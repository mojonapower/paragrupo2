import React, {useContext} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return(
	<div className="text-center mt-5">
		<h1>Lista anfitriones</h1>
		
		<button onClick={()=>{
			sessionStorage.setItem('loged', 'true')
		}}>login</button>
		{store.anfitriones.map((element, key)=>{
			return (
			
				<div>
					<p>nombre: {element.nombre}</p>
					<p>telefono: {element.telefono}</p>
					<p>cantidad de estancias: {element.estancias.length}</p>
					<Link to={"/anfitrion/"+element.nombre}>
					<button>Ver Perfil del anfitrion</button>
						</Link>
					
					<hr/>
				</div>

			)
		})}

		
	</div>)
};
