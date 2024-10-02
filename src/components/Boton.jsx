import React from "react";
import Button from 'react-bootstrap/Button'; 

export const Boton = ({className, nom, click}) => {
   return <Button variant="success" className= {className}onClick={click}>{nom}</Button>
};