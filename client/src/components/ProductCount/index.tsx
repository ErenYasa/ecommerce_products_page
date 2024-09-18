import { Count, ProductCountStyle } from "./styled";
import { ProductCountProps } from "./productCount.defs";

export default function ProductCount({ count }: ProductCountProps) {
    return (
        <ProductCountStyle>
            {count > 0 && (
                <>
                    <Count>{count}</Count>products are listed.
                </>
            )}
        </ProductCountStyle>
    );
}
