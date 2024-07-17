import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardEquipment.module.scss";

const cx = cnBind.bind(styles);
type CardEquipmentProps = {
    id: string;
    title: string;
    description: string;
    pictureId: string;
    onClick?: () => void;
};
export const CardEquipment = ({ id, title, description, pictureId, onClick }: CardEquipmentProps) => {
    return (
        <div className={cx("card-equipment")}>
            <div className={cx("image-wrapper")}>
                <CustomImage width={415} height={415} className={cx("image")} src={pictureId} alt="equipment" />
            </div>

            <div className={cx("content")}>
                <span className={cx("title")}>{title}</span>
                <span className={cx("description")}>{description}</span>
            </div>
            <Button onClick={onClick} className={cx("button-wrapper")} mode="outlined" label="Забронировать" />
        </div>
    );
};
