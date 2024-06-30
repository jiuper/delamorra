import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardServiceShort.module.scss";

const cx = cnBind.bind(styles);
type CardServiceShortProps = {
    src: string;
    count?: number;
    titleCount?: string;
    title: string;
    description: string;
};
export const CardServiceShort = ({ count, titleCount, src, title, description }: CardServiceShortProps) => {
    return (
        <div className={cx("card-short")}>
            <div className={cx("image-wrapper")}>
                <CustomImage className={cx("image")} width={317} height={317} src={src} alt="service" />
                {count && (
                    <span className={cx("count")}>
                        {count}&nbsp;{titleCount}
                    </span>
                )}
            </div>

            <div className={cx("info")}>
                <div className={cx("title-wrapper")}>
                    <span className={cx("title")}>{title}</span>
                    <span className={cx("description")}>{description}</span>
                    <Button mode="empty-button" label="Узнать больше" />
                </div>
            </div>
        </div>
    );
};
