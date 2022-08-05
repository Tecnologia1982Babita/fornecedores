import React, { useState, useCallback, useEffect } from "react";
import {StickyTable, Rows, Cell} from 'react-sticky-table';
import "./TabelaFornecedor.css";
import { Table, FormGroup, Form, Label, Row, Button, Col, Input } from 'reactstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ptBR } from 'date-fns/locale'
import moment from 'moment';
//import BasicExample from '../table/BasicExample';
import $ from "jquery";


import api from '../../api';

import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { roundToNearestMinutesWithOptions } from "date-fns/fp";






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

    const [todositensporcodigoloja, setTodositensporcodigoloja] = useState([]);

    const [consultaconso, setConsultaconso] = useState([]);

    const [combocodigo, setCombocodigo] = useState([]);

    const [comboloja, setComboloja] = useState([]);



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


    useEffect(() => {
        api.get(`combocodigo/${for_cod}/`).then(response => {
            setCombocodigo(response.data)
        })
    }, [for_cod]);

    useEffect(() => {
        api.get(`comboloja/`).then(response => {
            setComboloja(response.data)
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

    const onChange50 = selectDateFim => {
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
   // console.log( [datainicial, datafinal, value])

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

    const fetchRequest10 = useCallback(() => {
        api.get(`todositensporcodigoloja/${datainicial}/${datafinal}/${value}`).then(response => {
            setTodositensporcodigoloja(response.data)
          
        })
    }, [datainicial, datafinal,value]);


    const fetchRequest11 = useCallback(() => {
        api.get(`consultaconso/${datainicial}/${datafinal}/${for_cod}`).then(response => {
            setConsultaconso(response.data)
          
        })
    }, [datainicial, datafinal,for_cod]);








    function PDF1() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio1' })

/*
        var blobPDF =  new Blob([ pdf.output() ], { type : 'application/pdf'});
        var blobUrl = URL.createObjectURL(blobPDF);
        window.open(blobUrl);*/
      
        window.open(pdf.output('bloburl'), '_system');
   
      };




      
    function PDF2() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio2' })
      
        pdf.save('relatorio2.pdf');
      };

      function PDF3() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio3' })
      
        pdf.save('relatorio3.pdf');
      };

      function PDF4() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio4' })
      
        pdf.save('relatorio4.pdf');
      };

      function PDF5() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio5' })
      
        pdf.save('relatorio5.pdf');
      };

      function PDF6() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio6' })
      
        pdf.save('relatorio6.pdf');
      };

      function PDF7() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio7' })
      
        pdf.save('relatorio7.pdf');
      };

      function PDF8() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio8' })
      
        pdf.save('relatorio8.pdf');
      };

      function PDF9() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio9' })
      
        pdf.save('relatorio9.pdf');
      };

      function PDF10() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio10' })
      
        pdf.save('relatorio10.pdf');
      };

      function PDF11() {
        var pdf = new jsPDF();
       
      
        pdf.autoTable({ html: '#relatorio11' })
      
        pdf.save('relatorio11.pdf');
      };


         

    return ( 
        <div >  
            <center className="centrocentro">   
                <FormGroup id='formselect' >
                    <Label for="exampleSelect" className="labelSelect">Tipos de Consultas</Label>
                        <Input type="select" name="select" id="select" >
                            <option value='#div100'>Selecione Uma Opção de Consulta</option>
                            <option value='#div1'>Todos os codigos Geral</option>
                            <option value='#div2'>Por codigo Geral</option>
                            <option value='#div3'>Por item Geral</option>
                            <option value='#div4'>Por item tamanhos</option>
                            <option value='#div5'>Por item loja</option>
                            <option value='#div6'>Acumulado por loja geral</option>
                            <option value='#div7'>Acumulado por loja (filtro por loja)</option>
                            <option value='#div8'>Codigo e loja</option>
                            <option value='#div9'>Codigo, loja e Referencia</option>
                            <option value='#div10'>Todos produtos por codigo e loja</option>
                            <option value='#div11'>Consulta Consolidada de Vendas</option>
                        </Input>
                </FormGroup>
            </center> 
      


    <div id='pai'>
        <div id='div1' className="hide">    
            <Row>
                {/*FILTRO*/}  
                <Col sm={4}>
                    <div className = "blocotabela">
                        <Form className = "cardFornecedor">
                            <Row>
                                <Col sm={12}> 
                                    <Label className="title-card"> Todos os codigos Geral </Label>            
                                </Col>
                            </Row> 
                            <Row>  
                                <Col sm={6} id="dateInput">
                                    <DatePicker 
                                        placeholderText='De:' 
                                        id="data"  
                                        onChange = { onChange } 
                                        selected = { selectDateIni } 
                                        locale= { ptBR } 
                                        dateFormat="P"
                                        withPortal
                                        type='reset'
                                    />
                                </Col>
                                <Col sm={6} id="dateInput1">
                                    <DatePicker 
                                        placeholderText='Até:' 
                                        id="data1" 
                                        onChange = { onChange1 } 
                                        selected = { selectDateFim }
                                        locale= { ptBR } 
                                        dateFormat="P"
                                        withPortal
                                        type='reset'
                                    /> 
                                </Col>
                            </Row>

                            <Row className="enter"> 
                                <Col sm={6}>  
                                    <FormGroup className="group-buttons1">
                                        <Button className = "buttonFiltrar"  onClick={fetchRequest} > Filtrar </Button> 
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>  
                                    <FormGroup className="group-buttons-imprimir">
                                        <Button className = "buttonImprimir" onClick={PDF1}>Baixar PDF</Button> 
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                        <ReactHTMLTableToExcel
                                            id="test-table-xls-button"
                                            className="download-table-xls-button"
                                            table="relatorio1"
                                            filename="tablexls"
                                            sheet="tablexls"
                                            buttonText="Baixar Excel"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
               
              
                
                {/*TABELA*/}
                <Col sm={8}>

                <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>NOME FOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COD. FOR.</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTDE. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO(V/E)</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL.ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeral.map((vendeestgeral, idx) => ( 
            <Rows  key={idx}  vendeestgeral={vendeestgeral}className = "cabecalho2">
              <Cell> { vendeestgeral.nome_fornecedor.substring(0,10) }</Cell>
              <Cell> { vendeestgeral.cod_fabricante }</Cell>
              <Cell>{ vendeestgeral.venda_total_venda }</Cell>
              <Cell>{ vendeestgeral.qtd_pecas_vendidas }</Cell>
              <Cell>{ vendeestgeral.giro }</Cell>
              <Cell>{ vendeestgeral.venda_total_estoque }</Cell>
              <Cell>{ vendeestgeral.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                    <div className='tabela hide'>
                        <Table id="relatorio1" >
                            <thead className="cabecalho" >
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
                            {vendeestgeral.map((vendeestgeral, idx) => ( 
                                <tbody key={idx}  vendeestgeral={vendeestgeral}className = "cabecalho2" >
                                    <tr>
                                        <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
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
                <Col sm={4}>
                    <div className = "blocotabela">
                        <Form className = "cardFornecedor" >
                            <Row>
                                <Col sm={12}> 
                                    <Label className="title-card"> Por codigo Geral </Label>            
                                </Col>
                            </Row> 
                            <Row>
                                <Col sm={6} id="dateInput">
                                        <DatePicker 
                                            placeholderText='De:' 
                                            id="data"  
                                            onChange = { onChange } 
                                            selected = { selectDateIni } 
                                            locale= { ptBR } 
                                            dateFormat="P"
                                            withPortal
                                        />
                                    </Col>
                                    <Col sm={6} id="dateInput1">
                                        <DatePicker 
                                            placeholderText='Até:' 
                                            id="data1" 
                                            onChange = { onChange1 } 
                                            selected = { selectDateFim }
                                            locale= { ptBR } 
                                            dateFormat="P"
                                            withPortal
                                        /> 
                                    </Col>

                            {/* <Col sm={2} md={6} lg={6} xl={6}>
                                    <Input type="select" name="select" id="select" >
                                        {combocodigo.map((combocodigo,idx) => ( 
                                        <option key = {idx}  name='codigofab'  onChange = { onChange2 } combocodigo={ combocodigo.for_cod } >{ combocodigo.for_cod+' - '+combocodigo.for_nom } </option>
                                        ))} 
                                    </Input>   
                                </Col>*/}

                                <Col sm={12}>
                                    <FormGroup className="revista">
                                        <Label for="revista" className="revistaLabel">Código</Label>
                                            <Input type="select" id="revista"  onChange={onChange2}>
                                                <option value='0'>SELECIONE OPÇÃO</option>
                                                    {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                                    ))} 
                                            </Input>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className="enter"> 
                                <Col sm={6}>  
                                    <FormGroup className="group-buttons1">
                                        <Button className = "buttonFiltrar"  onClick={fetchRequest2} sm={12} > Filtrar </Button> 
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>  
                                    <FormGroup className="group-buttons-imprimir">
                                        <Button className = "buttonImprimir"  sm={12} onClick={PDF2}>Baixar PDF</Button> 
                                    </FormGroup>
                                </Col>
                                <Col sm={6}>
                                    <FormGroup>
                                            <ReactHTMLTableToExcel
                                                id="test-table-xls-button"
                                                className="download-table-xls-button"
                                                table="relatorio2"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Col>
                  

                  
                <Col sm={8} >
                    
                <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>NOME FOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COD. FOR.</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTDE. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO(V/E)</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL.ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeralteste.map((vendeestgeralteste, idx) => ( 
            <Rows  key={idx}  vendeestgeral={vendeestgeralteste}className = "cabecalho2">
              <Cell> { vendeestgeralteste.nome_fornecedor.substring(0,10) }</Cell>
              <Cell> { vendeestgeralteste.cod_fabricante }</Cell>
              <Cell>{ vendeestgeralteste.venda_total_venda }</Cell>
              <Cell>{ vendeestgeralteste.qtd_pecas_vendidas }</Cell>
              <Cell>{ vendeestgeralteste.giro }</Cell>
              <Cell>{ vendeestgeralteste.venda_total_estoque }</Cell>
              <Cell>{ vendeestgeralteste.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                    <div className='tabela hide'>
                        <Table responsive id="relatorio2" >
                            <thead className="cabecalho" fixed>
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

                            {vendeestgeralteste.map((vendeestgeralteste,idx) => ( 
                            <tbody key = {idx}  vendeestgeralteste={ vendeestgeralteste }className = "cabecalho2" >
                                <tr>
                                <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Por item Geral </Label>            
                            </Col>
                        </Row> 
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>

                            <Col sm={12}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel">Código</Label>
                                        <Input type="select" id="revista"  onChange={onChange2}>
                                            <option value='0'>SELECIONE OPÇÃO</option>
                                        {combocodigo.map(combocodigo => (
                                        
                                            <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                        
                                        ))} 
                                        </Input>
                                </FormGroup>
                             </Col>
                        </Row> 
      
                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest3} sm={12} > Filtrar </Button> 
                            </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF3}>Baixar PDF</Button> 
                                    </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup>
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio3"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>
           
            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>NOME PRODUTO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>Nº PRODUTO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>REVISTA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PAGINA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>REF. FORNECEDOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PREÇO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeralitem.map((vendeestgeralitem, idx) => ( 
            <Rows  key={idx}  vendeestgeralitem={vendeestgeralitem}className = "cabecalho2">
              <Cell> { vendeestgeralitem.produtos_descricao.substring(0,10) }</Cell>
              <Cell> { vendeestgeralitem.num_produto }</Cell>
              <Cell>{ vendeestgeralitem.nome_revista }</Cell>
              <Cell>{ vendeestgeralitem.produtos_pagina }</Cell>
              <Cell>{ vendeestgeralitem.produtos_reffor }</Cell>
              <Cell>{ vendeestgeralitem.preco_cheio1 }</Cell>
              <Cell>{ vendeestgeralitem.venda_total_venda} </Cell>
              <Cell>{ vendeestgeralitem.qtd_pecas_vendidas} </Cell>
              <Cell>{ vendeestgeralitem.giro} </Cell>
              <Cell>{ vendeestgeralitem.venda_total_estoque} </Cell>
              <Cell>{ vendeestgeralitem.qtd_estoque} </Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio3" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> NOME PRODUTO </th> 
                            <th> Nº PRODUTO </th> 
                            <th> REVISTA </th> 
                            <th> PAGINA </th> 
                            <th> REF. FORNECEDOR </th> 
                            <th> PREÇO </th> 
                            <th> VAL. VENDA </th>
                            <th> ENDA </th>
                            <th> GIQTD.VRO </th>
                            <th> VAL. ESTOQUE</th>
                            <th> QTD. ESTOQUE </th>
                            </tr> 
                        </thead> 
                        {vendeestgeralitem.map((vendeestgeralitem,idx) => ( 
                            <tbody key = {idx} vendeestgeralitem={ vendeestgeralitem }
                            className = "cabecalho2" >
                            <tr>
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { vendeestgeralitem.produtos_descricao }</td> 
                            <td> { vendeestgeralitem.num_produto }</td> 
                            <td> { vendeestgeralitem.nome_revista }</td> 
                            <td> { vendeestgeralitem.produtos_pagina } </td> 
                            <td> { vendeestgeralitem.produtos_reffor }</td> 
                            <td> { vendeestgeralitem.preco_cheio1 }</td> 
                            <td> { vendeestgeralitem.venda_total_venda }</td> 
                            <td> { vendeestgeralitem.qtd_pecas_vendidas }</td> 
                            <td> { vendeestgeralitem.giro }</td>
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Por item tamanhos </Label>            
                            </Col>
                        </Row> 
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>
                  
                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel2">Código</Label>
                                    <Input type="select" id="revista2"  onChange={onChange2}>
                                        <option value='0'>SELECIONE OPÇÃO</option>
                                        {combocodigo.map(combocodigo => (
                                            <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                        ))} 
                                    </Input>
                                </FormGroup>
                            </Col>
                            
                            <Col sm={6}>
                                <Label for="revista" className="referenciaLabel2">Referência</Label>
                                <Input type='text' name='codigopro' id="referencia2" onChange = { onChange4 }  placeholder="Código Produto"/>
                            </Col>
                        </Row> 
      
                        <Row className="enter"> 
                            <Col sm={6} >  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest4} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF4}>Baixar PDF</Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup>
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio4"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            
                </Col>
            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>TAMANHO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>Nº ITEM</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PREÇO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeralitemtam.map((vendeestgeralitemtam, idx) => ( 
            <Rows  key={idx}  vendeestgeralitemtam={vendeestgeralitemtam}className = "cabecalho2">
              <Cell> { vendeestgeralitemtam.tam_nom.substring(0,10) }</Cell>
              <Cell> { vendeestgeralitemtam.procor_descricao_cor }</Cell>
              <Cell>{ vendeestgeralitemtam.num_produto }</Cell>
              <Cell>{ vendeestgeralitemtam.preco_cheio1 }</Cell>
              <Cell>{ vendeestgeralitemtam.venda_total_venda} </Cell>
              <Cell>{ vendeestgeralitemtam.qtd_pecas_vendidas} </Cell>
              <Cell>{ vendeestgeralitemtam.giro} </Cell>
              <Cell>{ vendeestgeralitemtam.venda_total_estoque} </Cell>
              <Cell>{ vendeestgeralitemtam.qtd_estoque} </Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio4" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> TAMANHO </th> 
                            <th> COR </th> 
                            <th> Nº ITEM </th> 
                            <th> PREÇO </th> 
                            <th> VAL.VENDA </th> 
                            <th> QTD.VENDA </th> 
                            <th> GIRO </th>
                            <th> VAL.ESTOQUE </th>
                            <th> QTD.ESTOQUE </th>
                            </tr> 
                        </thead> 
                        {vendeestgeralitemtam.map((vendeestgeralitemtam,idx) => ( 
                        <tbody key = {idx} vendeestgeralitemtam={ vendeestgeralitemtam}
                            className = "cabecalho2" >
                            <tr>
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { vendeestgeralitemtam.tam_nom }</td> 
                            <td> { vendeestgeralitemtam.procor_descricao_cor }</td> 
                            <td> { vendeestgeralitemtam.num_produto }</td> 
                            <td> { vendeestgeralitemtam.preco_cheio1 } </td> 
                            <td> { vendeestgeralitemtam.venda_total_venda }</td> 
                            <td> { vendeestgeralitemtam.qtd_pecas_vendidas }</td> 
                            <td> { vendeestgeralitemtam.giro }</td> 
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Por item Loja </Label>            
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>
                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel3">Código</Label>
                                        <Input type="select" id="revista3"  onChange={onChange2}>
                                            <option value='0'>SELECIONE OPÇÃO</option>
                                            {combocodigo.map(combocodigo => (
                                                <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                            ))} 
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <Label for="revista" className="referenciaLabel3">Referência</Label>
                                <Input type='text' name='codigopro' id="referencia3" onChange = { onChange4 } placeholder="Código Produto"/>
                            </Col>
                        </Row> 
      
                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest5} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                                <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF5}>Baixar PDF</Button>
                                </FormGroup>
                                </Col>
                                <Col sm={6}>
                                <FormGroup> 
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio5"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>
          

            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
            <Cell style={{background: '#007bff', color: 'white'}}>LOJA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>TAMANHO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>Nº ITEM</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PREÇO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeralitemloja.map((vendeestgeralitemloja, idx) => ( 
            <Rows  key={idx}  vendeestgeralitemloja={vendeestgeralitemloja}className = "cabecalho2">
              <Cell> { vendeestgeralitemloja.lojas_nome.substring(0,10) }</Cell>
              <Cell> { vendeestgeralitemloja.tam_nom }</Cell>
              <Cell> { vendeestgeralitemloja.procor_descricao_cor }</Cell>
              <Cell>{ vendeestgeralitemloja.num_produto }</Cell>
              <Cell>{ vendeestgeralitemloja.preco_cheio1 }</Cell>
              <Cell>{ vendeestgeralitemloja.venda_total_venda} </Cell>
              <Cell>{ vendeestgeralitemloja.qtd_pecas_vendidas} </Cell>
              <Cell>{ vendeestgeralitemloja.giro} </Cell>
              <Cell>{ vendeestgeralitemloja.venda_total_estoque} </Cell>
              <Cell>{ vendeestgeralitemloja.qtd_estoque} </Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio5" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> LOJA </th> 
                            <th> TAMANHO </th> 
                            <th> COR </th> 
                            <th> Nº ITEM </th> 
                            <th> PREÇO </th> 
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
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { vendeestgeralitemloja.lojas_nome }</td> 
                            <td> { vendeestgeralitemloja.tam_nom }</td> 
                            <td> { vendeestgeralitemloja.procor_descricao_cor }</td> 
                            <td> { vendeestgeralitemloja.num_produto } </td> 
                            <td> { vendeestgeralitemloja.preco_cheio1 }</td> 
                        
                            <td> { vendeestgeralitemloja.venda_total_venda }</td> 
                            <td> { vendeestgeralitemloja.qtd_pecas_vendidas }</td> 
                            <td> { vendeestgeralitemloja.giro }</td> 
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Acumulado por loja geral</Label>            
                            </Col>
                        </Row> 
                        <Row>
                            <Col sm={6} id="dateInput">
                                    <DatePicker 
                                        placeholderText='De:' 
                                        id="data"  
                                        onChange = { onChange } 
                                        selected = { selectDateIni } 
                                        locale= { ptBR } 
                                        dateFormat="P"
                                        withPortal
                                    />
                                </Col>
                                <Col sm={6} id="dateInput1">
                                    <DatePicker 
                                        placeholderText='Até:' 
                                        id="data1" 
                                        onChange = { onChange1 } 
                                        selected = { selectDateFim }
                                        locale= { ptBR } 
                                        dateFormat="P"
                                        withPortal
                                /> 
                            </Col>
                        </Row> 

                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest6} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup>
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF6}>Baixar PDF</Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio6"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>
           
              

            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>NOME FOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>LOJA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTDE. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO(V/E)</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL.ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeralacumloja.map((vendeestgeralacumloja, idx) => ( 
            <Rows  key={idx}  vendeestgeralacumloja={vendeestgeralacumloja}className = "cabecalho2">
              <Cell> { vendeestgeralacumloja.nomefabrica.substring(0,10) }</Cell>
              <Cell> { vendeestgeralacumloja.lojas_nome }</Cell>
              <Cell>{ vendeestgeralacumloja.venda_total_venda }</Cell>
              <Cell>{ vendeestgeralacumloja.qtd_pecas_vendidas }</Cell>
              <Cell>{ vendeestgeralacumloja.giro }</Cell>
              <Cell>{ vendeestgeralacumloja.venda_total_estoque }</Cell>
              <Cell>{ vendeestgeralacumloja.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>

                <div className='tabela hide'>
                    <Table responsive id="relatorio6" >
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
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { vendeestgeralacumloja.nomefabrica }</td> 
                            <td> { vendeestgeralacumloja.lojas_nome }</td> 
            
                
                            <td> { vendeestgeralacumloja.venda_total_venda }</td> 
                            <td> { vendeestgeralacumloja.qtd_pecas_vendidas }</td> 
                            <td> { vendeestgeralacumloja.giro }</td> 
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col> 
                                <Label className="title-card"> Acumulado por loja (filtro por loja)</Label>            
                            </Col>
                        </Row> 
                        <Row>
                            <Col sm={6} id="dateInput">
                                    <DatePicker 
                                        placeholderText='De:' 
                                        id="data"  
                                        onChange = { onChange } 
                                        selected = { selectDateIni } 
                                        locale= { ptBR } 
                                        dateFormat="P"
                                        withPortal
                                    />
                                </Col>
                                <Col sm={6} id="dateInput1">
                                    <DatePicker 
                                        placeholderText='Até:' 
                                        id="data1" 
                                        onChange = { onChange1 } 
                                        selected = { selectDateFim }
                                        locale= { ptBR } 
                                        dateFormat="P"
                                        withPortal
                                    /> 
                                </Col>
                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel4">Loja</Label>
                                    <Input type="select" id="revista4"  onChange={onChange5}>
                                        <option value='0'>SELECIONE OPÇÃO</option>
                                    {comboloja.map(comboloja => (
                                    <option key={comboloja.lojas_nome} value={comboloja.lojas_nome} > {comboloja.lojas_nome}  </option>
                                    ))} 
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row> 
      
                        <Row className="enter"> 
                            <Col sm={6} >  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest7} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF7}>Baixar PDF</Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio7"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>

     
                  
            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>NOME FOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COD. FOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTDE. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO(V/E)</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL.ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD.ESTOQUE</Cell>
  

            </Rows>
            {vendeestgeralacumlojaloja.map((vendeestgeralacumlojaloja, idx) => ( 
            <Rows  key={idx}  vendeestgeralacumlojaloja={vendeestgeralacumlojaloja}className = "cabecalho2">
              <Cell> { vendeestgeralacumlojaloja.nome_fornecedor.substring(0,10) }</Cell>
              <Cell> { vendeestgeralacumlojaloja.cod_fabricante }</Cell>
              <Cell>{ vendeestgeralacumlojaloja.venda_total_venda }</Cell>
              <Cell>{ vendeestgeralacumlojaloja.qtd_pecas_vendidas }</Cell>
              <Cell>{ vendeestgeralacumlojaloja.giro }</Cell>
              <Cell>{ vendeestgeralacumlojaloja.venda_total_estoque }</Cell>
              <Cell>{ vendeestgeralacumlojaloja.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio7" >
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
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { vendeestgeralacumlojaloja.nome_fornecedor }</td> 
                            <td> { vendeestgeralacumlojaloja.cod_fabricante }</td>          
                            <td> { vendeestgeralacumlojaloja.venda_total_venda }</td> 
                            <td> { vendeestgeralacumlojaloja.qtd_pecas_vendidas }</td> 
                            <td> { vendeestgeralacumlojaloja.giro }</td> 
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Codigo e Loja</Label>            
                            </Col>
                        </Row> 
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>

                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel5">Código</Label>
                                    <Input type="select" id="revista5"  onChange={onChange2}>
                                        <option value='0'>SELECIONE OPÇÃO</option>
                                            {combocodigo.map(combocodigo => (
                                        
                                                <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                        
                                        ))} 
                                    </Input>
                                </FormGroup>
                            </Col>


                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel6">Loja</Label>
                                    <Input type="select" id="revista6"  onChange={onChange5}>
                                        <option value='0'>SELECIONE OPÇÃO</option>
                                            {comboloja.map(comboloja => (
                                    
                                                <option key={comboloja.lojas_nome} value={comboloja.lojas_nome} > {comboloja.lojas_nome}  </option>
                                    
                                        ))} 
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row> 
      
                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest8} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF8}>Baixar PDF</Button>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>        
                                <FormGroup> 
                                <ReactHTMLTableToExcel
                                    id="test-table-xls-button"
                                    className="download-table-xls-button"
                                    table="relatorio8"
                                    filename="tablexls"
                                    sheet="tablexls"
                                    buttonText="Baixar Excel"/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>

           
                  
            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>NOME PRODUTO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>Nº PRODUTO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>REVISTA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PAGINA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>REF. FORNECEDOR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PREÇO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. ESTOQUE</Cell>

                              
  

            </Rows>
            {vendeestgeralacumlojalojaloja.map((vendeestgeralacumlojalojaloja, idx) => ( 
            <Rows  key={idx}  vendeestgeralacumlojalojaloja={vendeestgeralacumlojalojaloja}className = "cabecalho2">
              <Cell> { vendeestgeralacumlojalojaloja.produtos_descricao.substring(0,10) }</Cell>
              <Cell> { vendeestgeralacumlojalojaloja.num_produto }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.nome_revista }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.produtos_pagina }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.produtos_reffor }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.preco_cheio1 }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.venda_total_venda }</Cell>

              <Cell>{ vendeestgeralacumlojalojaloja.qtd_pecas_vendidas }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.giro }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.venda_total_estoque }</Cell>
              <Cell>{ vendeestgeralacumlojalojaloja.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
      
                <div className='tabela hide'>
                    <Table responsive id="relatorio8" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> NOME PRODUTO </th> 
                            <th> Nº PRODUTO </th> 
                            <th> REVISTA </th> 
                            <th> PAGINA </th> 
                            <th> REF. FORNECEDOR </th>
                            <th> PREÇO </th>
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
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { vendeestgeralacumlojalojaloja.cod_fabricante }</td> 
                            <td> { vendeestgeralacumlojalojaloja.num_produto }</td>          
                            <td> { vendeestgeralacumlojalojaloja.nome_revista }</td> 
                            <td> { vendeestgeralacumlojalojaloja.produtos_pagina }</td> 
                            <td> { vendeestgeralacumlojalojaloja.produtos_reffor }</td> 
                            <td> { vendeestgeralacumlojalojaloja.preco_cheio1 }</td> 
                            <td> { vendeestgeralacumlojalojaloja.venda_total_venda }</td> 

                            <td> { vendeestgeralacumlojalojaloja.qtd_pecas_vendidas }</td>          
                            <td> { vendeestgeralacumlojalojaloja.giro }</td> 
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
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={8}> 
                                <Label className="title-card"> Codigo, Loja e Referencia </Label>            
                            </Col>
                        </Row> 
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>
                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel7">Código</Label>
                                    <Input type="select" id="revista7"  onChange={onChange2}>
                                        <option value='0'>SELECIONE OPÇÃO</option>
                                            {combocodigo.map(combocodigo => (
                                        
                                                <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                        
                                            ))} 
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col sm={6}>
                                <FormGroup className="revista">
                                    <Label for="revista" className="revistaLabel8">Loja</Label>
                                    <Input type="select" id="revista8"  onChange={onChange5}>
                                        <option value='0'>SELECIONE OPÇÃO</option>
                                        {comboloja.map(comboloja => (
                                        
                                            <option key={comboloja.lojas_nome} value={comboloja.lojas_nome} > {comboloja.lojas_nome}  </option>
                                        
                                        ))} 
                                    </Input>
                                </FormGroup>
                            </Col>

                            <Col sm={6}>
                                <Label for="revista" className="revistaLabel9">Referência</Label>
                                <Input className="enter" type='text' id="revista9" name='produtos_reffor' onChange = { onChange4 } placeholder="Referência" />
                            </Col>
                        </Row> 
            
                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest9} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF9}>Baixar PDF</Button>
                                </FormGroup>
                            </Col>
                            <Col sm={6}>        
                                <FormGroup>        
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio9"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                   </Form>
                 </div>
            </Col>
        
                  
            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>LOJA </Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>TAMANHO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>Nº ITEM</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PREÇO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. ESTOQUE</Cell>


      
  

            </Rows>
            {vendeestgeralacumloja4.map((vendeestgeralacumloja4, idx) => ( 
            <Rows  key={idx}  vendeestgeralacumloja4={vendeestgeralacumloja4}className = "cabecalho2">
              <Cell> { vendeestgeralacumloja4.lojas_nome.substring(0,10) }</Cell>
              <Cell> { vendeestgeralacumloja4.tam_nom }</Cell>
              <Cell>{ vendeestgeralacumloja4.procor_descricao_cor }</Cell>
              <Cell>{ vendeestgeralacumloja4.num_produto }</Cell>
              <Cell>{ vendeestgeralacumloja4.preco_cheio1 }</Cell>
              <Cell>{ vendeestgeralacumloja4.venda_total_venda }</Cell>

              <Cell>{ vendeestgeralacumloja4.qtd_pecas_vendidas }</Cell>
              <Cell>{ vendeestgeralacumloja4.giro }</Cell>
              <Cell>{ vendeestgeralacumloja4.venda_total_estoque }</Cell>
              <Cell>{ vendeestgeralacumloja4.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio9" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> LOJA </th> 
                            <th> TAMANHO </th> 
                            <th> COR </th> 
                            <th> Nº ITEM </th> 
                            <th> PREÇO </th> 
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
                            <th scope = "row" >  {(parseInt(idx) + 1)} </th> 
                            <td> { vendeestgeralacumloja4.lojas_nome }</td> 
                            <td> { vendeestgeralacumloja4.tam_nom }</td> 
                            <td> { vendeestgeralacumloja4.procor_descricao_cor }</td> 
                            <td> { vendeestgeralacumloja4.num_produto} </td> 
                            <td> { vendeestgeralacumloja4.preco_cheio1 }</td> 
                            <td> { vendeestgeralacumloja4.venda_total_venda }</td> 
                            <td> { vendeestgeralacumloja4.qtd_pecas_vendidas}</td> 
                            <td> { vendeestgeralacumloja4.giro}</td> 
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

    <div id='div10' className="hide">
        <Row>
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Todos produtos por codigo e loja </Label>            
                            </Col>
                        </Row> 
      
      
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>
                            <Col sm={6}>
                                    <FormGroup className="revista">
                                        <Label for="revista" className="revistaLabel10">Código</Label>
                                        <Input type="select" id="revista10"  onChange={onChange2}>
                                            <option value='0'>SELECIONE OPÇÃO</option>
                                                {combocodigo.map(combocodigo => (
                                        
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod+' - '+combocodigo.for_nom}  </option>
                                        
                                            ))} 
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row> 
                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest10} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF10}>Baixar PDF</Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio10"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>

            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>LOJA </Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>TAMANHO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COR</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>Nº ITEM</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PREÇO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. VENDA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>GIRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>VAL. ESTOQUE</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTD. ESTOQUE</Cell>


      
  

            </Rows>
            {todositensporcodigoloja.map((todositensporcodigoloja, idx) => ( 
            <Rows  key={idx}  todositensporcodigoloja={todositensporcodigoloja}className = "cabecalho2">
              <Cell> { todositensporcodigoloja.lojas_nome.substring(0,10) }</Cell>
              <Cell> { todositensporcodigoloja.tam_nom }</Cell>
              <Cell>{ todositensporcodigoloja.procor_descricao_cor }</Cell>
              <Cell>{ todositensporcodigoloja.num_produto }</Cell>
              <Cell>{ todositensporcodigoloja.preco_cheio1 }</Cell>
              <Cell>{ todositensporcodigoloja.venda_total_venda }</Cell>

              <Cell>{ todositensporcodigoloja.qtd_pecas_vendidas }</Cell>
              <Cell>{ todositensporcodigoloja.giro }</Cell>
              <Cell>{ todositensporcodigoloja.venda_total_estoque }</Cell>
              <Cell>{ todositensporcodigoloja.qtd_estoque }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio10" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> LOJA </th> 
                            <th> TAMANHO </th> 
                            <th> COR </th> 
                            <th> Nº ITEM </th> 
                            <th> PREÇO </th> 
                            <th> VAL. VENDA </th>
                            <th> QTD. VENDA </th>
                            <th> GIRO </th>
                            <th> VAL. ESTOQUE </th>
                            <th> QTD. ESTOQUE </th>

                            </tr> 
                        </thead> 
                        {todositensporcodigoloja.map((todositensporcodigoloja, idx) => ( 
                        <tbody key={idx} vendeestgeralitemloja={todositensporcodigoloja}  className = "cabecalho2" >
                            <tr>
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { todositensporcodigoloja.lojas_nome }</td> 
                            <td> { todositensporcodigoloja.tam_nom }</td> 
                            <td> { todositensporcodigoloja.procor_descricao_cor }</td> 
                            <td> { todositensporcodigoloja.num_produto } </td> 
                            <td> { todositensporcodigoloja.preco_cheio1 }</td> 
                        
                            <td> { todositensporcodigoloja.venda_total_venda }</td> 
                            <td> { todositensporcodigoloja.qtd_pecas_vendidas }</td> 
                            <td> { todositensporcodigoloja.giro }</td> 
                            <td> { todositensporcodigoloja.venda_total_estoque }</td> 
                            <td> { todositensporcodigoloja.qtd_estoque }</td>
                            </tr>
                        </tbody>
                        ))} 
                    </Table>                  
                </div>
            </Col>
        </Row>
    </div> 










    <div id='div11' className="hide">
        <Row>
            <Col sm={4}>
                <div className = "blocotabela">
                    <Form className = "cardFornecedor" >
                        <Row>
                            <Col sm={12}> 
                                <Label className="title-card"> Consulta Consolidada Vendas </Label>            
                            </Col>
                        </Row> 
      
      
                        <Row>
                            <Col sm={6} id="dateInput">
                                <DatePicker 
                                    placeholderText='De:' 
                                    id="data"  
                                    onChange = { onChange } 
                                    selected = { selectDateIni } 
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                />
                            </Col>
                            <Col sm={6} id="dateInput1">
                                <DatePicker 
                                    placeholderText='Até:' 
                                    id="data1" 
                                    onChange = { onChange1 } 
                                    selected = { selectDateFim }
                                    locale= { ptBR } 
                                    dateFormat="P"
                                    withPortal
                                /> 
                            </Col>
     
                        </Row> 
                        <Row className="enter"> 
                            <Col sm={6}>  
                                <FormGroup className="group-buttons1">
                                    <Button className = "buttonFiltrar"  onClick={fetchRequest11} sm={12} > Filtrar </Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>  
                                <FormGroup className="group-buttons-imprimir">
                                    <Button className = "buttonImprimir" sm={12} onClick={PDF11}>Baixar PDF</Button> 
                                </FormGroup>
                            </Col>
                            <Col sm={6}>
                                <FormGroup>
                                    <ReactHTMLTableToExcel
                                        id="test-table-xls-button"
                                        className="download-table-xls-button"
                                        table="relatorio11"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Col>

            <Col sm={8}>

            <div>
        <div style={{width: '111%', height: '400px',margin: '0 -15% 0% 3%'}}>
          <StickyTable>
            <Rows>
              <Cell style={{background: '#007bff', color: 'white'}}>ANO </Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>MES</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>DOCUMENTO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QUINZENA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>COD. FAB</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>REVISTA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>FABPRO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PAGINA</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>PRODUTO</Cell>
              <Cell style={{background: '#007bff', color: 'white'}}>QTDE</Cell>


      
  

            </Rows>
            {consultaconso.map((consultaconso, idx) => ( 
            <Rows  key={idx}  consultaconso={consultaconso}className = "cabecalho2">
              <Cell> { consultaconso.ano}</Cell>
              <Cell> { consultaconso.mes }</Cell>
              <Cell>{ consultaconso.documento }</Cell>
              <Cell>{ consultaconso.quinzena }</Cell>
              <Cell>{ consultaconso.codigofabricante }</Cell>
              <Cell>{ consultaconso.nome_revista }</Cell>

              <Cell>{ consultaconso.fabpro }</Cell>
              <Cell>{ consultaconso.produtos_pagina }</Cell>
              <Cell>{ consultaconso.produto }</Cell>
              <Cell>{ consultaconso.sum }</Cell>
  
            </Rows> ))}
          
 
          </StickyTable>
        </div>
      </div>
                <div className='tabela hide'>
                    <Table responsive id="relatorio11" >
                        <thead className="cabecalho">
                            <tr>
                            <th> # </th> 
                            <th> ANO </th> 
                            <th> MES </th> 
                            <th> DOCUMENTO </th> 
                            <th> QUINZENA</th> 
                            <th> COD. FABRICANTE </th> 
                            <th> NOME REVISTA </th>
                            <th> FABPRO </th>
                            <th> PAGINA </th>
                            <th> PRODUTO </th>
                            <th> QTDE </th>

                            </tr> 
                        </thead> 
                        {consultaconso.map((consultaconso, idx) => ( 
                        <tbody key={idx} consultaconso={consultaconso}  className = "cabecalho2" >
                            <tr>
                            <th scope = "row" > {(parseInt(idx) + 1)}  </th> 
                            <td> { consultaconso.ano }</td> 
                            <td> { consultaconso.mes }</td> 
                            <td> { consultaconso.documento }</td> 
                            <td> { consultaconso.quinzena } </td> 
                            <td> { consultaconso.codigofabricante }</td> 
                        
                            <td> { consultaconso.nome_revista }</td> 
                            <td> { consultaconso.fabpro }</td> 
                            <td> { consultaconso.produtos_pagina }</td> 
                            <td> { consultaconso.produto }</td> 
                            <td> { consultaconso.sum }</td>
                            </tr>
                        </tbody>
                        ))} 
                    </Table>                  
                </div>
            </Col>
        </Row>
    </div> 

          
    <div id='div100' className="hide">
                  
               
    </div> 

          
    </div> 
    </div> 
    


)
}

export default TabelaFornecedor;