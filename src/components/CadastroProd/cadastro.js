import React from "react";
import {TextField} from '@material-ui';

const Cadastro = (props) => {
    return(
        <div>
            <div>
                <TextField label='Descrição do Produto'></TextField>
                <TextField label='Valor'></TextField>
            </div>

            <div>
                <TextField label='Desc. Básica'></TextField>
                <TextField label='Código Fornecedor'></TextField>
                <TextField label='Ref. Fornecedor'></TextField>
                <TextField label='NCM'></TextField>
            </div>
            
        </div>
    );
}
export default Cadastro;