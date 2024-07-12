import { FormBooking } from "@/components/_Forms/FormBooking";
import { FormPresent } from "@/components/_Forms/FormPresent";
import type { GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
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
};

export const Main = ({ filming, favor, promotion }: MainProps) => {
    return (
        <PageLayout>
            <Booking />
            <ViewFooTage filming={filming} />
            <Services favor={favor} />
            <Equipment />
            <AboutStudio />
            <FormPresent />
            <Sale promotion={promotion} />
            <AboutUs />
            <FormBooking />
            <Gallery />
        </PageLayout>
    );
};
