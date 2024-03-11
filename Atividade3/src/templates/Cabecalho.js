import { Alert } from "react-bootstrap";

export function Cabecalho(props){
    return(
        <div>
            <Alert variant='dark' className= 'text-center mb-0'>
                <h3>
                    {props.texto}
                </h3>
            </Alert>
        </div>
    )
}