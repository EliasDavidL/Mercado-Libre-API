import { Boton } from "../components/Boton";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Producto({ id, price, title, img }) {
    
    return (
      <>
      <div>
        <img src={img} alt="" />
        <h4>Descripcion</h4>
        <p>{title}</p>
        <p>Precio</p>
        <p>${price}</p>           
          <Link to = {`Detalle/${id}`} ><Boton  nom = "Ver mas"/></Link>
      </div>      
      </>
    );
  }