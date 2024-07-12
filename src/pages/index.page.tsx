import axios from "axios";

import type { GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { Main } from "@/view";

export default function IndexPage({
    filming,
    favor,
    promotion,
}: {
    filming: GetFilmingDto[];
    favor: GetFavorDto[];
    promotion: GetPromotionDto[];
}) {
    return <Main filming={filming} favor={favor} promotion={promotion} />;
}

export const getStaticProps = async () => {
    const resFilming = await axios<GetFilmingDto[]>("https://photo-studio-api.onrender.com/filming");
    const resFavor = await axios<GetFilmingDto[]>("https://photo-studio-api.onrender.com/favor");
    const resPromotion = await axios<GetPromotionDto[]>(`https://photo-studio-api.onrender.com/promotion`);
    const promotion = resPromotion.data;
    const filming = resFilming.data;
    const favor = resFavor.data;

    return {
        props: {
            filming,
            favor,
            promotion,
        },
    };
};
