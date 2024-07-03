import axios from "axios";

import type { GetEquipmentDto } from "@/entities";
import { Equipments } from "@/view/Equipments";

export default function IndexPage({ equipments }: { equipments: GetEquipmentDto[] }) {
    return <Equipments listEquipments={equipments} />;
}
export const getStaticProps = async () => {
    const resEquipments = await axios<GetEquipmentDto[]>("https://photo-studio-api.onrender.com/equipment");
    const equipments = resEquipments.data;

    return {
        props: {
            equipments,
        },
    };
};
