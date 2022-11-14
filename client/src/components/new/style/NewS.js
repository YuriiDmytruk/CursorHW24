import styled from "styled-components";

const New = styled.div`
  display: inline-block;
  margin: 30px;
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin-block: 2rem;
    gap: 2rem;
  }

  img {
    max-width: 100%;
    display: block;
    object-fit: cover;
  }

  .card {
    display: flex;
    flex-direction: column;
    width: clamp(20rem, calc(20rem + 2vw), 22rem);
    overflow: hidden;
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    background: #ece9e6;
    background: linear-gradient(to right, #ffffff, #ece9e6);
  }

  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tag {
    align-self: flex-start;
    padding: 0.25em 0.75em;
    border-radius: 1em;
    font-size: 0.75rem;
  }

  .tag + .tag {
    margin-left: 0.5em;
  }

  .card__body h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }

  .card__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }

  .user {
    display: flex;
    gap: 0.5rem;
  }

  .user__image {
    border-radius: 50%;
  }

  .user__info > small {
    color: #666;
  }
`;

export default New;
