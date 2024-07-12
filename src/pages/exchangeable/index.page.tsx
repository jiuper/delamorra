import axios from "axios";

import type { GetEquipmentDto, GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { Admin } from "@/view/Admin";

export default function IndexPage({
    filming,
    favor,
    promotion,
    equipment,
}: {
    filming: GetFilmingDto[];
    favor: GetFavorDto[];
    promotion: GetPromotionDto[];
    equipment: GetEquipmentDto[];
}) {
    return <Admin filming={filming} favor={favor} promotion={promotion} equipment={equipment} />;
}

export async function getStaticProps() {
    const resFilming = await axios<GetFilmingDto[]>("https://photo-studio-api.onrender.com/filming");
    const resFavor = await axios<GetFilmingDto[]>("https://photo-studio-api.onrender.com/favor");
    const resPromotion = await axios<GetPromotionDto[]>(`https://photo-studio-api.onrender.com/promotion`);
    const resEquipment = await axios<GetPromotionDto[]>(`https://photo-studio-api.onrender.com/equipment`);
    const promotion = resPromotion.data;
    const filming = resFilming.data;
    const favor = resFavor.data;
    const equipment = resEquipment.data;

    return {
        props: {
            filming,
            favor,
            promotion,
            equipment,
        },
    };
}
