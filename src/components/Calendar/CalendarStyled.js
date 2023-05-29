import styled from "styled-components";

export const CalendarStyled = styled.div`
.container{
    border-collapse: collapse;
    margin: 10px 0;
    font-size: 0.9em;
    width: 200px;
    display: flex;
    flex-direction: column;
    background: #036363;
    color: #cccccc;
}

.table-header{
    display: flex;
    align-items: center;
    justify-content: center;
}

.table-body{
    display: table;
}

.active {
    background : #595959;
}
}

`;
