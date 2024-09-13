import { MouseEvent } from "react";
import { Button } from "../Buttons";
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
    MoreFeatureCount,
    Name,
    OldPrice,
    Price,
    PriceContainer,
    ProductCardStyle,
    Top,
} from "./styled";

const COLORS = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#000000",
    "#c0c0c0",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#800080",
    "#008080",
    "#000080",
];

export default function ProductCard({ isDiscount = false }) {
    const addFnc = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("cl");
    };

    return (
        <ProductCardStyle href="#">
            <Top>
                <ImageContainer>
                    <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg"
                        alt="product"
                    />
                </ImageContainer>
            </Top>
            <Body>
                <BrandAndName title="Sports - Recycled Frozen Fish Recycled Frozen Fish Recycled Frozen Fish Recycled Frozen Fish">
                    Sports -{" "}
                    <Name>
                        Recycled Frozen Fish Recycled Frozen Fish Recycled
                        Frozen Fish Recycled Frozen Fish
                    </Name>
                </BrandAndName>
                <FaeturesContainer>
                    <Faeture>
                        <FaetureTitle>Colors</FaetureTitle>
                        <FeatureList>
                            <>
                                {COLORS.map((color, i) => {
                                    if (i > 4) return false;
                                    return (
                                        <ColorCircle color={color} key={i} />
                                    );
                                })}
                                {COLORS.length > 4 && (
                                    <MoreFeatureCount>
                                        +{COLORS.length - 4}
                                    </MoreFeatureCount>
                                )}
                            </>
                        </FeatureList>
                    </Faeture>
                    {isDiscount && (
                        <Faeture>
                            <FaetureTitle>Colors</FaetureTitle>
                            <FeatureList>
                                <>
                                    {COLORS.map((color, i) => {
                                        if (i > 4) return false;
                                        return (
                                            <ColorCircle
                                                color={color}
                                                key={i}
                                            />
                                        );
                                    })}
                                    {COLORS.length > 4 && (
                                        <MoreFeatureCount>
                                            +{COLORS.length - 4}
                                        </MoreFeatureCount>
                                    )}
                                </>
                            </FeatureList>
                        </Faeture>
                    )}
                </FaeturesContainer>
            </Body>
            <Footer>
                <PriceContainer>
                    {isDiscount && <OldPrice>129.00 ₺</OldPrice>}
                    <Price>109.00 ₺</Price>
                </PriceContainer>
                <Button
                    variant="outline"
                    kind="dark"
                    fullwidth
                    onClick={addFnc}
                >
                    Sepete Ekle
                </Button>
            </Footer>
        </ProductCardStyle>
    );
}
