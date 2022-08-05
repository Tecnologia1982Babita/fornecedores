
import styled from 'styled-components';


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 5px;
padding: 20px;

    .Card1{
        color: #FFF;
        background: #20B2AA;
        border-radius: 0px;
        height: 150%;
        max-width: 100%;
       
        

        > h6{
            margin: 5px 0 0 5px;
            font-size: 18px;
        }
        > p{
            margin: 10px 0 0 5px;
            font-size: 14px;
        }
    }

    
    .Card2{
        color: #FFF;
        background: #1E90FF;
        border-radius: 0px;
        height: 150%;
     
        

        > h6{
            margin: 5px 0 0 5px;
            font-size: 18px;
        }
        > p{
            margin: 10px 0 0 5px;
            font-size: 14px;
        }
    }

    .Card3{
        color: #FFF;
        background: #32CD32;
        border-radius: 0px;
        height: 150%;
        
        

        > h6{
            margin: 5px 0 0 5px;
            font-size: 18px;
        }
        > p{
            margin: 10px 0 0 5px;
            font-size: 14px;
        }
    }

    .Card4{
        color: #FFF;
        background: #FFA500;
        border-radius: 0px;
        height: 150%;
        
        

        > h6{
            margin: 5px 0 0 5px;
            font-size: 18px;
        }
        > p{
            margin: 10px 0 0 5px;
            font-size: 14px;
        }
    }

    .Sele1{
        grid-column: 2/4;
        grid-row: 2;
        margin: 50px 0 0 0;
    }
   @media screen and (max-width: 600px){
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 20px;
    
        .Card1{
            color: #FFF;
            background: #20B2AA;
            border-radius: 0px;
            height: 150%;
            max-width: 100%;
            grid-column: 1/5;
            flex-direction: column;
            
           
            
    
            > h6{
                margin: 5px 0 0 5px;
                font-size: 18px;
            }
            > p{
                margin: 10px 0 0 5px;
                font-size: 14px;
            }
        }
    
        
        .Card2{
            color: #FFF;
            background: #1E90FF;
            border-radius: 0px;
            height: 100%;
            grid-column: 1/5;
            grid-row: 2;
            flex-direction: column;
            margin: 50px 0 0 0;
            
         
            
    
            > h6{
                margin: 5px 0 0 5px;
                font-size: 18px;
            }
            > p{
                margin: 10px 0 0 5px;
                font-size: 14px;
            }
        }
    
        .Card3{
            color: #FFF;
            background: #32CD32;
            border-radius: 0px;
            height: 100%;
            grid-column: 1/5;
            grid-row: 3;
            margin: 55px 0 0 0;
            
    
            > h6{
                margin: 5px 0 0 5px;
                font-size: 18px;
            }
            > p{
                margin: 10px 0 0 5px;
                font-size: 14px;
            }
        }
    
        .Card4{
            color: #FFF;
            background: #FFA500;
            border-radius: 0px;
            height: 95%;
            grid-column: 1/5;
            grid-row: 4;
            margin 60px 0 0 0;
            
            
    
            > h6{
                margin: 5px 0 0 5px;
                font-size: 18px;
            }
            > p{
                margin: 10px 0 0 5px;
                font-size: 14px;
            }
        }
    
        .Sele1{
            grid-column: 1/5;
            grid-row: 5;
            margin: 65px 0 0 0;
        }
   }
    
`;


export const Corpo = styled.div` 

