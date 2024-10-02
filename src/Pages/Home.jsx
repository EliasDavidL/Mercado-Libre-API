import { useEffect, useState } from "react";
import Productos from "../components/Productos";
import firebase from "../Config/firebase";

export default function Home (){
    console.log(firebase)
   
    return(
        < Productos />
    )
    
}