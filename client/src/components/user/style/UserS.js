import styled from "styled-components";

const User = styled.div`
    display: inline-block;
    width: 225px;

      .card {
        background-color: #222831;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.7);
        color: white;
        margin: 20px;
        box-shadow: 10px 5px 5px grey;
      }
      
      .card__name {
        margin-top: 15px;
        font-size: 1.5em;
      }
      
      .card__image {
        height: 160px;
        width: 160px;
        border-radius: 50%;
        border: 5px solid #272133;
        margin-top: 20px;
        box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
      }
`;

export default User;
