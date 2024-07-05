import type { MenuItem } from "primereact/menuitem";

import { FormPresent } from "@/components/_Forms/FormPresent";
import { BreadCrumb } from "@/components/BreadCrumb";
import { PageLayout } from "@/layouts/PageLayout";
import { Location } from "@/view/Contacts/Location";

export const Contacts = () => {
    const breadcrumbs: MenuItem[] = [{ label: "Контакты" }];

    return (
        <PageLayout>
            <BreadCrumb model={breadcrumbs} />
            <Location />
            <FormPresent />
        </PageLayout>
    );
};
