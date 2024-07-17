import axios from "axios";

import type { GetEquipmentDto, GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
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
    const resFilming = await axios<GetFilmingDto[]>(`${API_BASE}/filming`);
    const resFavor = await axios<GetFilmingDto[]>(`${API_BASE}/favor`);
    const resPromotion = await axios<GetPromotionDto[]>(`${API_BASE}/promotion`);
    const resEquipment = await axios<GetPromotionDto[]>(`${API_BASE}/equipment`);
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
