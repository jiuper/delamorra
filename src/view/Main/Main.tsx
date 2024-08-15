import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

import { FormPresent } from "@/components/_Forms/FormPresent";
import type { GetEquipmentDto, GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { EquipmentTypes } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import def from "@/shared/assests/Мокап абонемента.jpg";
import { AboutStudio } from "@/view/Main/Sections/AboutStudio";
import { AboutUs } from "@/view/Main/Sections/AboutUs";
import { Booking } from "@/view/Main/Sections/Booking";
import { Equipment } from "@/view/Main/Sections/Equipment";
import { Gallery } from "@/view/Main/Sections/Gallery";
import { Sale } from "@/view/Main/Sections/Sale";
import { Services } from "@/view/Main/Sections/Services";
import { ViewFooTage } from "@/view/Main/Sections/ViewFooTage";

type MainProps = {
    filming: GetFilmingDto[];
    favor: GetFavorDto[];
    promotion: GetPromotionDto[];
    equipments: GetEquipmentDto[];
};

export const Main = ({ filming, favor, promotion, equipments }: MainProps) => {
    return (
        <PageLayout>
            <Booking />
            <ViewFooTage filming={filming} />
            <Services favor={favor} equipments={equipments} />
            <Equipment equipments={equipments.filter((el) => el.id === EquipmentTypes.EQUIPMENT)} />
            <AboutStudio />
            <FormPresent />
            <Sale promotion={promotion} />
            <AboutUs />
            {/* <FormBooking /> */}
            <Gallery />
            <TransformWrapper>
                <TransformComponent>
                    <img style={{ width: "400px", height: "400px" }} src={def.src} alt="image" />
                </TransformComponent>
            </TransformWrapper>
        </PageLayout>
    );
};
