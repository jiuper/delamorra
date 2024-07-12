import axios from "axios";
import type { GetStaticPropsContext } from "next";

import type { GetPromotionDto } from "@/entities";
import { News } from "@/view";

export default function IndexPage({ promotion }: { promotion: GetPromotionDto }) {
    return <News promotion={promotion} />;
}

export const getStaticPaths = async () => {
    const res = await axios<GetPromotionDto[]>("https://photo-studio-api.onrender.com/promotion");

    const products = res.data;

    return {
        paths: products.map((product) => {
            return {
                params: { id: product.id },
            };
        }),
        fallback: false,
    };
};
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const id = ctx?.params?.id as string;
    const resPromotion = await axios<GetPromotionDto>(`https://photo-studio-api.onrender.com/promotion/${id}`);
    const promotion = resPromotion.data;

    return {
        props: {
            promotion,
        },
    };
};
