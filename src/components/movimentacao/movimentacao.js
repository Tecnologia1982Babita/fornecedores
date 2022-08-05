import React, { useState, useCallback, useEffect } from 'react';
import { Card, FormGroup, Label, Input, Table } from 'reactstrap';
import MenuSuperior from '../menuSuperior/MenuSuperior';
import api from '../../api'
import $ from "jquery";
import { ptBR } from 'date-fns/locale'
import DatePicker from "react-datepicker";
import moment from 'moment';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { StickyTable, Cell, Rows } from 'react-sticky-table';
import { Container, Corpo, Devolu, Pedido, Troca } from './Container';



import { TextField, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';



const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black"
        },
        "& label": {
            color: "black"
        },
        "& .MuiInput-underline:before": {
            borderBottomColor: "black"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "black"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "black"
            },
            "&:hover fieldset": {
                borderColor: "black"
            },
            "&.Mui-focused fieldset": {
                borderColor: "black"
            }
        }
    }
})(TextField);

const Movimentacao = (props) => {
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
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    }

    const [combocodigo, setCombocodigo] = useState([]);
    const [combocodigosele, setCombocodigosele] = useState([]);
    const [combocodigosele2, setCombocodigosele2] = useState([]);
    const [combocodigosele3, setCombocodigosele3] = useState([]);
    const [combocodigosele4, setCombocodigosele4] = useState([]);
    const [combocodigosele5, setCombocodigosele5] = useState([]);
    const [combocodigosele6, setCombocodigosele6] = useState([]);
    const [combocodigosele7, setCombocodigosele7] = useState([]);
    const [combocodigosele8, setCombocodigosele8] = useState([]);
    const [combocodigosele9, setCombocodigosele9] = useState([]);
    const [combocodigosele10, setCombocodigosele10] = useState([]);
    const [combocodigosele11, setCombocodigosele11] = useState([]);
    const [combocodigosele12, setCombocodigosele12] = useState([]);

    const for_cod = localStorage.getItem('for_cod')
    const [entcard, setEntcard] = useState([]);
    const [pedcard, setPedcard] = useState([]);
    const [trocard, setTrocard] = useState([]);
    const [dfcard, setDfcard] = useState([]);
    const [tabela, setTabela] = useState([]);
    const [tabela2, setTabela2] = useState([]);
    const [tabela3, setTabela3] = useState([]);
    const [tabela4, setTabela4] = useState([]);
    const [tabela5, setTabela5] = useState([]);
    const [tabela6, setTabela6] = useState([]);
    const [tabela7, setTabela7] = useState([]);
    const [tabela8, setTabela8] = useState([]);
    const [tabela9, setTabela9] = useState([]);
    const [tabela10, setTabela10] = useState([]);
    const [tabela11, setTabela11] = useState([]);
    const [tabela12, setTabela12] = useState([]);

    useEffect(() => {
        api.get(`combocodigo/${for_cod}/`).then(response => {
            setCombocodigo(response.data)

        })
    }, [for_cod]);

    {/*Cards */ }
    useEffect(() => {
        api.get(`totitement/${hoje().bd}/${hoje().bd}/${for_cod}/`).then(response => {
            setEntcard(response.data)
            console.log(for_cod, hoje().bd)
        })
    }, [for_cod]);
    useEffect(() => {
        api.get(`totitempe/${hoje().bd}/${hoje().bd}/${for_cod}/`).then(response => {
            setPedcard(response.data)
        })
    }, [for_cod]);
    useEffect(() => {
        api.get(`totitemtr/${hoje().bd}/${hoje().bd}/${for_cod}/`).then(response => {
            setTrocard(response.data)
        })
    }, [for_cod]);
    useEffect(() => {
        api.get(`totitemdff/${hoje().bd}/${hoje().bd}/${for_cod}/`).then(response => {
            setDfcard(response.data)
        })
    }, [for_cod]);


    {/*selects*/ }
    const [isActive, setIsActive] = useState(false);

    function onChange1(ev) {
        const { name, value } = ev.target;
        setCombocodigosele(value);
        if (ev !== '') {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    const [isActive1, setIsActive1] = useState(false);

    function onChange27(ev) {
        const { name, value } = ev.target;
        setCombocodigosele2(value);
        if (ev !== '') {
            setIsActive1(true);
        } else {
            setIsActive1(false);
        }
    }
    const [isActive2, setIsActive2] = useState(false);

    function onChange28(ev) {
        const { name, value } = ev.target;
        setCombocodigosele3(value);
        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }
    const [isActive3, setIsActive3] = useState(false);

    function onChange29(ev) {
        const { name, value } = ev.target;
        setCombocodigosele4(value);
        if (ev !== '') {
            setIsActive3(true);
        } else {
            setIsActive3(false);
        }
    }
    const [isActive4, setIsActive4] = useState(false);

    function onChange30(ev) {
        const { name, value } = ev.target;
        setCombocodigosele5(value);
        if (ev !== '') {
            setIsActive4(true);
        } else {
            setIsActive4(false);
        }
    }
    const [isActive5, setIsActive5] = useState(false);

    function onChange31(ev) {
        const { name, value } = ev.target;
        setCombocodigosele6(value);
        if (ev !== '') {
            setIsActive5(true);
        } else {
            setIsActive5(false);
        }
    } const [isActive6, setIsActive6] = useState(false);

    function onChange32(ev) {
        const { name, value } = ev.target;
        setCombocodigosele7(value);
        if (ev !== '') {
            setIsActive6(true);
        } else {
            setIsActive6(false);
        }
    }

    const [isActive7, setIsActive7] = useState(false);

    function onChange33(ev) {
        const { name, value } = ev.target;
        setCombocodigosele8(value);
        if (ev !== '') {
            setIsActive7(true);
        } else {
            setIsActive7(false);
        }
    }

    const [isActive8, setIsActive8] = useState(false);

    function onChange34(ev) {
        const { name, value } = ev.target;
        setCombocodigosele9(value);
        if (ev !== '') {
            setIsActive8(true);
        } else {
            setIsActive8(false);
        }
    }

    const [isActive9, setIsActive9] = useState(false);

    function onChange35(ev) {
        const { name, value } = ev.target;
        setCombocodigosele10(value);
        if (ev !== '') {
            setIsActive9(true);
        } else {
            setIsActive9(false);
        }
    }

    const [isActive10, setIsActive10] = useState(false);

    function onChange36(ev) {
        const { name, value } = ev.target;
        setCombocodigosele11(value);
        if (ev !== '') {
            setIsActive10(true);
        } else {
            setIsActive10(false);
        }
    }

    const [isActive11, setIsActive11] = useState(false);

    function onChange37(ev) {
        const { name, value } = ev.target;
        setCombocodigosele12(value);
        if (ev !== '') {
            setIsActive11(true);
        } else {
            setIsActive11(false);
        }
    }

    $('#opt').change(function () {
        var valor = $('#opt').val();
        $('#pai').children('div').hide();
        $('#pai').children(valor).show();
    });

    $('#opt1').change(function () {
        var valor = $('#opt1').val();
        $('#pai1').children('div').hide();
        $('#pai1').children(valor).show();
    });

    $('#opt2').change(function () {
        var valor = $('#opt2').val();
        $('#pai2').children('div').hide();
        $('#pai2').children(valor).show();
    });

    $('#opt3').change(function () {
        var valor = $('#opt3').val();
        $('#pai3').children('div').hide();
        $('#pai3').children(valor).show();
    });

    $('#opt4').change(function () {
        var valor = $('#opt4').val();
        $('#pai4').children('div').hide();
        $('#pai4').children(valor).show();
    });





    {/* datas */ }

    const [selectDateIni, setSelectDateIni] = useState(null);
    const onChange2 = selectDateIni => {
        setSelectDateIni(selectDateIni);
    }

    const [selectDateFim, setSelectDateFim] = useState(null);

    const onChange3 = selectDateFim => {
        setSelectDateFim(selectDateFim);
    }


    const datainicial = moment(selectDateIni).format("YYYYMMDD")
    const datafinal = moment(selectDateFim).format("YYYYMMDD")





    {/*Entradas */ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao = useCallback(() => {
        api.get(`totitementdcdt/${datainicial}/${datafinal}/${combocodigosele}/`).then(response => {
            setTabela(response.data)


        })
    }, [datainicial, datafinal, combocodigosele]);

    {/* Tabela por código */ }
    const tabelamovimentacao2 = useCallback(() => {
        console.log(tabelamovimentacao2);
        api.get(`totitementcod/${datainicial}/${datafinal}/${combocodigosele2}/`).then(response => {
            setTabela2(response.data)


        })
    }, [datainicial, datafinal, combocodigosele2]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao3 = useCallback(() => {
        api.get(`totitementdoc/${datainicial}/${datafinal}/${combocodigosele3}/`).then(response => {
            setTabela3(response.data)


        })
    }, [datainicial, datafinal, combocodigosele3]);

    {/*devoluções*/ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao4 = useCallback(() => {
        api.get(`totitemdffdcdt/${datainicial}/${datafinal}/${combocodigosele4}/`).then(response => {
            setTabela4(response.data)


        })
    }, [datainicial, datafinal, combocodigosele4]);

    {/* Tabela por código */ }
    const tabelamovimentacao5 = useCallback(() => {
        api.get(`totitemdffcod/${datainicial}/${datafinal}/${combocodigosele5}/`).then(response => {
            setTabela5(response.data)


        })
    }, [datainicial, datafinal, combocodigosele5]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao6 = useCallback(() => {
        api.get(`totitemdffdoc/${datainicial}/${datafinal}/${combocodigosele6}/`).then(response => {
            setTabela6(response.data)


        })
    }, [datainicial, datafinal, combocodigosele6]);

    {/*Pedidos */ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao7 = useCallback(() => {
        api.get(`totitempedcdt/${datainicial}/${datafinal}/${combocodigosele7}/`).then(response => {
            setTabela7(response.data)


        })
    }, [datainicial, datafinal, combocodigosele7]);

    {/* Tabela por código */ }
    const tabelamovimentacao8 = useCallback(() => {
        api.get(`totitempecod/${datainicial}/${datafinal}/${combocodigosele8}/`).then(response => {
            setTabela8(response.data)


        })
    }, [datainicial, datafinal, combocodigosele8]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao9 = useCallback(() => {
        api.get(`totitempedoc/${datainicial}/${datafinal}/${combocodigosele9}/`).then(response => {
            setTabela9(response.data)


        })
    }, [datainicial, datafinal, combocodigosele9]);

    {/*Troca */ }
    {/* Tabela todos os códigos */ }
    const tabelamovimentacao10 = useCallback(() => {
        api.get(`totitemtrdcdt/${datainicial}/${datafinal}/${combocodigosele10}/`).then(response => {
            setTabela10(response.data)


        })
    }, [datainicial, datafinal, combocodigosele10]);

    {/* Tabela por código */ }
    const tabelamovimentacao11 = useCallback(() => {
        api.get(`totitemtrcod/${datainicial}/${datafinal}/${combocodigosele11}/`).then(response => {
            setTabela11(response.data)


        })
    }, [datainicial, datafinal, combocodigosele11]);

    {/* Tabela por documento itens  */ }
    const tabelamovimentacao12 = useCallback(() => {
        api.get(`totitemtrdoc/${datainicial}/${datafinal}/${combocodigosele12}/`).then(response => {
            setTabela12(response.data)


        })
    }, [datainicial, datafinal, combocodigosele12]);

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
    function PDF12() {
        var pdf = new jsPDF();


        pdf.autoTable({ html: '#relatorio12' })

        pdf.save('relatorio12.pdf');
    };
    function PDF13() {
        var pdf = new jsPDF();


        pdf.autoTable({ html: '#relatorio13' })

        pdf.save('relatorio13.pdf');
    };


    return (
        <div>
            <MenuSuperior />
            <Container style={{ fontfamily: "Roboto, sans-serif" }}>
                {entcard.map(entcard => (
                    <Card key={entcard} className="Card1">
                        <h6>Entradas</h6>
                        <p><spam>Quantidade: {entcard.quantidade}</spam></p>
                        <p><spam>Total: {entcard.totalgeral}</spam></p>
                    </Card>
                ))}

                {pedcard.map(pedcard => (
                    <Card key={pedcard} className="Card2">
                        <h6>Pedidos</h6>
                        <p>Quantidade: {pedcard.quantidade}</p>
                        <p>Total: {pedcard.totalgeral}</p>
                    </Card>
                ))}

                {trocard.map(trocard => (
                    <Card key={trocard} className="Card3">
                        <h6>Troca</h6>
                        <p>Quantidade: {trocard.quantidade}</p>
                        <p>Total: {trocard.totalgeral}</p>
                    </Card>
                ))}

                {dfcard.map(dfcard => (
                    <Card key={dfcard} className="Card4">
                        <h6>Devolução</h6>
                        <p>Quantidade: {dfcard.quantidade}</p>
                        <p>Total: {dfcard.totalgeral}</p>
                    </Card>
                ))}


                <FormGroup className="Sele1" >
                    <Label style={{ color: '#696969' }}>Tipos de Consultas</Label>
                    <Input name="opt" id="opt" type="select">

                        <option value="#selecione">Selecione Opção</option>
                        <option value="#entrada">Entradas</option>
                        <option value="#devolucao">Devoluções</option>
                        <option value="#pedidos">Pedidos</option>
                        <option value="#troca">Troca</option>
                    </Input>
                </FormGroup>
            </Container>
            <Corpo >
                <div id="pai">
                    <div id="entrada" className="hide div2" >

                        <div>
                            <Input name="opt1" id="opt1" type="select"
                                className="Sele2"

                            >
                                <option selected disabled value="">Selecione Opção</option>
                                <option value="#entrada1">Todos os Código</option>
                                <option value="#entrada2">Por Código</option>
                                <option value="#entrada3">Por Documento Itens</option>
                            </Input>
                        </div>

                        {/* ENTRADAS */}
                        <div id="pai1" >
                            <div id="entrada1" className="hide">

                                <Card className="Card5" >
                                    <div>
                                        <DatePicker
                                            className='Campo'
                                            id="data"
                                            placeholderText='De:'
                                            onChange={onChange2}
                                            selected={selectDateIni}
                                            locale={ptBR}
                                            dateFormat="P"
                                            withPortal
                                            type='reset'
                                        />
                                        <DatePicker
                                            className='Campo'
                                            id="data"
                                            placeholderText='Até:'
                                            onChange={onChange3}
                                            selected={selectDateFim}
                                            locale={ptBR}
                                            dateFormat="P"
                                            withPortal
                                            type='reset'
                                        />
                                    </div>
                                    <Input
                                        type="select"
                                        name="select"
                                        id="select"
                                        className="Campo1"
                                        label="Buscar"
                                        style={{ width: '93%' }}
                                        onChange={onChange1}
                                    >
                                        <option selected disabled value="">Selecione Opção</option>
                                        {combocodigo.map(combocodigo => (
                                            <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                        ))}
                                    </Input>
                                    <div>
                                        <Button onClick={tabelamovimentacao} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                        <Button onClick={PDF2} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                    </div>
                                    {/* <Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                    <ReactHTMLTableToExcel
                                        className="Botao1"
                                        table="relatorio2"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />
                                </Card>

                                <div>
                                    {/*TABELA 1 TODOS OS CÓDIGOS*/}
                                    <StickyTable className="Tabela1">
                                        <Rows>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                        </Rows>
                                        {tabela.map((tabela, idx) => (
                                            <Rows key={idx} tabela={tabela}>
                                                <Cell>{tabela.documento}</Cell>
                                                <Cell>{tabela.data}</Cell>
                                                <Cell>{tabela.loja_origem}</Cell>
                                                <Cell>{tabela.quantidade}</Cell>
                                                <Cell>{tabela.totalgeral}</Cell>
                                            </Rows>
                                        ))}
                                    </StickyTable>
                                </div>

                            </div>
                            <div className='tabela hide'>
                                <Table responsive id="relatorio2" >
                                    <thead className="cabecalho" fixed>
                                        <tr>
                                            <th> DOCUMENTO </th>
                                            <th> DATA </th>
                                            <th> LOJA </th>
                                            <th> QUANTIDADE </th>
                                            <th> TOTAL GERAL </th>

                                        </tr>
                                    </thead>

                                    {tabela.map((tabela, idx) => (
                                        <tbody key={idx} tabela={tabela} className="cabecalho2" >
                                            <tr>

                                                <td> {tabela.documento}</td>
                                                <td> {tabela.data}</td>
                                                <td> {tabela.loja_origem}</td>
                                                <td> {tabela.quantidade}</td>
                                                <td> {tabela.totalgeral}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>


                            <div id="entrada2" className="hide">
                                <Card className="Card6" >
                                    <div>
                                        <DatePicker
                                            className='Campo'
                                            id='data'
                                            placeholderText='De:'
                                            onChange={onChange2}
                                            selected={selectDateIni}
                                            locale={ptBR}
                                            dateFormat="P"
                                            withPortal
                                            type='reset'
                                        />
                                        <DatePicker
                                            className='Campo'
                                            id='data'
                                            placeholderText='Até:'
                                            onChange={onChange3}
                                            selected={selectDateFim}
                                            locale={ptBR}
                                            dateFormat="P"
                                            withPortal
                                            type='reset'
                                        />
                                    </div>

                                    <Input
                                        type="select"
                                        name="select"
                                        id="select"
                                        className="Campo1"
                                        label="Buscar"
                                        style={{ width: '93%' }}
                                        onChange={onChange27}
                                    >
                                        <option selected disabled value="">Selecione Opção</option>
                                        {combocodigo.map(combocodigo => (
                                            <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                        ))}
                                    </Input>

                                    <div>
                                        <Button onClick={tabelamovimentacao2} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                        <Button onClick={PDF3} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}

                                    </div>
                                    {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                    <ReactHTMLTableToExcel
                                        className="Botao1"
                                        table="relatorio3"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />

                                </Card>
                                <div>
                                    {/*TABELA 2 POR CÓDIGO */}
                                    <StickyTable className="Tabela2">
                                        <Rows>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                        </Rows>
                                        {tabela2.map((tabela2, idx) => (
                                            <Rows key={idx} tabela={tabela2}>
                                                <Cell>{tabela2.documento}</Cell>
                                                <Cell>{tabela2.data}</Cell>
                                                <Cell>{tabela2.loja_origem}</Cell>
                                                <Cell>{tabela2.quantidade}</Cell>
                                                <Cell>{tabela2.totalgeral}</Cell>
                                            </Rows>
                                        ))}
                                    </StickyTable>
                                </div>
                            </div>
                            <div className='tabela hide'>
                                <Table responsive id="relatorio3" >
                                    <thead className="cabecalho" fixed>
                                        <tr>
                                            <th> DOCUMENTO </th>
                                            <th> DATA </th>
                                            <th> LOJA </th>
                                            <th> QUANTIDADE </th>
                                            <th> TOTAL GERAL </th>

                                        </tr>
                                    </thead>

                                    {tabela2.map((tabela2, idx) => (
                                        <tbody key={idx} tabela={tabela2} className="cabecalho2" >
                                            <tr>

                                                <td> {tabela2.documento}</td>
                                                <td> {tabela2.data}</td>
                                                <td> {tabela2.loja_origem}</td>
                                                <td> {tabela2.quantidade}</td>
                                                <td> {tabela2.totalgeral}</td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                            </div>

                            <div id="entrada3" className="hide">

                                <Card className="Card7" >
                                    <div>
                                        <DatePicker
                                            className='Campo'
                                            id='data'
                                            placeholderText='De:'
                                            onChange={onChange2}
                                            selected={selectDateIni}
                                            locale={ptBR}
                                            dateFormat="P"
                                            withPortal
                                            type='reset'
                                        />
                                        <DatePicker
                                            className='Campo'
                                            id='data'
                                            placeholderText='Até:'
                                            onChange={onChange3}
                                            selected={selectDateFim}
                                            locale={ptBR}
                                            dateFormat="P"
                                            withPortal
                                            type='reset'
                                        />
                                    </div>
                                    <TextField
                                        className="Campo1"
                                        id="standard-data-input"
                                        label="Documento"
                                        type="text"
                                        onChange={onChange28}
                                    >
                                    </TextField>


                                    <div>
                                        <Button onClick={tabelamovimentacao3} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                        <Button onClick={PDF4} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                    </div>
                                    {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                    <ReactHTMLTableToExcel
                                        className="Botao1"
                                        table="relatorio4"
                                        filename="tablexls"
                                        sheet="tablexls"
                                        buttonText="Baixar Excel"
                                    />


                                </Card>
                                <div>
                                    {/*TABELA 3 POR DOCUMENTOS ITENS */}
                                    <StickyTable className="Tabela3">
                                        <Rows>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>QUATIDADE</Cell>
                                            <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                        </Rows>
                                        {tabela3.map((tabela3, idx) => (
                                            <Rows key={idx} tabela={tabela3}>
                                                <Cell>{tabela3.documento}</Cell>
                                                <Cell>{tabela3.data}</Cell>
                                                <Cell>{tabela3.loja_origem}</Cell>
                                                <Cell>{tabela3.quantidade}</Cell>
                                                <Cell>{tabela3.totalgeral}</Cell>
                                            </Rows>
                                        ))}
                                    </StickyTable>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tabela hide'>
                        <Table responsive id="relatorio4" >
                            <thead className="cabecalho" fixed>
                                <tr>
                                    <th> DOCUMENTO </th>
                                    <th> DATA </th>
                                    <th> LOJA </th>
                                    <th> QUANTIDADE </th>
                                    <th> TOTAL GERAL </th>

                                </tr>
                            </thead>

                            {tabela3.map((tabela3, idx) => (
                                <tbody key={idx} tabela={tabela3} className="cabecalho2" >
                                    <tr>

                                        <td> {tabela3.documento}</td>
                                        <td> {tabela3.data}</td>
                                        <td> {tabela3.loja_origem}</td>
                                        <td> {tabela3.quantidade}</td>
                                        <td> {tabela3.totalgeral}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>

                    <div id="devolucao" className="hide">

                        <Devolu>
                            <div className="div3">

                                <div>
                                    <Input name="opt2" id="opt2" type="select"
                                        className="Sele2"
                                        onChange={onChange29}
                                    >
                                        <option selected disabled value="">Selecione Opção</option>
                                        <option value="#devolucao1">Todos os Código</option>
                                        <option value="#devolucao2">Por Código</option>
                                        <option value="#devolucao3">Por Documento Itens</option>
                                    </Input>
                                </div>

                                {/* DEVOLUÇÕES */}
                                <div id="pai2" >
                                    <div id="devolucao1" className="hide">

                                        <Card className="Card8">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>

                                            <Input
                                                type="select"
                                                name="select"
                                                id="select"
                                                className="Campo1"
                                                label="Buscar"
                                                style={{ width: '93%' }}

                                                onChange={onChange29}
                                            >
                                                <option selected disabled value="">Selecione Opção</option>
                                                {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                                ))}
                                            </Input>

                                            <div>
                                                <Button onClick={tabelamovimentacao4} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF5} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio5"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />
                                        </Card>
                                        <div>
                                            {/*TABELA 1 TODOS OS CÓDIGOS*/}
                                            <StickyTable className="Tabela1" >
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela4.map((tabela4, idx) => (
                                                    <Rows key={idx} tabela={tabela4}>
                                                        <Cell>{tabela4.documento}</Cell>
                                                        <Cell>{tabela4.data}</Cell>
                                                        <Cell>{tabela4.loja_origem}</Cell>
                                                        <Cell>{tabela4.quantidade}</Cell>
                                                        <Cell>{tabela4.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                    <div className='tabela hide'>
                                        <Table responsive id="relatorio5" >
                                            <thead className="cabecalho" fixed>
                                                <tr>
                                                    <th> DOCUMENTO </th>
                                                    <th> DATA </th>
                                                    <th> LOJA </th>
                                                    <th> CÓDIGO</th>
                                                    <th> QUANTIDADE </th>
                                                    <th> TOTAL GERAL </th>

                                                </tr>
                                            </thead>

                                            {tabela4.map((tabela4, idx) => (
                                                <tbody key={idx} tabela={tabela4} className="cabecalho2" >
                                                    <tr>

                                                        <td> {tabela4.documento}</td>
                                                        <td> {tabela4.data}</td>
                                                        <td> {tabela4.loja_origem}</td>
                                                        <td> {tabela4.codigofab} </td>
                                                        <td> {tabela4.quantidade}</td>
                                                        <td> {tabela4.totalgeral}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </Table>
                                    </div>
                                    <div id="devolucao2" className="hide">

                                        <Card className="Card9">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>

                                            <Input
                                                type="select"
                                                name="select"
                                                id="select"
                                                className="Campo1"
                                                label="Buscar"
                                                style={{ width: '93%' }}
                                                onChange={onChange30}
                                            >
                                                <option selected disabled value="">Selecione Opção</option>
                                                {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                                ))}
                                            </Input>


                                            <div>
                                                <Button onClick={tabelamovimentacao5} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF6} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            { /*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio6"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />
                                        </Card>
                                        <div>
                                            {/*TABELA 2 POR CÓDIGO */}
                                            <StickyTable className="Tabela2">
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>

                                                </Rows>
                                                {tabela5.map((tabela5, idx) => (
                                                    <Rows key={idx} tabela={tabela5}>
                                                        <Cell>{tabela5.documento}</Cell>
                                                        <Cell>{tabela5.data}</Cell>
                                                        <Cell>{tabela5.loja_origem}</Cell>
                                                        <Cell>{tabela5.codigofab}</Cell>
                                                        <Cell>{tabela5.quantidade}</Cell>
                                                        <Cell>{tabela5.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                    <div className='tabela hide'>
                                        <Table responsive id="relatorio6" >
                                            <thead className="cabecalho" fixed>
                                                <tr>
                                                    <th> DOCUMENTO </th>
                                                    <th> DATA </th>
                                                    <th> LOJA </th>
                                                    <th> CÓDIGO</th>
                                                    <th> QUANTIDADE </th>
                                                    <th> TOTAL GERAL </th>

                                                </tr>
                                            </thead>

                                            {tabela5.map((tabela5, idx) => (
                                                <tbody key={idx} tabela={tabela5} className="cabecalho2" >
                                                    <tr>

                                                        <td> {tabela5.documento}</td>
                                                        <td> {tabela5.data}</td>
                                                        <td> {tabela5.loja_origem}</td>
                                                        <td> {tabela5.codigofab} </td>
                                                        <td> {tabela5.quantidade}</td>
                                                        <td> {tabela5.totalgeral}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </Table>
                                    </div>
                                    <div id="devolucao3" className="hide">

                                        <Card className="Card10">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>
                                            <TextField
                                                className="Campo1"
                                                id="select"
                                                label="Documento"
                                                onChange={onChange31}
                                            >
                                            </TextField>
                                            <div>
                                                <Button onClick={tabelamovimentacao6} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF7} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            {/* <Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio7"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />

                                        </Card>
                                        <div>
                                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                                            <StickyTable className="Tabela3" >
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela6.map((tabela6, idx) => (
                                                    <Rows key={idx} tabela={tabela6}>
                                                        <Cell>{tabela6.documento}</Cell>
                                                        <Cell>{tabela6.data}</Cell>
                                                        <Cell>{tabela6.loja_origem}</Cell>
                                                        <Cell>{tabela6.codigofab}</Cell>
                                                        <Cell>{tabela6.quantidade}</Cell>
                                                        <Cell>{tabela6.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                </div>
                                <div className='tabela hide'>
                                    <Table responsive id="relatorio7" >
                                        <thead className="cabecalho" fixed>
                                            <tr>
                                                <th> DOCUMENTO </th>
                                                <th> DATA </th>
                                                <th> LOJA </th>
                                                <th> CÓDIGO</th>
                                                <th> QUANTIDADE </th>
                                                <th> TOTAL GERAL </th>

                                            </tr>
                                        </thead>

                                        {tabela6.map((tabela6, idx) => (
                                            <tbody key={idx} tabela={tabela6} className="cabecalho2" >
                                                <tr>

                                                    <td> {tabela6.documento}</td>
                                                    <td> {tabela6.data}</td>
                                                    <td> {tabela6.loja_origem}</td>
                                                    <td> {tabela6.codigofab} </td>
                                                    <td> {tabela6.quantidade}</td>
                                                    <td> {tabela6.totalgeral}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </Table>
                                </div>
                            </div>

                        </Devolu>
                    </div>



                    <div id="pedidos" className="hide">
                        <Pedido>
                            <div className="div4">

                                <div>
                                    <Input name="opt3" id="opt3" type="select"
                                        className="Sele2"

                                    >
                                        <option selected disabled value="">Selecione Opção</option>
                                        <option value="#pedidos1">Todos os Código</option>
                                        <option value="#pedidos2">Por Código</option>
                                        <option value="#pedidos3">Por Documento Itens</option>
                                    </Input>
                                </div>

                                {/* PEDIDOS */}
                                <div id="pai3" >
                                    <div id="pedidos1" className="hide">

                                        <Card className="Card11">

                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="select"
                                                className="Campo1"
                                                label="Buscar"
                                                style={{ width: '93%' }}
                                                onChange={onChange32}
                                            >
                                                <option selected disabled value="">Selecione Opção</option>
                                                {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                                ))}
                                            </Input>

                                            <div>
                                                <Button onClick={tabelamovimentacao7} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF8} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio8"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />
                                        </Card>

                                        <div>
                                            <StickyTable className="Tabela1">
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela7.map((tabela7, idx) => (
                                                    <Rows key={idx} tabela={tabela7}>
                                                        <Cell>{tabela7.documento}</Cell>
                                                        <Cell>{tabela7.data}</Cell>
                                                        <Cell>{tabela7.loja_origem}</Cell>
                                                        <Cell>{tabela7.codigofab}</Cell>
                                                        <Cell>{tabela7.quantidade}</Cell>
                                                        <Cell>{tabela7.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                    <div className='tabela hide'>
                                        <Table responsive id="relatorio8" >
                                            <thead className="cabecalho" fixed>
                                                <tr>
                                                    <th> DOCUMENTO </th>
                                                    <th> DATA </th>
                                                    <th> LOJA </th>
                                                    <th> CÓDIGO</th>
                                                    <th> QUANTIDADE </th>
                                                    <th> TOTAL GERAL </th>

                                                </tr>
                                            </thead>

                                            {tabela7.map((tabela7, idx) => (
                                                <tbody key={idx} tabela={tabela7} className="cabecalho2" >
                                                    <tr>

                                                        <td> {tabela7.documento}</td>
                                                        <td> {tabela7.data}</td>
                                                        <td> {tabela7.loja_origem}</td>
                                                        <td> {tabela7.codigofab} </td>
                                                        <td> {tabela7.quantidade}</td>
                                                        <td> {tabela7.totalgeral}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </Table>
                                    </div>
                                    <div id="pedidos2" className="hide">


                                        <Card className="Card12">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>


                                            <Input
                                                type="select"
                                                name="select"
                                                id="select"
                                                className="Campo1"
                                                label="Buscar"
                                                style={{ width: '93%' }}
                                                onChange={onChange33}
                                            >
                                                <option selected disabled value="">Selecione Opção</option>
                                                {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                                ))}
                                            </Input>


                                            <div>
                                                <Button onClick={tabelamovimentacao8} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF9} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio9"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />


                                        </Card>
                                        <div>
                                            {/*TABELA 2 POR CÓDIGO */}
                                            <StickyTable className="Tabela2" >
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela8.map((tabela8, idx) => (
                                                    <Rows key={idx} tabela={tabela8}>
                                                        <Cell>{tabela8.documento}</Cell>
                                                        <Cell>{tabela8.data}</Cell>
                                                        <Cell>{tabela8.loja_origem}</Cell>
                                                        <Cell>{tabela8.codigofab}</Cell>
                                                        <Cell>{tabela8.quantidade}</Cell>
                                                        <Cell>{tabela8.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                    <div className='tabela hide'>
                                        <Table responsive id="relatorio9" >
                                            <thead className="cabecalho" fixed>
                                                <tr>
                                                    <th> DOCUMENTO </th>
                                                    <th> DATA </th>
                                                    <th> LOJA </th>
                                                    <th> CÓDIGO</th>
                                                    <th> QUANTIDADE </th>
                                                    <th> TOTAL GERAL </th>

                                                </tr>
                                            </thead>

                                            {tabela8.map((tabela8, idx) => (
                                                <tbody key={idx} tabela={tabela8} className="cabecalho2" >
                                                    <tr>

                                                        <td> {tabela8.documento}</td>
                                                        <td> {tabela8.data}</td>
                                                        <td> {tabela8.loja_origem}</td>
                                                        <td> {tabela8.codigofab} </td>
                                                        <td> {tabela8.quantidade}</td>
                                                        <td> {tabela8.totalgeral}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </Table>
                                    </div>
                                    <div id="pedidos3" className="hide">
                                        <Card className="Card13">

                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>

                                            <TextField
                                                className="Campo1"
                                                id="select"
                                                label="Documento"
                                                onChange={onChange34}
                                            >
                                            </TextField>


                                            <div>
                                                <Button onClick={tabelamovimentacao9} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF10} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio10"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />
                                        </Card>

                                        <div>
                                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                                            <StickyTable className="Tabela3">
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela9.map((tabela9, idx) => (
                                                    <Rows key={idx} tabela={tabela9}>
                                                        <Cell>{tabela9.documento}</Cell>
                                                        <Cell>{tabela9.data}</Cell>
                                                        <Cell>{tabela9.loja_origem}</Cell>
                                                        <Cell>{tabela9.codigofab}</Cell>
                                                        <Cell>{tabela9.quantidade}</Cell>
                                                        <Cell>{tabela9.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                </div>
                                <div className='tabela hide'>
                                    <Table responsive id="relatorio10" >
                                        <thead className="cabecalho" fixed>
                                            <tr>
                                                <th> DOCUMENTO </th>
                                                <th> DATA </th>
                                                <th> LOJA </th>
                                                <th> CÓDIGO</th>
                                                <th> QUANTIDADE </th>
                                                <th> TOTAL GERAL </th>

                                            </tr>
                                        </thead>

                                        {tabela9.map((tabela9, idx) => (
                                            <tbody key={idx} tabela={tabela9} className="cabecalho2" >
                                                <tr>

                                                    <td> {tabela9.documento}</td>
                                                    <td> {tabela9.data}</td>
                                                    <td> {tabela9.loja_origem}</td>
                                                    <td> {tabela9.codigofab} </td>
                                                    <td> {tabela9.quantidade}</td>
                                                    <td> {tabela9.totalgeral}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </Table>
                                </div>
                            </div>
                        </Pedido>
                    </div>
                    <div id="troca" className="hide">
                        <Troca>
                            <div className="div5">
                                <div>
                                    <Input name="opt4" id="opt4" type="select"
                                        className="Sele2"
                                    >
                                        <option selected disabled value="">Selecione Opção</option>
                                        <option value="#troca1">Todos os Código</option>
                                        <option value="#troca2">Por Código</option>
                                        <option value="#troca3">Por Documento Itens</option>
                                    </Input>
                                </div>


                                {/* TROCA */}
                                <div id="pai4">
                                    <div id="troca1" className="hide">

                                        <Card className="Card14">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>

                                            <Input
                                                type="select"
                                                name="select"
                                                id="select"
                                                className="Campo1"
                                                label="Buscar"
                                                style={{ width: '93%' }}
                                                onChange={onChange35}
                                            >
                                                <option selected disabled value="">Selecione Opção</option>
                                                {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                                ))}
                                            </Input>


                                            <div>
                                                <Button onClick={tabelamovimentacao10} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF11} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            {/*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio11"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />


                                        </Card>
                                        <div>
                                            {/*TABELA 1 TODOS OS CÓDIGOS*/}
                                            <StickyTable className="Tabela1" >
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela10.map((tabela10, idx) => (
                                                    <Rows key={idx} tabela={tabela10}>
                                                        <Cell>{tabela10.documento}</Cell>
                                                        <Cell>{tabela10.data}</Cell>
                                                        <Cell>{tabela10.loja_origem}</Cell>
                                                        <Cell>{tabela10.codigofab}</Cell>
                                                        <Cell>{tabela10.quantidade}</Cell>
                                                        <Cell>{tabela10.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                    <div className='tabela hide'>
                                        <Table responsive id="relatorio11" >
                                            <thead className="cabecalho" fixed>
                                                <tr>
                                                    <th> DOCUMENTO </th>
                                                    <th> DATA </th>
                                                    <th> LOJA </th>
                                                    <th> CÓDIGO</th>
                                                    <th> QUANTIDADE </th>
                                                    <th> TOTAL GERAL </th>

                                                </tr>
                                            </thead>

                                            {tabela10.map((tabela10, idx) => (
                                                <tbody key={idx} tabela={tabela10} className="cabecalho2" >
                                                    <tr>

                                                        <td> {tabela10.documento}</td>
                                                        <td> {tabela10.data}</td>
                                                        <td> {tabela10.loja_origem}</td>
                                                        <td> {tabela10.codigofab} </td>
                                                        <td> {tabela10.quantidade}</td>
                                                        <td> {tabela10.totalgeral}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </Table>
                                    </div>
                                    <div id="troca2" className="hide">

                                        <Card className="Card15">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>

                                            <Input
                                                type="select"
                                                name="select"
                                                id="select"
                                                className="Campo1"
                                                label="Buscar"
                                                style={{ width: '93%' }}
                                                onChange={onChange36}
                                            >
                                                <option selected disabled value="">Selecione Opção</option>
                                                {combocodigo.map(combocodigo => (
                                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom}  </option>
                                                ))}
                                            </Input>


                                            <div>
                                                <Button onClick={tabelamovimentacao11} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF12} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                            { /*<Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio12"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />


                                        </Card>

                                        <div>
                                            {/*TABELA 2 POR CÓDIGO */}
                                            <StickyTable className="Tabela2">
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA.</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela11.map((tabela11, idx) => (
                                                    <Rows key={idx} tabela={tabela11}>
                                                        <Cell>{tabela11.documento}</Cell>
                                                        <Cell>{tabela11.data}</Cell>
                                                        <Cell>{tabela11.loja_origem}</Cell>
                                                        <Cell>{tabela11.codigofab}</Cell>
                                                        <Cell>{tabela11.quantidade}</Cell>
                                                        <Cell>{tabela11.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                    <div className='tabela hide'>
                                        <Table responsive id="relatorio12" >
                                            <thead className="cabecalho" fixed>
                                                <tr>
                                                    <th> DOCUMENTO </th>
                                                    <th> DATA </th>
                                                    <th> LOJA </th>
                                                    <th> CÓDIGO</th>
                                                    <th> QUANTIDADE </th>
                                                    <th> TOTAL GERAL </th>

                                                </tr>
                                            </thead>

                                            {tabela11.map((tabela11, idx) => (
                                                <tbody key={idx} tabela={tabela11} className="cabecalho2" >
                                                    <tr>

                                                        <td> {tabela11.documento}</td>
                                                        <td> {tabela11.data}</td>
                                                        <td> {tabela11.loja_origem}</td>
                                                        <td> {tabela11.codigofab} </td>
                                                        <td> {tabela11.quantidade}</td>
                                                        <td> {tabela11.totalgeral}</td>
                                                    </tr>
                                                </tbody>
                                            ))}
                                        </Table>
                                    </div>
                                    <div id="troca3" className="hide">

                                        <Card className="Card16">
                                            <div>
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='De:'
                                                    onChange={onChange2}
                                                    selected={selectDateIni}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                                <DatePicker
                                                    className='Campo'
                                                    id='data'
                                                    placeholderText='Até:'
                                                    onChange={onChange3}
                                                    selected={selectDateFim}
                                                    locale={ptBR}
                                                    dateFormat="P"
                                                    withPortal
                                                    type='reset'
                                                />
                                            </div>
                                            <TextField
                                                className="Campo1"
                                                id="select"
                                                label="Documento"
                                                onChange={onChange37}
                                            >
                                            </TextField>
                                            <div>
                                                <Button onClick={tabelamovimentacao12} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Filtrar</Button>{' '}
                                                <Button onClick={PDF13} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao">Baixar PDF</Button>{' '}
                                            </div>
                                           {/* <Button style={{ background: "#007bff", color: "#fff", fontSize: "13px" }} className="Botao1">Baixar Excel</Button>{' '}*/}
                                            <ReactHTMLTableToExcel
                                                className="Botao1"
                                                table="relatorio13"
                                                filename="tablexls"
                                                sheet="tablexls"
                                                buttonText="Baixar Excel"
                                            />
                                        </Card>

                                        <div>
                                            {/*TABELA 3 POR DOCUMENTOS ITENS */}
                                            <StickyTable className="Tabela3" >
                                                <Rows>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DOCUMENTO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>DATA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>LOJA</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>QUANTIDADE</Cell>
                                                    <Cell style={{ background: '#007bff', color: 'white' }}>TOTAL GERAL</Cell>
                                                </Rows>
                                                {tabela12.map((tabela12, idx) => (
                                                    <Rows key={idx} tabela={tabela12}>
                                                        <Cell>{tabela12.documento}</Cell>
                                                        <Cell>{tabela12.data}</Cell>
                                                        <Cell>{tabela12.loja_origem}</Cell>
                                                        <Cell>{tabela12.codigofab}</Cell>
                                                        <Cell>{tabela12.quantidade}</Cell>
                                                        <Cell>{tabela12.totalgeral}</Cell>
                                                    </Rows>
                                                ))}
                                            </StickyTable>
                                        </div>
                                    </div>
                                </div>
                                <div className='tabela hide'>
                                    <Table responsive id="relatorio13" >
                                        <thead className="cabecalho" fixed>
                                            <tr>
                                                <th> DOCUMENTO </th>
                                                <th> DATA </th>
                                                <th> LOJA </th>
                                                <th> CÓDIGO</th>
                                                <th> QUANTIDADE </th>
                                                <th> TOTAL GERAL </th>

                                            </tr>
                                        </thead>

                                        {tabela12.map((tabela12, idx) => (
                                            <tbody key={idx} tabela={tabela12} className="cabecalho2" >
                                                <tr>

                                                    <td> {tabela12.documento}</td>
                                                    <td> {tabela12.data}</td>
                                                    <td> {tabela12.loja_origem}</td>
                                                    <td> {tabela12.codigofab} </td>
                                                    <td> {tabela12.quantidade}</td>
                                                    <td> {tabela12.totalgeral}</td>
                                                </tr>
                                            </tbody>
                                        ))}
                                    </Table>
                                </div>
                            </div>
                        </Troca>
                    </div>

                </div>
                <div id='selecione' className="hide">
                </div>
            </Corpo>
        </div >
    );
}
export default Movimentacao;