import cnBind from "classnames/bind";

import { Button } from "@/shared/ui/Button";

import styles from "./CardTariff.module.scss";

type CardTariffProps = {
    id: string;
    count: number;
    caption: string;
    description: string;
    price: number;
    onClick?: (val: string) => void;
};
const cx = cnBind.bind(styles);
export const CardTariff = ({ id, onClick, count, price, caption, description }: CardTariffProps) => {
    return (
        <div className={cx("card-tariff")}>
            <div className={cx("header")}>
                <h4>{count}</h4>
            </div>
            <div className={cx("body")}>
                <div className={cx("option")}>
                    <span className={cx("title")}>{caption}</span>
                    <span className={cx("description")}>{description}</span>
                </div>
            </div>
            <div className={cx("footer")}>
                <h4>{price} ₽</h4>
                <Button onClick={() => onClick?.(caption)} mode="outlined" label="Забронировать" />
            </div>
        </div>
    );
};
