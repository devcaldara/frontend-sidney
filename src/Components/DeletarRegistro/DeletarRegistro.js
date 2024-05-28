import { setFetchDeleteById } from '../../Functions/getApiFetch';
import icoDelete from '../../Images/iconDelete.svg';
import './DeletarRegistro.css'

const DeletarRegistro = ({id, onDelete}) => {

    const deletarFetch = async(id) =>{
        try{
            const response = await setFetchDeleteById(`http://localhost:8080/clientes/${id}`);

            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            alert(`Registro com Id ${id} deletado com sucesso`)

            if(onDelete){
                onDelete();
            }

        } catch{
            alert('Houve um problema na operação de exclusão', console.error());
        }
    }

    return(
        <button onClick={() => deletarFetch(id)} className='bt-gerenciar-deletar'>
            <img src={icoDelete} className='ico' alt="Remover Registro"/>
        </button>
    );

}

export default DeletarRegistro;