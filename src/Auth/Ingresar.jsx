import {useForm} from "react-hook-form";
import {Form, Button } from 'react-bootstrap';
import { loginUser } from "../Services/servicesUser";
export default function Ingresar(){
    const {
        register,
        handleSubmit,
      } = useForm({ mode: "onChange" })
      const ingresar = async(data)=>{
        try{
        const siginn = loginUser(data);
        console.log(siginn);
        }
        catch (error){
          console.log(error)
        }
      }   
    return(
        <>
        <div className="titulo">Ingresar</div>
        <Form onSubmit={handleSubmit(ingresar)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>e-mail</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su e-mail" {...register("email")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingrese su contraseña" {...register("pass")} />
      </Form.Group>
      <Button variant="success" type= "submit">Ingresar</Button>
    </Form>
        </>
    )

}