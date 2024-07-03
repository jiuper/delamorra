import axios from "axios";

import type { GetFavorDto, GetTariffDto } from "@/entities";
import { Favor } from "@/view";

export default function IndexPage({ tariff }: { tariff: GetTariffDto[] }) {
    return <Favor tariff={tariff} />;
}
export const getStaticProps = async () => {
    const resTariff = await axios<GetFavorDto[]>("https://photo-studio-api.onrender.com/tariff");
    const tariff = resTariff.data;

    return {
        props: {
            tariff,
        },
    };
};
