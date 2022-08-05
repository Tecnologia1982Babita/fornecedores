import React, { useState, useCallback, useEffect } from "react";
import "./TabelaFornecedor.css";
import { Table, FormGroup, Form, Label, Row, Button, Col, Input } from 'reactstrap';
import DatePicker from "react-date-picker";
import moment from 'moment';
import $ from "jquery";

import api from '../../api';






const TabelaFornecedor = (props) => {

    const [vendeestgeral, setVendeestgeral] = useState([]);

    const [vendeestgeralteste, setVendeestgeralteste] = useState([]);

    const [vendeestgeralitem, setVendeestgeralitem] = useState([]);

    const [vendeestgeralitemtam, setVendeestgeralitemtam] = useState([]);

    const [vendeestgeralitemloja, setVendeestgeralitemloja] = useState([]);

    const [vendeestgeralacumloja, setVendeestgeralacumloja] = useState([]);

    const [vendeestgeralacumlojaloja, setVendeestgeralacumlojaloja] = useState([]);

    const [vendeestgeralacumlojalojaloja, setVendeestgeralacumlojalojaloja] = useState([]);

    const [vendeestgeralacumloja4, setVendeestgeralacumloja4] = useState([]);

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

  

    const [value, setValue] = useState(null);
    
    function onChange2(ev) {
    const {name, value} = ev.target;
    setValue(value)
    }

    const [value4, setValue4] = useState(null);
    
    function onChange4(ev) {
    const {name, value} = ev.target;
    setValue4(value)
    }

   


      const fetchRequest2 = useCallback(() => {
        api.get(`vendeestgeralteste/${datainicial}/${datafinal}/${value}`).then(response => {
            setVendeestgeralteste(response.data)
         
        })
    }, [datainicial, datafinal, value]);

     const fetchRequest3 = useCallback(() => {
        api.get(`vendeestgeralitem/${datainicial}/${datafinal}/${value}/`).then(response => {
            setVendeestgeralitem(response.data)
          
        })
    }, [datainicial, datafinal, value]);


  

    const fetchRequest4 = useCallback(() => {
        api.get(`vendeestgeralitemtam/${datainicial}/${datafinal}/${value}/${value4}`).then(response => {
            setVendeestgeralitemtam(response.data)
          
        })
    }, [datainicial, datafinal,value, value4 ]);





    const fetchRequest5 = useCallback(() => {
        api.get(`vendeestgeralitemloja/${datainicial}/${datafinal}/${value}/${value4}`).then(response => {
            setVendeestgeralitemloja(response.data)
          
        })
    }, [datainicial, datafinal,value, value4 ]);


    const fetchRequest6 = useCallback(() => {
        api.get(`vendeestgeralacumloja/${datainicial}/${datafinal}/${for_cod}/`).then(response => {
            setVendeestgeralacumloja(response.data)
          
        })
    }, [datainicial, datafinal,for_cod]);


    const [value5, setValue5] = useState(null);
    
    function onChange5(ev) {
    const {name, value} = ev.target;
    setValue5(value)
    }



    const fetchRequest7 = useCallback(() => {
        api.get(`vendeestgeralacumlojaloja/${datainicial}/${datafinal}/${for_cod}/${value5}/`).then(response => {
            setVendeestgeralacumlojaloja(response.data)
          
        })
    }, [datainicial, datafinal,for_cod, value5]);



    const fetchRequest8 = useCallback(() => {
        api.get(`vendeestgeralacumlojalojaloja/${datainicial}/${datafinal}/${value}/${value5}/`).then(response => {
            setVendeestgeralacumlojalojaloja(response.data)
          
        })
    }, [datainicial, datafinal, value, value5]);

    const fetchRequest9 = useCallback(() => {
        api.get(`vendeestgeralacumloja4/${datainicial}/${datafinal}/${value}/${value5}/${value4}`).then(response => {
            setVendeestgeralacumloja4(response.data)
          
        })
    }, [datainicial, datafinal,value, value5,value4 ]);


    
    
          

    return ( 
        <div>  <center>   
            <FormGroup id='formselect'>
        <Label for="exampleSelect">Tipos de Consultas</Label>
        <Input type="select" name="select" id="select">
          <option value=''>Selecione Uma Opção de Consulta</option>
          <option value='#div1'>Todos os codigos Geral</option>
          <option value='#div2'>Por codigo Geral</option>
          <option value='#div3'>Por item Geral</option>
          <option value='#div4'>Por item tamanhos</option>
          <option value='#div5'>Por item loja</option>
          <option value='#div6'>Acumulado por loja</option>
          <option value='#div7'>Acumulado por loja loja</option>
          <option value='#div8'>Acumulado por loja loja loja</option>
          <option value='#div9'>Acumulado por loja4</option>
      
        </Input>
      </FormGroup></center> 
      


    <div id='pai'>
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

    <div id='div2' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Por codigo Geral </Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>
                  

                 <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código fornecedor</Label>
                 <Input type='text' name='codigofab' onChange = { onChange2 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest2} sm={12} > Filtrar </Button> 
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
                  <th> #</th> 
                  <th> NOME FOR. </th> 
            <th> COD. FOR. </th> 
            <th> VAL. VENDA</th> 
            <th> QTDE. VENDA</th> 
            <th> GIRO(V/E) </th> 
            <th> VAL.ESTOQUE </th>
            <th> QTD.ESTOQUE </th>
                  </tr> 
                  </thead> 
                  {vendeestgeralteste.map(vendeestgeralteste => ( 
                      <tbody key = { vendeestgeralteste.cod_fabricante }
                      className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralteste.nome_fornecedor }</td> 
                <td> { vendeestgeralteste.cod_fabricante }</td> 
                <td> { vendeestgeralteste.venda_total_venda }</td> 
                <td> { vendeestgeralteste.qtd_pecas_vendidas } </td> 
                <td> { vendeestgeralteste.giro }</td> 
                <td> { vendeestgeralteste.venda_total_estoque }</td> 
                <td> { vendeestgeralteste.qtd_estoque }</td> 
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 

          
    <div id='div3' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Por item Geral </Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>

                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código fornecedor</Label>
                 <Input type='text' name='codigofab' onChange = { onChange2 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest3} sm={12} > Filtrar </Button> 
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
                  <th> NOME PRODUTO </th> 
                  <th> Nº PRODUTO </th> 
                  <th> REVISTA </th> 
                  <th> PAGINA </th> 
                  <th> REF. FORNECEDOR </th> 
                  <th> PREÇO </th> 
                  <th> PORC. TROCA </th> 
                  <th> VAL. VENDA </th>
                  <th> QTD.VENDA </th>
                  <th> GIRO </th>
                  <th> VAL. ESTOQUE</th>
                  <th> QTD. ESTOQUE </th>
                  </tr> 
                  </thead> 
                  {vendeestgeralitem.map(vendeestgeralitem => ( 
                      <tbody key = { vendeestgeralitem.num_produto }
                      className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralitem.produtos_descricao }</td> 
                      <td> { vendeestgeralitem.num_produto }</td> 
                      <td> { vendeestgeralitem.nome_revista }</td> 
                      <td> { vendeestgeralitem.produtos_pagina } </td> 
                      <td> { vendeestgeralitem.produtos_reffor }</td> 
                      <td> { vendeestgeralitem.preco_cheio }</td> 
                      <td> { vendeestgeralitem.porcent_troca }</td> 
                      <td> { vendeestgeralitem.venda_total_venda }</td> 
                      <td> { vendeestgeralitem.qtd_pecas_vendidas }</td> 
                      <td> { vendeestgeralitem.giro_venda }</td>
                      <td> { vendeestgeralitem.venda_total_estoque }</td> 
                      <td> { vendeestgeralitem.qtd_estoque }</td> 
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 

          
    <div id='div4' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Por item tamanhos </Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>
                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código fornecedor</Label>
                 <Input type='text' name='codigofab' onChange = { onChange2 }/>
                 </Col>
                 <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código Produto</Label>
                 <Input type='text' name='codigopro' onChange = { onChange4 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest4} sm={12} > Filtrar </Button> 
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
                  <th> TAMANHO </th> 
                  <th> COR </th> 
                  <th> Nº ITEM </th> 
                  <th> PREÇO </th> 
                  <th> PORC.TROCA </th> 
                  <th> VAL.VENDA </th> 
                  <th> QTD.VENDA </th> 
                  <th> GIRO </th>
                  <th> VAL.ESTOQUE </th>
                  <th> QTD.ESTOQUE </th>
                  </tr> 
                  </thead> 
                  {vendeestgeralitemtam.map(vendeestgeralitemtam => ( 
                      <tbody key = { vendeestgeralitemtam.tam_nom }
                      className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralitemtam.tam_nom }</td> 
                      <td> { vendeestgeralitemtam.descricao_cor }</td> 
                      <td> { vendeestgeralitemtam.num_item }</td> 
                      <td> { vendeestgeralitemtam.preco_cheio } </td> 
                      <td> { vendeestgeralitemtam.porcent_troca }</td> 
                      <td> { vendeestgeralitemtam.venda_total_venda }</td> 
                      <td> { vendeestgeralitemtam.qtd_pecas_vendidas }</td> 
                      <td> { vendeestgeralitemtam.giro_venda }</td> 
                      <td> { vendeestgeralitemtam.venda_total_estoque }</td> 
                      <td> { vendeestgeralitemtam.qtd_estoque }</td>
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 

          <div id='div5' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Por item tamanhos </Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>
                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código fornecedor</Label>
                 <Input type='text' name='codigofab' onChange = { onChange2 }/>
                 </Col>
                 <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código Produto</Label>
                 <Input type='text' name='codigopro' onChange = { onChange4 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest5} sm={12} > Filtrar </Button> 
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
                  <th> LOJA </th> 
                  <th> TAMANHO </th> 
                  <th> COR </th> 
                  <th> Nº ITEM </th> 
                  <th> PORC.TROCA </th> 
                  <th> PREÇO </th> 
                  <th> PORC. TROCA </th> 
                  <th> VAL. VENDA </th>
                  <th> QTD. VENDA </th>
                  <th> GIRO </th>
                  <th> VAL. ESTOQUE </th>
                  <th> QTD. ESTOQUE </th>

                  </tr> 
                  </thead> 
                  {vendeestgeralitemloja.map((vendeestgeralitemloja, idx) => ( 
                      <tbody key={idx} vendeestgeralitemloja={vendeestgeralitemloja}  className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralitemloja.loja_nome }</td> 
                      <td> { vendeestgeralitemloja.tam_nom }</td> 
                      <td> { vendeestgeralitemloja.descricao_cor }</td> 
                      <td> { vendeestgeralitemloja.num_item } </td> 
                      <td> { vendeestgeralitemloja.preco_cheio }</td> 
                      <td> { vendeestgeralitemloja.porcent_troca }</td> 
                      <td> { vendeestgeralitemloja.venda_total_venda }</td> 
                      <td> { vendeestgeralitemloja.qtd_pecas_vendidas }</td> 
                      <td> { vendeestgeralitemloja.giro_venda }</td> 
                      <td> { vendeestgeralitemloja.venda_total_estoque }</td> 
                      <td> { vendeestgeralitemloja.qtd_estoque }</td>
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 

          <div id='div6' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Acumulado por loja </Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest6} sm={12} > Filtrar </Button> 
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
                  <th> NOME FOR </th> 
                  <th> LOJA </th> 
                  <th> VAL.VENDA </th> 
                  <th> QTD. VENDA </th>
                  <th> GIRO </th>
                  <th> VAL. ESTOQUE </th>
                  <th> QTD. ESTOQUE </th>

                  </tr> 
                  </thead> 
                  {vendeestgeralacumloja.map((vendeestgeralacumloja, idx) => ( 
                      <tbody key={idx} vendeestgeralacumloja={vendeestgeralacumloja}  className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralacumloja.nome_fornecedor }</td> 
                      <td> { vendeestgeralacumloja.loja_nome }</td> 
          
              
                      <td> { vendeestgeralacumloja.venda_total_venda }</td> 
                      <td> { vendeestgeralacumloja.qtd_pecas_vendidas }</td> 
                      <td> { vendeestgeralacumloja.giro_venda }</td> 
                      <td> { vendeestgeralacumloja.venda_total_estoque }</td> 
                      <td> { vendeestgeralacumloja.qtd_estoque }</td>
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 
          
          <div id='div7' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Acumulado por loja loja</Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>
                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Loja Nome</Label>
                 <Input type='text' name='loja_nome' onChange = { onChange5 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest7} sm={12} > Filtrar </Button> 
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
                  <th> NOME FOR </th> 
                  <th> COD. FOR. </th> 
                  <th> VAL.VENDA </th> 
                  <th> QTD. VENDA </th>
                  <th> GIRO </th>
                  <th> VAL. ESTOQUE </th>
                  <th> QTD. ESTOQUE </th>

                  </tr> 
                  </thead> 
                  {vendeestgeralacumlojaloja.map((vendeestgeralacumlojaloja, idx) => ( 
                      <tbody key={idx} vendeestgeralacumlojaloja={vendeestgeralacumlojaloja}  className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralacumlojaloja.nome_fornecedor }</td> 
                      <td> { vendeestgeralacumlojaloja.cod_fabricante }</td>          
                      <td> { vendeestgeralacumlojaloja.venda_total_venda }</td> 
                      <td> { vendeestgeralacumlojaloja.qtd_pecas_vendidas }</td> 
                      <td> { vendeestgeralacumlojaloja.giro_venda }</td> 
                      <td> { vendeestgeralacumlojaloja.venda_total_estoque }</td> 
                      <td> { vendeestgeralacumlojaloja.qtd_estoque }</td>
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 
          

          <div id='div8' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Acumulado por loja loja loja</Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>

                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código fornecedor</Label>
                 <Input type='text' name='codigofab' onChange = { onChange2 }/>
                 </Col>

                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Loja Nome</Label>
                 <Input type='text' name='loja_nome' onChange = { onChange5 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest8} sm={12} > Filtrar </Button> 
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
                  <th> NOME PRODUTO </th> 
                  <th> Nº PRODUTO </th> 
                  <th> REVISTA </th> 
                  <th> PAGINA </th> 
                  <th> REF. FORNECEDOR </th>
                  <th> PREÇO </th>
                  <th> PORC. TROCA </th> 

                  <th> VAL. VENDA </th>
                  <th> QTD. VENDA </th>
                  <th> GIRO </th>
                  <th> VAL. ESTOQUE </th>
                  <th> QTD. ESTOQUE </th>
              

                  </tr> 
                  </thead> 
                  {vendeestgeralacumlojalojaloja.map((vendeestgeralacumlojalojaloja, idx) => ( 
                      <tbody key={idx} vendeestgeralacumlojalojaloja={vendeestgeralacumlojalojaloja}  className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralacumlojalojaloja.cod_fabricante }</td> 
                      <td> { vendeestgeralacumlojalojaloja.num_produto }</td>          
                      <td> { vendeestgeralacumlojalojaloja.nome_revista }</td> 
                      <td> { vendeestgeralacumlojalojaloja.produtos_pagina }</td> 
                      <td> { vendeestgeralacumlojalojaloja.produtos_reffor }</td> 
                      <td> { vendeestgeralacumlojalojaloja.preco_cheio }</td> 
                      <td> { vendeestgeralacumlojalojaloja.porcent_troca }</td>
                      <td> { vendeestgeralacumlojalojaloja.venda_total_venda }</td> 
                      <td> { vendeestgeralacumlojalojaloja.qtd_pecas_vendidas }</td>          
                      <td> { vendeestgeralacumlojalojaloja.giro_venda }</td> 
                      <td> { vendeestgeralacumlojalojaloja.venda_total_estoque }</td> 
                      <td> { vendeestgeralacumlojalojaloja.qtd_estoque }</td> 
                
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 

          <div id='div9' className="hide">
                  
                  <Row>
                  <Col sm={8} md={7} lg={5} xl={4}>
                  <div className = "blocotabela">
                  <Form className = "cardFornecedor" >
                  <Row>
                  <Col> 
                  <Label className="title-card"> Acumulado por loja4 </Label>            
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
                  <DatePicker className="data1" onChange = { onChange1 } value = { selectDateFim }/> 
                  </Col>
                  </FormGroup> 
                  </Col>
                  <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Código fornecedor</Label>
                 <Input type='text' name='codigofab' onChange = { onChange2 }/>
                 </Col>
                 <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Loja Nome</Label>
                 <Input type='text' name='loja_nome' onChange = { onChange5 }/>
                 </Col>
                 <Col sm={2} md={6} lg={6} xl={6}>
                 <Label className="labelform">Referencia</Label>
                 <Input type='text' name='produtos_reffor' onChange = { onChange4 }/>
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
                  <Button className = "buttonFiltrar"  onClick={fetchRequest9} sm={12} > Filtrar </Button> 
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
                  <th> LOJA </th> 
                  <th> TAMANHO </th> 
                  <th> COR </th> 
                  <th> Nº ITEM </th> 
                  <th> PORC.TROCA </th> 
                  <th> PREÇO </th> 
                  <th> PORC. TROCA </th> 
                  <th> VAL. VENDA </th>
                  <th> QTD. VENDA </th>
                  <th> GIRO </th>
                  <th> VAL. ESTOQUE </th>
                  <th> QTD. ESTOQUE </th>

                  </tr> 
                  </thead> 
                  {vendeestgeralacumloja4.map((vendeestgeralacumloja4, idx) => ( 
                      <tbody key={idx} vendeestgeralacumloja4={vendeestgeralacumloja4}  className = "cabecalho2" >
                      <tr>
                      <th scope = "row" > 1 </th> 
                      <td> { vendeestgeralacumloja4.loja_nome }</td> 
                      <td> { vendeestgeralacumloja4.tam_nom }</td> 
                      <td> { vendeestgeralacumloja4.descricao_cor }</td> 
                      <td> { vendeestgeralacumloja4.num_item } </td> 
                      <td> { vendeestgeralacumloja4.preco_cheio }</td> 
                      <td> { vendeestgeralacumloja4.porcent_troca }</td> 
                      <td> { vendeestgeralacumloja4.venda_total_venda }</td> 
                      <td> { vendeestgeralacumloja4.qtd_pecas_vendidas }</td> 
                      <td> { vendeestgeralacumloja4.giro_venda }</td> 
                      <td> { vendeestgeralacumloja4.venda_total_estoque }</td> 
                      <td> { vendeestgeralacumloja4.qtd_estoque }</td>
                      </tr>
      
                      </tbody>
                  ))} 
                  </Table>
                  
          </div>
          </Col>
          </Row>
          </div> 

          
    </div> 
    </div> 
    


)
}

export default TabelaFornecedor;