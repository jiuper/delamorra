import axios from "axios";

import type { GetEquipmentDto, GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Main } from "@/view";

export default function IndexPage({
    filming,
    favor,
    promotion,
    equipments,
}: {
    filming: GetFilmingDto[];
    favor: GetFavorDto[];
    promotion: GetPromotionDto[];
    equipments: GetEquipmentDto[];
}) {
    return <Main equipments={equipments} filming={filming} favor={favor} promotion={promotion} />;
}

export const getStaticProps = async () => {
    const resFilming = await axios<GetFilmingDto[]>(`${API_BASE}/filming`);
    const resFavor = await axios<GetFilmingDto[]>(`${API_BASE}/favor`);
    const resPromotion = await axios<GetPromotionDto[]>(`${API_BASE}/promotion`);
    const resEquipments = await axios<GetPromotionDto[]>(`${API_BASE}/equipment`);
    const promotion = resPromotion.data;
    const filming = resFilming.data;
    const favor = resFavor.data;
    const equipments = resEquipments.data;

    return {
        props: {
            filming,
            favor,
            promotion,
            equipments,
        },
    };
};
