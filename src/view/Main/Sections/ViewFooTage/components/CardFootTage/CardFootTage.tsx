import cnBind from "classnames/bind";

import type { GetFilmingDto } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardFootTage.module.scss";

const cx = cnBind.bind(styles);
type Props = GetFilmingDto & {
    className?: string;
    src: string;
    onClick?: (val: string) => void;
};
export const CardFootTage = ({ className, title, price, src, description, otherPrice, onClick }: Props) => {
    return (
        <div className={cx("card-foot", className)}>
            <CustomImage className={cx("image")} width={850} height={544} src={src} alt={title} />
            <div className={cx("info")}>
                <div className={cx("title-wrapper")}>
                    <span className={cx("title")}>{title}</span>
                    <Button mode="outlined" label="Хочу!" onClick={() => onClick?.(title)} />
                </div>
            </div>
        </div>
    );
};
