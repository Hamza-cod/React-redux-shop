import styled from "styled-components";

export const StyledDisplay = styled.div`
max-width: 90%;
display: grid;
grid-template-columns: auto auto auto;
/* display: flex; */
padding: 2px;
justify-content: center;
gap: 10px;
flex-wrap: wrap;
margin: 20px auto;
@media screen and (max-width: 600px) {
  grid-template-columns: auto;
}
.container{
  /* columns: 2; */
  min-height: 100px;
  width: 200px;
  border: 1px solid #eee;
  padding: 20px;
  .containerImage{
   display: flex;
   justify-content: center;
   align-items: center;
   height: 300px;
  }
  .description div{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    & a{
      text-decoration: underline;
      color: blue;
    }
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    transition: ease .3s ;
   padding: 20px;
  }
  &:hover{
    img{
    scale: 1.08;
    }
  }
}`
export const StyledProductDetails = styled(StyledDisplay)`
display: flex;
border: 1px solid #eee;
justify-content: space-between;
padding: 0 5%;
/* background-color: black; */
.container{
  width: 30%;
  padding: 20px;
  
}

`
