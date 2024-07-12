import axios from "axios";
import type { GetStaticPropsContext } from "next";

import type { GetEquipmentDto } from "@/entities";
import { EquipmentTypes } from "@/entities";
import { Equipments } from "@/view/Equipments";

export default function IndexPage({ equipments, type }: { equipments: GetEquipmentDto[]; type: string }) {
    return <Equipments listEquipments={equipments} type={type} />;
}
export const getStaticPaths = () => {
    const products = [EquipmentTypes.DRESS, EquipmentTypes.EQUIPMENT, EquipmentTypes.REQUISITE];

    return {
        paths: products.map((product) => {
            return {
                params: { type: product },
            };
        }),
        fallback: false,
    };
};
export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const type = ctx?.params?.type as string;
    const resEquipments = await axios<GetEquipmentDto[]>("https://photo-studio-api.onrender.com/equipment");
    const equipments = resEquipments.data;

    return {
        props: {
            equipments,
            type,
        },
    };
};
