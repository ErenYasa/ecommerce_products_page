import { styled } from "styled-components";
import { MLineclamp } from "@/styles/Mixins";
import { ButtonStyle as Button } from "../Buttons/styled";
import { device } from "@/styles/Breakpoints";

export const ProductCardStyle = styled.a`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.placeholderGrey};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    cursor: pointer;
    @media ${device.lg} {
        justify-content: unset;
        &:not(:hover) {
            ${Button} {
                height: 0;
                padding: 0;
                overflow: hidden;
                border: 0;
                transition:
                    height 0.2s,
                    padding 0.2s,
                    margin 0.2s;
            }
        }
        &:hover {
            ${Button} {
                display: flex;
                transition:
                    height 0.2s,
                    padding 0.2s,
                    margin 0.2s;
            }
        }
    }
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const ImageContainer = styled.figure`
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    padding-top: 118%;
    background: ${({ theme }) => theme.colors.placeholderGrey};
    overflow: hidden;
    img {
        position: absolute;
        inset: 0;
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: auto;
    }
`;

export const Body = styled.div`
    margin-bottom: 1rem;
    @media ${device.lg} {
        padding-bottom: 4.75rem;
    }
`;

export const BrandAndName = styled.span`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    font-weight: 500;
    ${MLineclamp()}
`;

export const Name = styled.p`
    display: inline;
    font-weight: 300;
`;

export const FaeturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Faeture = styled.div``;

export const FaetureTitle = styled.p`
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const FeatureList = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
`;

export const ColorCircle = styled.div<{ color: string }>`
    flex: 0 0 auto;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`;

export const MoreFeatureCount = styled.span`
    font-size: 1.3rem;
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    line-height: 1;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: auto;
    @media ${device.lg} {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: 0.5rem;
        background: ${({ theme }) => theme.colors.light};
        ${ProductCardStyle}:hover & {
            box-shadow: 0 -0.1rem 1.1rem -0.6rem black;
        }
    }
    ${Button} {
        padding-block: 0.53rem;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OldPrice = styled.p`
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.light};
    text-decoration: line-through;
`;

export const Price = styled.p`
    font-size: ${({ theme }) => theme.typography.size.md};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    line-height: 1;
`;
