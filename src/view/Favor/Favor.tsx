import type { MenuItem } from "primereact/menuitem";

import { FormBooking } from "@/components/_Forms/FormBooking";
import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetFavorDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { AboutStudio } from "@/view/Main/Sections/AboutStudio";
import { Equipment } from "@/view/Main/Sections/Equipment";
import { Gallery } from "@/view/Main/Sections/Gallery";

type FavorProps = {
    favor: GetFavorDto[];
};
export const Favor = ({ favor }: FavorProps) => {
    const breadcrumbs: MenuItem[] = [{ label: "Аренда фотостудии" }];

    return (
        <PageLayout>
            <BreadCrumb model={breadcrumbs} />
            <div>asd</div>
            <Equipment />
            <AboutStudio />
            <FormBooking />
            <Gallery />
        </PageLayout>
    );
};
