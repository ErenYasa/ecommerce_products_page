import styled from "styled-components";
import { Label as RadioInput } from "@/components/FormElements/Radio/styled";

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 3rem;
    ${RadioInput} {
        justify-content: space-between;
    }
`;
