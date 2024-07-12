import { useState } from "react";
import cnBind from "classnames/bind";
import { Dropdown } from "primereact/dropdown";

import type { GetEquipmentDto, GetFavorDto, GetFilmingDto, GetPromotionDto } from "@/entities";
import { AdminEquipment } from "@/view/Admin/Equipment/AdminEquipment";
import { AdminFilming } from "@/view/Admin/Filming/AdminFilming";
import { AdminNews } from "@/view/Admin/News/AdminNews";

import styles from "./Admin.module.scss";

const cx = cnBind.bind(styles);
type PropsType = {
    filming: GetFilmingDto[];
    favor: GetFavorDto[];
    promotion: GetPromotionDto[];
    equipment: GetEquipmentDto[];
};
export const Admin = ({ filming, favor, promotion, equipment }: PropsType) => {
    const [selectedId, setSelectedId] = useState<string>("create");

    return (
        <div className={cx("admin")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h1>Админ панель</h1>
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => setSelectedId(e.value as string)}
                        options={[{ name: "create" }, { name: "edit" }]}
                        optionLabel="name"
                        optionValue="name"
                        placeholder="Select a Action"
                        className={cx("dropdown")}
                    />
                </div>

                <AdminFilming filming={filming} isEdit={selectedId === "edit"} />
                <AdminEquipment equipment={equipment} isEdit={selectedId === "edit"} />
                <AdminNews promotion={promotion} isEdit={selectedId === "edit"} />
            </div>
        </div>
    );
};
