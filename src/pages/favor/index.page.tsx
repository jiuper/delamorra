import axios from "axios";

import type { GetFavorDto, GetTariffDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Favor } from "@/view";

export default function IndexPage({ tariff }: { tariff: GetTariffDto[] }) {
    return <Favor tariff={tariff} />;
}
export const getStaticProps = async () => {
    const resTariff = await axios<GetFavorDto[]>(`${API_BASE}/tariff`);
    const tariff = resTariff.data;

    return {
        props: {
            tariff,
        },
    };
};
