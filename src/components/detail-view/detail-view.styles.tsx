import styled from 'styled-components';


export const DetailContainer = styled.div`
   display: flex;
   flex-direction: column;

  .header {
    text-align: center;
  }
  .content-container {
    justify-content:center;
    align-items:center;
    display: flex;
    text-align: left;
    
  }
  .background-image {
    height: 600px;
    width: 400px;
    background-position: center;
    background-repeat: no-repeat;
  } 
  .image-container {
    width: 500px;
    align-items: center;
    justify-content: center;
  }
`;

export const ParagraphItem = styled.p`
  justify-content: center;
  width: 600px;
`;
