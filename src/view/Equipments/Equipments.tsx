import cnBind from "classnames/bind";

import { FormPresent } from "@/components/_Forms/FormPresent";
import type { GetEquipmentDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { CardEquipment } from "@/view/Main/Sections/Equipment/components/CardEquipment";

import styles from "./Equipments.module.scss";

const cx = cnBind.bind(styles);
type EquipmentsProps = {
    listEquipments: GetEquipmentDto[];
};
export const Equipments = ({ listEquipments }: EquipmentsProps) => {
    return (
        <PageLayout>
            <div className={cx("equipments")}>
                <div className={cx("wrapper", "container")}>
                    <h1>Оборудование</h1>
                    <div className={cx("content")}>
                        {listEquipments.map((el) => (
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
