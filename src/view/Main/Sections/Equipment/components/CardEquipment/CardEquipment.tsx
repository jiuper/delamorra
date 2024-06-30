import cnBind from "classnames/bind";

import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardEquipment.module.scss";

const cx = cnBind.bind(styles);
type CardEquipmentProps = {
    src: string;
    title: string;
    description: string;
};
export const CardEquipment = ({ src, title, description }: CardEquipmentProps) => {
    return (
        <div className={cx("card-equipment")}>
            <div className={cx("image-wrapper")}>
                <CustomImage width={415} height={415} className={cx("image")} src={src} alt="equipment" />
            </div>

            <div className={cx("content")}>
                <span className={cx("title")}>{title}</span>
                <span className={cx("description")}>{description}</span>
            </div>
        </div>
    );
};
