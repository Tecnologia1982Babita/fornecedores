import React, { useState, useEffect } from "react";
import "./googledrive.css";
import { FormGroup, Label, Input, Col } from 'reactstrap';
//import { useEffect } from "react";
import $ from "jquery";
import MenuSuperior from '../menuSuperior/MenuSuperior';



const GoogleDrive = (props) => {


  const [fadeIn1, setFadeIn1] = useState(true);
  const [fadeIn2, setFadeIn2] = useState(true);
  const [fadeIn3, setFadeIn3] = useState(true);



function toggle1() {
  var display1 = document.getElementById('scroll1').style.display;
  if(display1 == "none") {
      document.getElementById('scroll1').style.display = 'block';
  } else {
    document.getElementById('scroll1').style.display = 'none';
  }
}

function toggle2() {
  var display2 = document.getElementById('scroll2').style.display;
  if(display2 == "none") {
      document.getElementById('scroll2').style.display = 'block';
  } else { 
      document.getElementById('scroll2').style.display = 'none';
  }
}


function toggle3() {
  var display3 = document.getElementById('scroll3').style.display;
  
  if(display3 == "none") {
    document.getElementById('scroll3').style.display = 'block';
  } else {
      document.getElementById('scroll3').style.display = 'none';
  }
}

useEffect(() => {
  $('#select').on('change', function(){
     var selectValor = $(this).val();
     console.log(selectValor);
      $('#fade').children('div').hide();
      $('#fade').children(selectValor).show();
  });
},);



  return (
    <React.Fragment>

    <div>
        <MenuSuperior />
    </div>
    <div >
      <div className="googleDrive">
        <h1 className="tittle">Download de Arquivos</h1>
      </div>
      <div >  
        <center className="centrocentro">   
          <FormGroup id='formselect' >
            <Label for="exampleSelect" className="labelSelect">Tipos de Downloads</Label>
              <Input type="select" name="select" id="select" >
                <option value='#div100'>Selecione Uma Opção</option>
                <option value='#div1'>Arquivos Coleções</option>
                <option value='#div2'>Arquivos Revista</option>
                <option value='#div3'>Arquivos Gerais</option>
              </Input>
          </FormGroup>
        </center> 
      </div>
      <div id="fade">
        <div id="div1" className="hide">
          <center >
            {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
            <iframe src="https://drive.google.com/embeddedfolderview?id=1lZrt0ocorpEgCty4Zzpw4Q1NwfhieCCS#grid"></iframe>
          </center>
        </div>
        <div id="div2" className="hide">
          <center >
            {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
            <iframe  src="https://drive.google.com/embeddedfolderview?id=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH#grid"></iframe>
          </center>
        </div>
        <div id="div3" className="hide">
          <center>
            {/*<iframe src="https://googledriveembedder.collegefam.com/?key=AIzaSyBxXtlZCc1ocHHoG6cHDilaxdw2GCYf5Jc&folderid=1z39TV9L1RmOyEkkR2LQqPayk5GIDwYgH"></iframe>*/}
            <iframe src="https://drive.google.com/embeddedfolderview?id=1amU-GM8eXx8bsQHBApDkGLNm25aJAFYa#grid"></iframe>
          </center>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default GoogleDrive;