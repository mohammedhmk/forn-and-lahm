import Image from "next/image";
import { SectionHeader } from "../ui/SectionHeader";
import { SHOWCASE_PRODUCTS } from "@/data/products";

export function ProductShowcase() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="من أطباقنا"
          subtitle="نار حقيقية، تحضير طازج يوميًا — هذه لمحة من مطبخنا"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {SHOWCASE_PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-surface"
            >
              <Image
                src={product.image}
                alt={`${product.name} - فرن ولحم`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <p className="absolute bottom-3 inset-x-3 text-center text-textPrimary font-bold text-sm md:text-base drop-shadow-lg">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
