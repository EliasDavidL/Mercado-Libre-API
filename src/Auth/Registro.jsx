import {useForm} from "react-hook-form";

import {Form, Button } from 'react-bootstrap';
import { newsUs } from "../Services/servicesUser";
export default function Registro(){
    const {
        register,
        handleSubmit,
      } = useForm({ mode: "onChange" })
      const onSubmit = async (data) => {
        try{
          console.log(data);
        const nuevo = newsUs(data);
        console.log(nuevo);
        }
        catch (error){
          console.log(error)
        }
      }
   
    return(
        <>
        <div className="">Registrarse</div>
        <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Usuario</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su Usuario" {...register("usuario", {require: true})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Y Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese Nombre completo" {...register("nombre")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su E-mail" {...register("email", {require: true})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese una Contraseña" {...register("pass", {require: true})} />
      </Form.Group>
      <Button variant="success" type= "submit">Registrarse</Button>
    </Form>
        </>
    )

}