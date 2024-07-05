import cnBind from "classnames/bind";

import EMPTY from "@/shared/assests/empty.png";
import GREYWOMEN from "@/shared/assests/gray-women.png";
import ORANGEWOMEN from "@/shared/assests/orange-women.png";
import PHOTO from "@/shared/assests/photoparat.png";
import SERVICELAMP from "@/shared/assests/service-lamp.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Booking.module.scss";

const cx = cnBind.bind(styles);

export const Booking = () => {
    return (
        <div className={cx("booking")}>
            <div className={cx("wrapper", "container")}>
                <h1 className={cx("title")}>Della Morra</h1>
                <div className={cx("content")}>
                    <div className={cx("image")}>
                        <CustomImage src={GREYWOMEN} alt="GREYWOMEN" />
                    </div>
                    <div className={cx("text")}>
                        <span className={cx("label")}>Комфортная фотостудия в самом сердце Санкт-Петербурга</span>
                        <Button mode="outlined" label="Забронировать зал" />
                    </div>
                    <div className={cx("photo")}>
                        <CustomImage src={PHOTO} alt="PHOTO" />
                    </div>
                </div>
                <div className={cx("photos")}>
                    <div className={cx("images")}>
                        <div className={cx("image")}>
                            <CustomImage className={cx("img")} src={ORANGEWOMEN} alt="ORANGEWOMEN" />
                        </div>
                        <div className={cx("image")}>
                            <CustomImage className={cx("img")} src={EMPTY} alt="EMPTY" />
                        </div>
                    </div>

                    <div className={cx("image")}>
                        <CustomImage className={cx("img")} src={SERVICELAMP} alt="SERVICELAMP" />
                    </div>
                </div>
            </div>
        </div>
    );
};
