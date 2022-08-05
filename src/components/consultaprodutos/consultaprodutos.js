import React from 'react';
import { Form, FormGroup, Row, Col, Container } from 'reactstrap';
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import MenuSuperior from "../menuSuperior/MenuSuperior";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { StickyTable, Rows, Cell } from 'react-sticky-table';

import Card from "reactstrap/lib/Card";
import { MDBInput } from 'mdbreact';






const data_checkboxes = {
    columns: [
        {
            'check': <MDBInput type="checkbox" id="checkbox2" />,
            'field': 'check',
            'sort': 'asc'

        },
        {
            'label': 'Código',
            'field': 'lorem',
            'sort': 'asc'
        },
        {
            'label': 'Descrição',
            'field': 'lorem',
            'sort': 'asc',
        },
    ],
    rows: [
        {

            'check': <MDBInput type="checkbox" id="checkbox2" />,
            'Descrição': ' ',

        },
    ]
};

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



const consultaprodutos = (props) => {
    return (
        <div>
            <MenuSuperior />

            <center><h1 style={{ marginBottom: '1%', fontFamily: "Roboto, sans-serif", color: '#848484' }}></h1></center>
            <Container className="container-theme" fluid={true}>
                <Row>
                    <Col  md={4} lg={8}>

                        <Card style={{ width: "40%", height: "70%", margin: '40px 0 0 0' }}>
                            <Form id="altura">
                                <Row>
                                    <Col sm={12} md={4} lg={4} xl={4} >
                                        <FormGroup >
                                            <InputLabel id="select-label"></InputLabel>
                                            <Select
                                                labelId="select-label"
                                                id="select"
                                                label="Buscar"
                                                style={{ width: "400%", margin: '0 0 0 10%' }}

                                            >
                                                <MenuItem selected disabled value="">Selecione Opção</MenuItem>
                                                <MenuItem value=""></MenuItem>
                                                <MenuItem value=""></MenuItem>
                                                <MenuItem value=""></MenuItem>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12}>
                                        <FormGroup>
                                            <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "2%", margin: '0% 0 0 5%', fontSize: "13px" }}>Filtrar</Button>{' '}
                                            <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "40%", height: "10%", margin: '0% 0 0 10%', fontSize: "13px" }}>Gerar PDF</Button>{' '}

                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Form id="altura">
                        <StickyTable style={{ width: '200%', height: '400px', margin: '40% 0 0 5%' }}>
                            <Rows>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                                <Cell style={{ background: '#007bff', color: 'white' }}></Cell>
                            </Rows>
                            <Rows>
                                <Cell></Cell>
                                <Cell></Cell>
                                <Cell></Cell>
                                <Cell></Cell>
                            </Rows>
                        </StickyTable>
                        <Button style={{ background: "#007bff", color: "#fff", borderRadius: "0%", width: "50%", height: "5%", margin: '0px 0 0 10%', fontSize: "13px" }}>Enviar</Button>{' '}
                    </Form>
                </Row>
            </Container>
        </div>
    );
}
export default consultaprodutos;