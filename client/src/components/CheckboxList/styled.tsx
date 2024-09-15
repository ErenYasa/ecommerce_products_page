import styled from "styled-components";
import { Text as CheckboxText } from "../FormElements/Checkbox/styled";

export const CheckboxListStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    max-height: 22rem;
    overflow: hidden auto;

    & ${CheckboxText} {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
