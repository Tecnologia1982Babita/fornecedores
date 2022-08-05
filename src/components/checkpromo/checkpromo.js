import React, { useState, useCallback, useEffect } from "react";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { Container } from './Container';
import api from '../../api'
import $ from "jquery";
import { Form, Input, Label, FormGroup } from 'reactstrap';
import { Select, MenuItem, Card, TextField, Button} from "@material-ui/core";
import { StickyTable, Row, Cell } from 'react-sticky-table';
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



const Checkpromo = (props) => {

   const [tabela, setTabela] = useState([]);

   const [codigosele, setCodigosele] = useState(null);
   const [isActive1, setIsActive1] = useState (null);

   function onChange2(ev) {
       const{name, value} = ev.target;
       setCodigosele(value);
       if (ev !== '') {
        setIsActive1(true);
    } else {
        setIsActive1(false);
    }
   }
   

    const [revista, setRevista] = useState(null);
    const [isActive4, setIsActive4] = useState(false);

    function onChange4(ev) {
        const { name, value } = ev.target;
        setRevista(value); console.log(value);
        if (ev !== '') {
            setIsActive4(true);
        } else {
            setIsActive4(false);
        }
    }

    const [tabelacheck, setTabelacheck] = useState(null);
    const [isActive2, setIsActive2] = useState(null);

    function onChange1(ev) {
        const { name, value } = ev.target;
        setTabelacheck(value);

        if (ev !== '') {
            setIsActive2(true);
        } else {
            setIsActive2(false);
        }
    }

    const [combocodigo, setCombocodigo] = useState([]);
    const for_cod = localStorage.getItem('for_cod');

    useEffect(() => {
        api.get(`combocodigo/${for_cod}/`).then(response => {
            setCombocodigo(response.data)
        })
    }, [for_cod]);
    const tabelacheckpro = useCallback(() => {
        api.get(`checkpro/${codigosele}/`).then(response => {
            setTabela(response.data)
            localStorage.setItem('codigofiltrado', codigosele)

        })
    }, [codigosele]);

    const codigofiltrado = localStorage.getItem('codigofiltrado')

    const enviarcheckemail = useCallback(() => {
        api.get(`checkproinsertemail/${codigofiltrado}/`).then(response => {


        })
    }, []);

    const [ch, setCh] = useState(null);

    function onChange3(ev) {
        const { name, value } = ev.target;
        var checkeds = new Array();
        $("input[name='checks[]']:checked").each(function () {
            checkeds.push($(this).val());
            setCh(checkeds)

        });
    }

    const enviarcheck = () => {
        for (var checkenviar of ch) {
            api.post(`checkproinsert/${checkenviar}/`).then(response => {
                console.log(checkenviar);
            })

        }
    }


    return (
        <div>
            <MenuSuperior />
            <Container>
                <Card className="Card">
                <FormGroup className="Sele" >
                        <Input type="select" name="select" id="select" onChange={onChange2} >
                                <option disable value="" >SELECIONE OPÇÃO </option>
                                
                               
                                {combocodigo.map(combocodigo => (
                                    <option key={combocodigo.for_cod} value={combocodigo.for_cod} > {combocodigo.for_cod + ' - ' + combocodigo.for_nom} </option>
                                ))}
                           </Input>
                </FormGroup>
                    <Button className="botao1" onClick={tabelacheckpro} style={{ background: "#007bff", color: "#fff", fontSize: "13px" }}>Filtrar</Button>{' '}
                </Card>

                <StickyTable style={{ width: '105%', height: '400px', margin: '0 -15% 0% -1%', padding: '0 0 -15% 0' }}>
                    <Row>
                        <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>NOME</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>CÓDIGO</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>DESCRIÇÃO</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>N°. PRODUTO</Cell>
                        <Cell style={{ background: '#007bff', color: 'white' }}>PREÇO</Cell>
                    </Row>
                    {tabela.map((tabela, idx) => (
                        <Row key={idx} tabela={tabela}>
                            <Cell><Input addon type="checkbox" onChange={onChange3} name="checks[]" value={tabela.produtos_id}></Input></Cell>
                            <Cell>{tabela.for_nom}</Cell>
                            <Cell>{tabela.for_cod}</Cell>
                            <Cell>{tabela.produtos_descricao}</Cell>
                            <Cell>{tabela.produtos_numero}</Cell>
                            <Cell>{tabela.produtos_preco}</Cell>
                        </Row>
                    ))}
                </StickyTable>
                <Form className="botao3">
                    <div className="check">
                        <Label style={{ color: '#696969' }}>Salvar</Label>
                        <Input onClick={enviarcheck} type="checkbox" style={{ borderColor: '#696969', borderRadius: "0%", fontFamily: 'Roboto, sans-serif' }}>Salvar</Input>{' '}
                    </div>
                    <div className="botao">
                        <Button onClick={enviarcheckemail} type="submit" style={{ background: "#007bff", color: "#fff", fontSize: "13px" }}>Enviar</Button>{' '}
                    </div>
                </Form>
            </Container >
        </div >
    );
}
export default Checkpromo;