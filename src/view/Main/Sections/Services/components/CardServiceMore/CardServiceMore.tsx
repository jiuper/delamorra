import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardServiceMore.module.scss";

const cx = cnBind.bind(styles);
type CardServiceMoreProps = {
    src: string;
    count: number;
    titleCount: string;
    title: string;
    description: string;
    onClick?: (val: string) => void;
};
export const CardServiceMore = ({ src, count, title, description, titleCount, onClick }: CardServiceMoreProps) => {
    return (
        <div className={cx("card-more")}>
            <div className={cx("image-wrapper")}>
                <CustomImage className={cx("image")} width={385} height={385} src={src} alt="service" />
            </div>

            <div className={cx("info")}>
                <span className={cx("count", count === 0 && "hidden")}>
                    {count}&nbsp;{titleCount}
                </span>
                <div className={cx("title-wrapper")}>
                    <span className={cx("title")}>{title}</span>
                    <span className={cx("description")}>{description}</span>
                    <Button onClick={() => onClick?.(title)} mode="empty-button" label="Узнать больше" />
                </div>
            </div>
        </div>
    );
};
