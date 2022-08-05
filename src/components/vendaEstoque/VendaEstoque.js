import React, { useState, useEffect } from "react";
import "./VendaEstoque.css";
import { Card, CardTitle } from 'reactstrap';
//import { useEffect } from "react";

import MenuSuperior from '../menuSuperior/MenuSuperior';

import TabelaFornecedor from '../tabelaFornecedor/TabelaFornecedor';
import api from '../../api';




const VendaEstoque = (props) => {

    const [vendasdia, setVendasdia] = useState([]);
    const [vendas, setVendas] = useState([]);
    const [vendasmes, setVendasmes] = useState([]);
    const [Estoquetotal, setEstoquetotal] = useState([]);
    const [ultimaatualizacao, setUltimaatualizacao] = useState([]);

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
        var bd = yyyy + '-' + mm + '-' + dd;
        var valores = { 'formatado': formatado, 'bd': bd };
        return valores;
    }

    function buscarUltimos30dias() {
        var datIni = hoje().bd;
        var mesPegar = datIni.split('-')[1];
        if (mesPegar === '0') {
            mesPegar = '12';
        } else {
            mesPegar = parseInt(mesPegar) - 1;
            if (mesPegar < 10) {
                mesPegar = '0' + mesPegar.toString();
            } else {
                mesPegar = mesPegar.toString();
            }
        }
        var dataMes = datIni.split('-')[0] + '-' + mesPegar + '-' + datIni.split('-')[2];
        return dataMes;
    }

    function buscarQuinzena() {
        var datIni = hoje().bd;
        var dia = datIni.split('-')[2];
        var mes = datIni.split('-')[1];
        var ano = datIni.split('-')[0];
        var diaIni = '01';
        var diaFim = '15'; 
        if (dia > '15') {
            diaIni = '16';
            diaFim = '31';
            if (mes === '02') {
                if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
                    diaFim = '29';
                } else {
                    diaFim = '28';
                }
            } else if (mes === '04' || mes === '06' || mes === '09' || mes === '11') {
                diaFim = '30';
            }
        }
        var dataIni = ano + '-' + mes + '-' + diaIni;
        var dataFim = ano + '-' + mes + '-' + diaFim;
        var valores = { 'dataIni': dataIni, 'dataFim': dataFim };
        return valores;
    }

    useEffect(() => {
        api.get(`vendasdia/${for_cod}/${hoje().bd}`).then(response => {

            setVendasdia(response.data)
        })
    }, [for_cod]);

    useEffect(() => {
        api.get(`vendas/${for_cod}/${buscarQuinzena().dataIni}/${buscarQuinzena().dataFim}`).then(response => {

            setVendas(response.data)
        })
    }, [for_cod]);

    var datFim = hoje().bd;

    useEffect(() => {
        api.get(`vendasmes/${for_cod}/${buscarUltimos30dias()}/${datFim}`).then(response => {

            setVendasmes(response.data)
           
        }) 
    }, [for_cod]);



    useEffect(() => {
        api.get(`Estoquetotal/${for_cod}`).then(response => {
            setEstoquetotal(response.data)
        })
    }, [for_cod]);



    var datIniQuinz = buscarQuinzena().dataIni;
    var datFimQuinz = buscarQuinzena().dataFim;
    var dataMes = buscarUltimos30dias();


    useEffect(() => {
        api.get(`ultimaatualizacao/`).then(response => {
            setUltimaatualizacao(response.data)

        })
    }, []);








    return (
        <React.Fragment>

            <div>
                <MenuSuperior />


            </div>

            <div className="root3">
                <div className="geral">
                    <div className="container1">
                        <p></p>
                        {ultimaatualizacao.map(ultimaatualizacao => (
                            <b key={ultimaatualizacao} id="ultimaAtualizacaoMov">Última atualização: {ultimaatualizacao.movfor_hora} </b>
                        ))}
                        <hr></hr>
                    </div>
                    <div className="container2" id="resumo">
                        <div className="rowVendaEstoque">
                            <div className="cardgeral">




                                {vendasdia.map(vendasdia => (
                                    <div key={vendasdia} className="bloco" >
                                        <Card className="card1">
                                            <CardTitle>Venda Hoje</CardTitle>

                                            <p><span className="quantidade">Quantidade: {vendasdia.totalpeca}</span></p>
                                            <p><span className="valorTotal">Valor Total: R$ {vendasdia.total}</span></p>
                                            <p>
                                                <span className="periodo1">De: {hoje().formatado}</span>
                                                <span className="periodo2"> Ate: {hoje().formatado}</span>
                                            </p>
                                        </Card>
                                    </div>
                                ))}


                                {vendas.map(vendas => (
                                    <div key={vendas} className="bloco">
                                        <Card className="card2">
                                            <CardTitle>Venda Quinzena</CardTitle>
                                            <p><span className="quantidade">Quantidade: {vendas.totalpeca}</span></p>
                                            <p><span className="valorTotal">Valor Total: R$ {vendas.total}</span></p>
                                            <p>
                                                <span className="periodo1">De: {datIniQuinz.split('-')[2] + '/' + datIniQuinz.split('-')[1] + '/' + datIniQuinz.split('-')[0]}</span>
                                                <span className="periodo2"> Ate: {datFimQuinz.split('-')[2] + '/' + datFimQuinz.split('-')[1] + '/' + datFimQuinz.split('-')[0]}</span>
                                            </p>

                                        </Card>
                                    </div>

                                ))}


                                {vendasmes.map(vendasmes => (
                                    <div key={vendasmes} className="bloco">
                                        <Card className="card3">
                                            <CardTitle>Venda Últimos 30 dias</CardTitle>
                                            <p><span className="quantidade">Quantidade: {vendasmes.totalpeca}</span></p>
                                            <p><span className="valorTotal">Valor Total: R$ {vendasmes.total}</span></p>
                                            <p>
                                                <span className="periodo1">De: {dataMes.split('-')[2] + '/' + dataMes.split('-')[1] + '/' + dataMes.split('-')[0]}</span>
                                                <span className="periodo2"> Ate: {hoje().formatado}</span>
                                            </p>

                                        </Card>
                                    </div>
                                ))}


                                {Estoquetotal.map(Estoquetotal => (
                                    <div key={Estoquetotal} className="bloco">
                                        <Card className="card4">
                                            <CardTitle>Estoque</CardTitle>
                                            <p><span className="quantidade">Quantidade: {Estoquetotal.totalpeca}</span></p>
                                            <p><span className="valorTotal">Valor Total: R$ {Estoquetotal.total}</span></p>
                                            <p>
                                                <span className="periodo1">Estoque Total</span>
                                            </p>

                                        </Card>
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <TabelaFornecedor />
               

            </div>
      
        </React.Fragment>
    );
}

export default VendaEstoque;