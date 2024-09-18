import { MouseEvent } from "react";
import {
    Body,
    BrandAndName,
    ColorCircle,
    Faeture,
    FaetureTitle,
    FaeturesContainer,
    FeatureList,
    Footer,
    ImageContainer,
    Name,
    Price,
    PriceContainer,
    ProductCardStyle,
    Top,
} from "./styled";
import { ProductCardProps } from "./productCard.defs";
import { Button } from "../Buttons";

export default function ProductCard({ data }: ProductCardProps) {
    const addToBasket = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("cl");
    };

    return (
        <ProductCardStyle href="#">
            <Top>
                <ImageContainer>
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
                        alt={data.name}
                    />
                </ImageContainer>
            </Top>
            <Body>
                <BrandAndName title={data.name}>
                    {data.brand} - <Name>{data.name}</Name>
                </BrandAndName>
                <FaeturesContainer>
                    <Faeture>
                        <FaetureTitle>Colors</FaetureTitle>
                        <FeatureList>
                            {<ColorCircle color={data.color} />}
                            {/* MULTIPLE FEATURE LOGIC */}
                            {/* <>
                                {data.color.map((color, i) => {
                                if (i > 4) return false;
                                return <ColorCircle color={color} key={i} />;
                                })}
                                {data.color.length > 4 && <MoreFeatureCount>+{data.color.length - 4}</MoreFeatureCount>}
                                </>
                            */}
                            {/*  */}
                        </FeatureList>
                    </Faeture>
                </FaeturesContainer>
            </Body>
            <Footer>
                <PriceContainer>
                    {/* DISCOUNT FEATURE */}
                    {/* {true && <OldPrice>129.00 ₺</OldPrice>} */}
                    {/*  */}
                    <Price>{data.price} ₺</Price>
                </PriceContainer>
                <Button
                    variant="outline"
                    $kind="dark"
                    fullwidth
                    onClick={addToBasket}
                >
                    Sepete Ekle
                </Button>
            </Footer>
        </ProductCardStyle>
    );
}
