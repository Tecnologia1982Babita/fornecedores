import React, { useState, useCallback, useEffect } from "react";
import "./TabelaFornecedor.css";
import { Table, FormGroup, Form, Label, Row, Button, Col, Input } from 'reactstrap';
import DatePicker from "react-date-picker";
import moment from 'moment';
import $ from "jquery";

import api from '../../api';






const TabelaFornecedor = (props) => {

    const [vendeestgeral, setVendeestgeral] = useState([]);


    const for_cod = localStorage.getItem('for_cod')


    function hoje() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
    
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var formatado = dd + '/' + mm + '/' + yyyy;
        var bd = yyyy + '' + mm + '' + dd;
        var valores = {'formatado': formatado, 'bd': bd};
        return valores;
    }


    useEffect(() => {
        $('#select').on('change', function(){
           var selectValor = $(this).val();
           console.log(selectValor);
            $('#pai').children('div').hide();
            $('#pai').children(selectValor).show();
        });
    },);
    





     useEffect(() => {
        api.get(`vendeestgeral/${hoje().bd}/${hoje().bd}/${for_cod}/`).then(response => {
            setVendeestgeral(response.data)
        })
    }, [for_cod]);


 
    
    const [selectDateIni, setSelectDateIni] = useState(null);
    

    const onChange = selectDateIni => {
        setSelectDateIni(selectDateIni);
        }


    const [selectDateFim, setSelectDateFim] = useState(null);

    const onChange1 = selectDateFim => {
        setSelectDateFim(selectDateFim);
    }



    const datainicial = moment(selectDateIni).format("YYYYMMDD")

  

    const datafinal = moment(selectDateFim).format("YYYYMMDD")

    
  

    

    const fetchRequest = useCallback(() => {
        api.get(`vendeestgeral/${datainicial}/${datafinal}/${for_cod}/`).then(response => {
            setVendeestgeral(response.data)
          
        })
    }, [for_cod, datainicial, datafinal]);

  

  


    
    
          

    return ( 
    



        <div id='div1' className="hide">
                  
            <Row>
            <Col sm={8} md={7} lg={5} xl={4}>
            <div className = "blocotabela">
            <Form className = "cardFornecedor" >
            <Row>
            <Col> 
            <Label className="title-card"> Todos os codigos Geral </Label>            
            </Col>
            </Row> 
            <Row>
            <Col sm={2} md={6} lg={6} xl={6}>   
            <FormGroup>
            <Label className = "nomeData1" sm={4}> De: </Label> 
            <Col sm={3} md={6} lg={6} xl={6}>
            <DatePicker className="data"  onChange = { onChange } value = { selectDateIni }/> 
            </Col>
            </FormGroup> 
            </Col>

            <Col sm={2} md={6} lg={6} xl={6}>  
            <FormGroup>
            <Label className = "nomeData2" sm={4}> Até: </Label> 
            <Col sm={3} md={6} lg={6} xl={6}>
            <DatePicker className="data1"  onChange = { onChange1 } value = { selectDateFim }/> 
            </Col>
            </FormGroup> 
            </Col>

   
            </Row> 

            <Row> 
            <Col sm={2} md={6} lg={6} xl={6}  className="group-buttons" >   
            <FormGroup className="group-buttons">
            <Button className = "buttonLimpar" type='reset'> Limpar </Button> 
            </FormGroup>
            </Col>
            <Col sm={2} md={6} lg={6} xl={6}>  
            <FormGroup className="group-buttons1">
            <Button className = "buttonFiltrar"  onClick={fetchRequest} sm={12} > Filtrar </Button> 
            </FormGroup>
            </Col>
            </Row>
            </Form>
            </div>
            </Col>
            

       
            
            <Col sm={4} md={5} lg={7} xl={8}>
            <div className='tabela'>

            
            <Table responsive id="nivel8" >
            <thead className="cabecalho">
            <tr>
            <th> # </th> 
            <th> NOME FOR. </th> 
            <th> COD. FOR. </th> 
            <th> VAL. VENDA</th> 
            <th> QTDE. VENDA</th> 
            <th> GIRO(V/E) </th> 
            <th> VAL.ESTOQUE </th>
            <th> QTD.ESTOQUE </th>
            </tr> 
            </thead> 
            {vendeestgeral.map(vendeestgeral => ( 
                <tbody key = { vendeestgeral.cod_fabricante }
                className = "cabecalho2" >
                <tr>
                <th scope = "row" > 1 </th> 
                <td> { vendeestgeral.nome_fornecedor }</td> 
                <td> { vendeestgeral.cod_fabricante }</td> 
                <td> { vendeestgeral.venda_total_venda }</td> 
                <td> { vendeestgeral.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeral.giro }</td> 
                <td> { vendeestgeral.venda_total_estoque }</td> 
                <td> { vendeestgeral.qtd_estoque }</td> 
                </tr>

                </tbody>
            ))} 
            </Table>
            
    </div>
    </Col>
    </Row>
    </div> 


          

    


)
}

export default TabelaFornecedor;