.div2{
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 5px;
padding: 20px;
overflow: none;

    > div .Sele2{
        grid-column: 2/4;
        width: 40%;
        margin: 0 0 0 33%;          
    }

    > div{
        grid-column: 1/5;             
        overflow: none;
                
        > div .Tabela1{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }

        .Card5{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 60%;
                    
            .Campo{
                display: grid;
                margin: 5px 0 0 15px;
                justify-content: space-bettewn;
            }

            #data {
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }               
                
            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }

            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
            
        } // fim card5
                
                
            > div .Tabela2{
                width: 110%;
                height: 400px;
                margin: -18% -15% 0% 33%;
                overflow: auto;
            }

            .Card6{
                display: flex;
                grid-column:1/2;
                margin: 70px 0 0 0;
                width: 30%;
                height: 55%;
                

                .Campo{
                    width: 40%;
                    justify-content: space-bettewn;
                }

                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 80%;
                    font-size: 1rem;
                    margin: 0 2% 0 10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  
                .Campo1{
                    width: 93%;
                    margin: 15px 0 0 10px;
                }

                .Botao{
                    margin: 20px 0 0 15px;
                }

                
            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
                
            } // fim card6

            > div .Tabela3{
                width: 110%;
                height: 400px;
                margin: -18.5% -15% 0% 33%;
                overflow: auto;
            }

            .Card7{
                display: flex;
                grid-column:1/2;
                margin: 70px 0 0 0;
                width: 30%;
                height: 55%;
                

                .Campo{
                    width: 40%;
                    justify-content: space-bettewn;
                }

                #data {
                    display: grid;
                    justify-content: space-bettewn;
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid black;                
                    outline: none;
                    height: 2rem;
                    width: 80%;
                    font-size: 1rem;
                    margin: 0 2% 0 10%;
                    padding: 0;
                    box-shadow: none;
                    box-sizing: content-box;
                    transition: all 0.3s;
                }  

                .Campo1{
                    width: 90%;
                    margin: 5px 0 0 15px;
                }

                .Botao{
                    margin: 20px 0 0 15px;
                }

                
            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
                
            } // fim card7                             
            
            
            
            @media (max-width: 600px){
                > div{
                    overflow: none;

                    > div .Sele2{
                        grid-column: 1/4;
                        width: 100%;                        
                    
                    }

                    > div .Tabela1{
                        width: 110%;
                        height: 400px;
                        margin: 30% -15% 0% -5px;
                        overflow: auto;
                    }

                    > div .Tabela2{
                        width: 110%;
                        height: 400px;
                        margin: 30% -15% 0% -5px;
                        overflow: auto;
                    }

                    > div .Tabela3{
                        width: 110%;
                        height: 400px;
                        margin: 30% -15% 0% -5px;
                        overflow: auto;
                    }
        
        
                } // fim div

                    
                
                .Card5{
                    display: flex;
                    grid-column: 1/3;
                    width: 45vh;
                    heigth: 90%;
                    margin-left: -5px;
                    
                    .Campo{
                        
                        justify-content: space-bettewn;
                        margin-left: 10px;
                    }
                    #data {
                        display: grid;
                        justify-content: space-bettewn;
                        background-color: transparent;
                        border: none;
                        border-bottom: 1px solid black;                
                        outline: none;
                        height: 2rem;
                        width: 80%;
                        font-size: 1rem;
                        margin: 0 2% 0 10%;
                        padding: 0;
                        box-shadow: none;
                        box-sizing: content-box;
                        transition: all 0.3s;
                    }  
                    .Campo1{
                        margin: 10px;
                    }
                    > div .Botao{
                        display: flex;
                        width: 90%;
                    }
                    .Botao1{
                        width: 90%;
                        margin: 15px 0 5px 15px;
                        
                    }
                } // fim card5

                    } // fim card5
            
            
                    .Card6{
                        display: flex;
                        grid-column: 1/3;
                        width: 45vh;
                        heigth: 90%;
                        margin-left: -5px;

                        .Campo{
                            justify-content: space-bettewn;
                            margin-left: 10px;
                        }
                        #data {
                            display: grid;
                            justify-content: space-bettewn;
                            background-color: transparent;
                            border: none;
                            border-bottom: 1px solid black;                
                            outline: none;
                            height: 2rem;
                            width: 80%;
                            font-size: 1rem;
                            margin: 0 2% 0 10%;
                            padding: 0;
                            box-shadow: none;
                            box-sizing: content-box;
                            transition: all 0.3s;
                        }  

                        .Campo1{
                            margin: 10px;
                        }

                        > div .Botao{
                            display: flex;
                            width: 90%;
                        }
                        .Botao1{
                            width: 90%;
                            margin: 15px 0 5px 15px;
                            border-radius: 5px;
                            padding-top: 1%;
                            background: #007bff;
                            color: white;                
                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                            border: none;	
                        }         
                        
                        .Botao1:hover {
                            background: white;
                            color: #007bff;
                        }
                        
                        
                        .Botao1:focus {
                            background: white;
                            color: #007bff;
                        }
                    }     //fim card6

            
            

                    .Card7{
                        display: flex;
                        grid-column: 1/3;
                        width: 45vh;
                        heigth: 90%;
                        margin-left: -5px;

                        .Campo{
                            justify-content: space-bettewn;
                            margin-left: 10px;
                        }
                        #data {
                            display: grid;
                            justify-content: space-bettewn;
                            background-color: transparent;
                            border: none;
                            border-bottom: 1px solid black;                
                            outline: none;
                            height: 2rem;
                            width: 80%;
                            font-size: 1rem;
                            margin: 0 2% 0 10%;
                            padding: 0;
                            box-shadow: none;
                            box-sizing: content-box;
                            transition: all 0.3s;
                        }  

                        .Campo1{
                            margin: 10px;
                        }

                        > div .Botao{
                            display: flex;
                            width: 90%;
                        }
                        .Botao1{
                            width: 90%;
                            margin: 15px 0 5px 15px;
                            border-radius: 5px;
                            padding-top: 1%;
                            background: #007bff;
                            color: white;                
                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                            border: none;	
                        }         
                        
                        .Botao1:hover {
                            background: white;
                            color: #007bff;
                        }
                        
                        
                        .Botao1:focus {
                            background: white;
                            color: #007bff;
                        }
                    } //fim card7                   
                } // fim media 767px


                @media (max-width: 1200px){
                    > div{
                        overflow: none;
    
                        > div .Sele2{
                            grid-column: 1/4;
                            width: 100%;                        
                    
                        }
    
                        > div .Tabela1{
                            width: 110%;
                            height: 400px;
                            margin: 80% -15% 0% -5px;
                            overflow: auto;
                        }
    
                        > div .Tabela2{
                            width: 110%;
                            height: 400px;
                            margin: 80% -15% 0% -5px;
                            overflow: auto;
                        }
    
                        > div .Tabela3{
                            width: 110%;
                            height: 400px;
                            margin: 80% -15% 0% -5px;
                            overflow: auto;
                        }
        
        
                    }
    
                    
                
                    .Card5{
                        display: flex;
                        grid-column: 1/3;
                        width: 45vh;
                        heigth: 90%;
                        margin-left: -5px;
    
                        
                        .Campo{
                            
                            justify-content: space-bettewn;
                            margin-left: 10px;
                        }
                        #data {
                            display: grid;
                            justify-content: space-bettewn;
                            background-color: transparent;
                            border: none;
                            border-bottom: 1px solid black;                
                            outline: none;
                            height: 2rem;
                            width: 80%;
                            font-size: 1rem;
                            margin: 0 2% 0 10%;
                            padding: 0;
                            box-shadow: none;
                            box-sizing: content-box;
                            transition: all 0.3s;
                        }  
    
                        .Campo1{
                            margin: 10px;
                        }
    
                        > div .Botao{
                            display: flex;
                            width: 90%;
                        }
                        .Botao1{
                            margin: 15px 0 5px 15px;
                            width: 40%;
                            border-radius: 5px;
                            padding-top: 1%;
                            background: #007bff;
                            color: white;                
                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                            border: none;	
                        }         
                        
                        .Botao1:hover {
                            background: white;
                            color: #007bff;
                        }
                        
                        
                        .Botao1:focus {
                            background: white;
                            color: #007bff;
    
                    }
            
            
                    .Card6{
                        display: flex;
                        grid-column: 1/3;
                        width: 45vh;
                        heigth: 90%;
                        margin-left: -5px;
    
                        .Campo{
                            justify-content: space-bettewn;
                            margin-left: 10px;
                        }
                        #data {
                            display: grid;
                            justify-content: space-bettewn;
                            background-color: transparent;
                            border: none;
                            border-bottom: 1px solid black;                
                            outline: none;
                            height: 2rem;
                            width: 80%;
                            font-size: 1rem;
                            margin: 0 2% 0 10%;
                            padding: 0;
                            box-shadow: none;
                            box-sizing: content-box;
                            transition: all 0.3s;
                        }  
    
                        .Campo1{
                            margin: 10px;
                        }
    
                        > div .Botao{
                            display: flex;
                            width: 90%;
                        }
                        .Botao1{
                            width: 90%;
                            margin: 15px 0 5px 15px;
                            
                        }
                    }    
    
            
            
    
                    .Card7{
                        display: flex;
                        grid-column: 1/3;
                        width: 45vh;
                        heigth: 90%;
                        margin-left: -5px;
    
                        .Campo{
                            justify-content: space-bettewn;
                            margin-left: 10px;
                        }
                        #data {
                            display: grid;
                            justify-content: space-bettewn;
                            background-color: transparent;
                            border: none;
                            border-bottom: 1px solid black;                
                            outline: none;
                            height: 2rem;
                            width: 80%;
                            font-size: 1rem;
                            margin: 0 2% 0 10%;
                            padding: 0;
                            box-shadow: none;
                            box-sizing: content-box;
                            transition: all 0.3s;
                        }  
    
                        .Campo1{
                            margin: 10px;
                        }
    
                        > div .Botao{
                            display: flex;
                            width: 90%;
                        }
                        .Botao1{
                            margin: 15px 0 5px 15px;
                            width: 40%;
                            border-radius: 5px;
                            padding-top: 1%;
                            background: #007bff;
                            color: white;                
                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                            border: none;	
                        }         
                        
                        .Botao1:hover {
                            background: white;
                            color: #007bff;
                        }
                        
                        
                        .Botao1:focus {
                            background: white;
                            color: #007bff;
                    }

                }
                
            }

        }    
        
    }       
        
