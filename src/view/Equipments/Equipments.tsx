import cnBind from "classnames/bind";
import type { MenuItem } from "primereact/menuitem";

import { FormPresent } from "@/components/_Forms/FormPresent";
import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetEquipmentDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { CardEquipment } from "@/view/Main/Sections/Equipment/components/CardEquipment";

import styles from "./Equipments.module.scss";

const cx = cnBind.bind(styles);
type EquipmentsProps = {
    listEquipments: GetEquipmentDto[];
    type: string;
};
export const Equipments = ({ listEquipments, type }: EquipmentsProps) => {
    const breadcrumbs: MenuItem[] = [{ label: "Оборудование" }];
    const filterListObjects = listEquipments.filter((el) => el.type === type);

    return (
        <PageLayout>
            <BreadCrumb model={breadcrumbs} />
            <div className={cx("equipments")}>
                <div className={cx("wrapper", "container")}>
                    <h1>Оборудование</h1>
                    <div className={cx("content")}>
                        {filterListObjects.map((el) => (
                            <CardEquipment
                                key={el.id}
                                {...el}
                                pictureId={`https://photo-studio-api.onrender.com/picture/${el.pictureId}`}
                            />
                        ))}
                    </div>
                </div>
                <FormPresent />
            </div>
        </PageLayout>
    );
};
