"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { DollarSign } from "lucide-react";
import { useAppDispatch } from "@/hook/redux.hook";
import { addToCart } from "@/redux/slices/cartSlice";

export function ProductItem({
    // date,
    // title,
    //description,
    // cover,
    // authors,
    _id,
    title,
    slug,
    imageUrl,
    price,
    ...rest
}: // BlogMdxFrontmatter & { slug: string })
    Product) {

    const dispatch = useAppDispatch();
    return (
        <div className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[300px]">

            <div className="w-full">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={400}
                    height={150}
                    quality={80}
                    className="w-full rounded-md object-cover h-[180px] border"
                />
            </div>
            {/* <p className="text-sm text-muted-foreground">{description}</p> */}
            <div className="flex items-center justify-between w-full mt-auto">
                <Link
                    href={`store/${slug}`}
                >
                    <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>  </Link>
                {/* <AvatarGroup users={authors} /> */}
                <div className="flex items-center">
                    <DollarSign /> {price}
                </div>
            </div>
            <button
                onClick={() =>
                    dispatch(
                        addToCart({
                            _id,
                            title,
                            slug,
                            imageUrl,
                            price,
                            ...rest,
                        })
                    )
                }
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Add to Cart
            </button>
        </div>

    );
}

