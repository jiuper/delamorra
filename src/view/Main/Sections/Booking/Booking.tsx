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
const listImg = [ORANGEWOMEN, EMPTY, SERVICELAMP];
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
                        <span>Комфортная фотостудия в самом сердце Санкт-Петербурга</span>
                        <Button mode="outlined" label="Забронировать зал" />
                    </div>
                    <div className={cx("photo")}>
                        <CustomImage src={PHOTO} alt="PHOTO" />
                    </div>
                </div>
                <div className={cx("photos")}>
                    {listImg.map((item, index) => (
                        <div key={index} className={cx("image")}>
                            <CustomImage src={item} alt="image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
