import { styled } from "styled-components";
import { Label as Switch, Text } from "@/components/FormElements/Switch/styled";
import { CheckboxListStyle } from "@/components/CheckboxList/styled";
import { TitleText } from "@/components/FilterElements/ListFilter/styled";

export const Body = styled.div`
    margin-top: 3rem;
    ${Switch} {
        justify-content: space-between;
        padding-block: 1.7rem;
        ${Text} {
            font-size: ${({ theme }) => theme.typography.size.sm};
            font-weight: ${({ theme }) => theme.typography.weight.regular};
        }
    }
    ${TitleText} {
        font-size: ${({ theme }) => theme.typography.size.md};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
    }
`;

export const Wrapper = styled.div`
    ${CheckboxListStyle} {
        height: initial;
    }
`;

export const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    margin-top: -0.6rem;
    svg {
        transform: rotate(90deg);
    }
`;

export const FilterButton = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-block: 1.7rem;
    padding-right: 3rem;
    border-block: 0.1rem solid ${({ theme }) => theme.colors.secondaryGrey};
    &:last-child {
        border-top: none;
    }
`;

export const FilteredValueWrapper = styled.span``;

export const FilteredValueTitle = styled.p`
    display: inline;
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const FilteredValue = styled.p`
    display: inline;
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.light};
`;
