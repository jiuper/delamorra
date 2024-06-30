import axios from "axios";

import type { GetFavorDto, GetFilmingDto } from "@/entities";
import { Main } from "@/view";

export default function IndexPage({ filming, favor }: { filming: GetFilmingDto[]; favor: GetFavorDto[] }) {
    return <Main filming={filming} favor={favor} />;
}

export const getStaticProps = async () => {
    const resFilming = await axios<GetFilmingDto[]>("https://photo-studio-api.onrender.com/filming");
    const resFavor = await axios<GetFilmingDto[]>("https://photo-studio-api.onrender.com/favor");
    const filming = resFilming.data;
    const favor = resFavor.data;

    return {
        props: {
            filming,
            favor,
        },
    };
};
