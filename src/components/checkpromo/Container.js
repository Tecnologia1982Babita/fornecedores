import  styled  from  'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
grid-gap: 5px;
padding: 70px 70px;



   .Card{
      display: flex;
      flex-direction: column;
      margin-top: 120px;
      width: 60%;
      max-height: 40%;
      overflow: none;
      

      .Sele{
          display: flex;
          flex-direction: column;
          margin: 30px 0 0 10px;
          width: 350%;
      }

      .botao1{
        display: flex;
        flex-direction: column;
        margin: 30px 0 10px 20px;
        width: 25%;
      }
   }

   .Tab{
       display: flex;
       flex-direction: column;
       margin: 20px 0 0 0;,
       overflow: auto;
       width: 80%;
       max-height: 50vh;

   }
   .botao3{
    display: flex;
    grid-column: 2/3;
    justify-content: space-between;
    margin: 0 0 0 20px;
    width: 40%;
   

    > .check{
        display: flex;
    }

    > .botao{
        margin-left: 55vh;
        whidth: 40%;
    }
   }

   @media screen and (max-width: 420px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 30px;

     .Card{
         display: grid;
         grid-column: 1/3;
         margin-top: -0px;
         width: 100%;
         max-height: 50vh;

         .Sele{
             width: 110%
         }
     }

     .Tab{
        display: flex;
        justify-content: center;
        margin: '0 -15% 0% 3%'
        width: 111%;
        height: 400px;
        overflow: none;
 
    }

    .botao3{
        display: flex;
        grid-column: 1/3;
        justify-content: space-between;
        margin: 20px 0 0 20px;

        > .check{
            display: flex;
        }

        > .botao{
            margin-left: 25vh;
            whidth: 40%;
        }
    }

    
    
   }
`;
