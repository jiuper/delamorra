import axios from "axios";

import type { GetFavorDto } from "@/entities";
import { Favor } from "@/view";

export default function IndexPage({ favor }: { favor: GetFavorDto[] }) {
    return <Favor favor={favor} />;
}
export const getStaticProps = async () => {
    const resEquipments = await axios<GetFavorDto[]>("https://photo-studio-api.onrender.com/equipment");
    const favor = resEquipments.data;

    return {
        props: {
            favor,
        },
    };
};
