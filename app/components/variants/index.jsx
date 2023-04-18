import Size from '~/components/variants/size';
import Flavor from '~/components/variants/flavor';
export default function Variants({
  product,
  selectedVariant,
  setSelectedVariant,
}) {
  if (product.variants?.nodes[0].selectedOptions[0].name === 'Flavor') {
    return (
      <Flavor
        product={product}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />
    );
  } else {
    return (
      <Size
        product={product}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      />
    );
  }
}
