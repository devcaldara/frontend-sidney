import { useState, useEffect } from "react";
import { setFetchListAll } from "../../Functions/getApiFetch";
import './ListaCliente.css'
import DeletarRegistro from "../DeletarRegistro/DeletarRegistro";

const ListaCliente = () => {

    //'http://localhost:8080/clientes/listar'

    const[clientes, setClientes] = useState([]);

    const listAll = async () => {
        const res = await setFetchListAll('http://localhost:8080/clientes/listar');
        if(!res.ok){
            throw new Error("Ops! Algo deu errado")
        }
        const data = await res.json();
        setClientes(data);
    }

    useEffect(() => {
        listAll();

    },[]);

    return(
        <div>
            <ul id ="container-lista-cliente">
                <li className="title-cliente">
                    <span>Nome</span>
                    <span>Sexo</span>
                    <span>Data de Nascimento</span>
                    <span>CPF</span>
                    <span className="gerenciar">Deletar</span>
                </li>
                {clientes.map(cliente =>(
                    <li className='item-cliente' key={cliente.id}>
                        <span>{cliente.nome}</span>
                        <span>{cliente.sexo}</span>
                        <span>{cliente.dataNascimento}</span>
                        <span>{cliente.cpf}</span>
                        <DeletarRegistro id = {cliente.id} onDelete={listAll} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaCliente;