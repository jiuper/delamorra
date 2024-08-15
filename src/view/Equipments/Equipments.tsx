import cnBind from "classnames/bind";
import type { MenuItem } from "primereact/menuitem";

import { FormPresent } from "@/components/_Forms/FormPresent";
import { ModalCallback } from "@/components/_Modals/ModalCallback";
import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetEquipmentDto } from "@/entities";
import { EquipmentTypes } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { API_BASE } from "@/shared/constants/private";
import { useBooleanState } from "@/shared/hooks";
import { CardEquipment } from "@/view/Main/Sections/Equipment/components/CardEquipment";

import styles from "./Equipments.module.scss";

const cx = cnBind.bind(styles);
type EquipmentsProps = {
    listEquipments: GetEquipmentDto[];
    type: string;
};
export const Equipments = ({ listEquipments, type }: EquipmentsProps) => {
    const path: Record<string, string> = {
        [EquipmentTypes.DRESS]: "Платья",
        [EquipmentTypes.EQUIPMENT]: "Оборудование",
        [EquipmentTypes.REQUISITE]: "Реквизит",
    };
    const breadcrumbs: MenuItem[] = [{ label: path[type] }];
    const filterListObjects = listEquipments.filter((el) => el.type === type);
    const [isModal, onOpenModal, onCloseModal] = useBooleanState(false);

    return (
        <PageLayout>
            <BreadCrumb model={breadcrumbs} />
            <div className={cx("equipments")}>
                <div className={cx("wrapper", "container")}>
                    <h1>Оборудование</h1>
                    <div className={cx("content")}>
                        {filterListObjects.map((el) => (
                            <CardEquipment
                                onClick={onOpenModal}
                                key={el.id}
                                {...el}
                                // @typescript-eslint/restrict-template-expressions
                                pictureId={`${API_BASE}/picture/${el.pictureId}`}
                            />
                        ))}
                    </div>
                </div>
                <FormPresent />
                <ModalCallback onClose={onCloseModal} isOpen={isModal} />
            </div>
        </PageLayout>
    );
};
