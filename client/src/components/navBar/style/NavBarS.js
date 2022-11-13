import styled from "styled-components"

const NavBarS = styled.div`
.header {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

.option {
    float: left;
}

.option .link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.option .link:hover {
    background-color: #111;
}
`;

export default NavBarS
