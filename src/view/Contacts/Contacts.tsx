import { FormPresent } from "@/components/_Forms/FormPresent";
import { PageLayout } from "@/layouts/PageLayout";
import { Location } from "@/view/Contacts/Location";

export const Contacts = () => {
    return (
        <PageLayout>
            <Location />
            <FormPresent />
        </PageLayout>
    );
};
