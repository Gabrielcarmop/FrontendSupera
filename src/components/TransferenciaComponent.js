import React from "react";
import TransferecenciaService from "../services/TransferecenciaService";
import "./Conta.css"
import bootstrap from "bootstrap";

class TransferenciaComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            transferencias : [  ]
        }
    }
    componentDidMount(){
        TransferecenciaService.getTransferencias().then((response) =>{
            this.setState({transferencias : response.data})
        });
    }


    render(){
        return(
            <div>
                <article>
                    <ul>
                        <li>
                            <h4><a>Data de Início</a></h4>
                            <input type="text" name="Nome" size="20"  /> 
                        </li>
                        <li>
                            <h4><a>Data de Fim</a></h4>
                            <input type="text" name="Nome" size="20"  /> 
                        </li>
                        <li>
                            <h4><a>Nome operador transação</a></h4>
                            <input type="text" name="Nome" size="20"  /> 
                        </li>
                    </ul>
                </article>
        
            <div class="d-flex justify-content-center" >
                <button type="button" class="btn btn-secondary">Pequisar</button>
            </div>
        
            <div>
                <p></p>
                <p></p>
                <table id="customers">
                   <thead>
                    <tr>
                        <td>Data</td>
                        <td>Valor</td>
                        <td>Tipo</td>
                        <td>Nome Operador</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.transferencias.map(
                            transferencia =>
                            <tr key = {transferencia.id}>
                                <td>{transferencia.data_transferencia}</td>
                                <td>R$ {transferencia.valor}</td>
                                <td>{transferencia.tipo}</td>
                                <td>{transferencia.nome_operador_transacao}</td>
                             </tr>
                           
                        )
                    }
                </tbody>
                </table>    
            </div> 
           </div>
        
        )    
    }

}
export default TransferenciaComponent