`;





export const Devolu = styled.div`
.div3{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 20px;
    overflow: none;
    
    > div .Sele2{
        grid-column: 2/3;
        width: 40%;
        margin: 0 0 0 33%;
    }
    > div{
        grid-column: 1/5;
        overflow: none;
        > div .Tabela1{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }
    
        .Card8{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  

            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }

            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
    
        }

    
        > div .Tabela2{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }
        .Card9{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  

            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }

            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
         }

        }

        > div .Tabela3{
            width: 110%;
            height: 400px;
            margin: -18.5% -15% 0% 33%;
            overflow: auto;
        }
        .Card10{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  

            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }

            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
    

    @media (max-width: 600px){
        > div{
            overflow: none;
            > div .Sele2{
                grid-column: 1/4;
                width: 100%;                        
        
            }
            > div .Tabela1{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela2{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela3{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
        
    
        .Card8{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }


        .Card9{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }    


        .Card10{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                
            }
        }
        
    }
}
}    
`;

export const Pedido = styled.div`
.div4{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 20px;
    overflow: none;
    
    > div .Sele2{
        grid-column: 2/3;
        width: 40%;
        margin: 0 0 0 33%;
    }
    > div{
        grid-column: 1/5;
        overflow: none;
        > div .Tabela1{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }
    
        .Card11{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }
            .Botao{
                margin: 20px 0 0 15px;
            }
            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
    
        }
    
        > div .Tabela2{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }
        .Card12{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }
            .Botao{
                margin: 20px 0 0 15px;
            }
            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
        > div .Tabela3{
            width: 110%;
            height: 400px;
            margin: -18.5% -15% 0% 33%;
            overflow: auto;
        }
        .Card13{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }
            .Botao{
                margin: 20px 0 0 15px;
            }
            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
    
    @media (max-width: 600px){
        > div{
            overflow: none;
            > div .Sele2{
                grid-column: 1/4;
                width: 100%;                        
        
            }
            > div .Tabela1{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela2{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela3{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
        }
        
    
        .Card11{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
        .Card12{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }    
        .Card13{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
        
    }
`;

export const Troca = styled.div`
.div5{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    padding: 20px;
    overflow: none;
    
    > div .Sele2{
        grid-column: 2/3;
        width: 40%;
        margin: 0 0 0 33%;
    }
    > div{
        grid-column: 1/5;
        overflow: none;
        > div .Tabela1{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }
    
        .Card14{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  

            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }

            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
    
        }

    
        > div .Tabela2{
            width: 110%;
            height: 400px;
            margin: -18% -15% 0% 33%;
            overflow: auto;
        }
        .Card15{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  

            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }
            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }

        > div .Tabela3{
            width: 110%;
            height: 400px;
            margin: -18.5% -15% 0% 33%;
            overflow: auto;
        }
        .Card16{
            display: flex;
            grid-column:1/2;
            margin: 70px 0 0 0;
            width: 30%;
            height: 55%;
        
            .Campo{
                width: 40%;
                justify-content: space-bettewn;
            }

            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  

            .Campo1{
                width: 93%;
                margin: 15px 0 0 10px;
            }

            .Botao{
                margin: 20px 0 0 15px;
            }

            .Botao1{
                margin: 15px 0 5px 15px;
                width: 40%;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
    

    @media (max-width: 600px){
        > div{
            overflow: none;
            > div .Sele2{
                grid-column: 1/4;
                width: 100%;                        
        
            }
            > div .Tabela1{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela2{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela3{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
        }
        
    
        .Card14{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
           > div .Botao{
                    display: flex;
                    width: 90%;
                }
                .Botao1{
                    width: 90%;
                    margin: 15px 0 5px 15px;
                    border-radius: 5px;
                    padding-top: 1%;
                    background: #007bff;
                    color: white;                
                    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                    border: none;	
                }         
                
                .Botao1:hover {
                    background: white;
                    color: #007bff;
                }
                
                
                .Botao1:focus {
                    background: white;
                    color: #007bff;
                }
        }


        .Card15{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }    


        .Card16{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                border-radius: 5px;
                padding-top: 1%;
                background: #007bff;
                color: white;                
                box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
                border: none;	
            }         
            
            .Botao1:hover {
                background: white;
                color: #007bff;
            }
            
            
            .Botao1:focus {
                background: white;
                color: #007bff;
            }
        }
        
    }
    @media (max-width: 1200px){
        > div{
            overflow: none;
            > div .Sele2{
                grid-column: 1/4;
                width: 100%;                        
        
            }
            > div .Tabela1{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela2{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
            > div .Tabela3{
                width: 110%;
                height: 400px;
                margin: 30% -15% 0% -5px;
                overflow: auto;
            }
        }
        
    
        .Card14{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
           > div .Botao{
                    display: flex;
                    width: 90%;
                }
            .Botao1{
                    width: 90%;
                    margin: 15px 0 5px 15px;
                    
            }
        }


        .Card15{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                
            }
        }    


        .Card16{
            display: flex;
            grid-column: 1/3;
            width: 45vh;
            heigth: 90%;
            margin-left: -5px;
            .Campo{
                justify-content: space-bettewn;
                margin-left: 10px;
            }
            #data {
                display: grid;
                justify-content: space-bettewn;
                background-color: transparent;
                border: none;
                border-bottom: 1px solid black;                
                outline: none;
                height: 2rem;
                width: 80%;
                font-size: 1rem;
                margin: 0 2% 0 10%;
                padding: 0;
                box-shadow: none;
                box-sizing: content-box;
                transition: all 0.3s;
            }  
            .Campo1{
                margin: 10px;
            }
            > div .Botao{
                display: flex;
                width: 90%;
            }
            .Botao1{
                width: 90%;
                margin: 15px 0 5px 15px;
                
            }
        }
        
    }
}
}    
`;
