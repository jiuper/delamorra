import { FormPresent } from "@/components/_Forms/FormPresent";
import type { GetFavorDto, GetFilmingDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { AboutStudio } from "@/view/Main/Sections/AboutStudio";
import { AboutUs } from "@/view/Main/Sections/AboutUs";
import { Booking } from "@/view/Main/Sections/Booking";
import { Equipment } from "@/view/Main/Sections/Equipment";
import { Sale } from "@/view/Main/Sections/Sale";
import { Services } from "@/view/Main/Sections/Services";
import { ViewFooTage } from "@/view/Main/Sections/ViewFooTage";

type MainProps = {
    filming: GetFilmingDto[];
    favor: GetFavorDto[];
};

export const Main = ({ filming, favor }: MainProps) => {
    return (
        <PageLayout>
            <Booking />
            <ViewFooTage filming={filming} />
            <Services favor={favor} />
            <Equipment />
            <AboutStudio />
            <FormPresent />
            <Sale />
            <AboutUs />
        </PageLayout>
    );
};
