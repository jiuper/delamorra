import cnBind from "classnames/bind";

import type { GetFavorDto } from "@/entities";
import CARDWOMENONE from "@/shared/assests/card-women.png";
import CARDWOMENFOUR from "@/shared/assests/card-women-four.png";
import CARDWOMENTHREE from "@/shared/assests/card-women-three.png";
import CARDWOMENTWO from "@/shared/assests/card-women-two.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { CardServiceMore } from "@/view/Main/Sections/Services/components/CardServiceMore";
import { CardServiceShort } from "@/view/Main/Sections/Services/components/CardServiceShort";

import styles from "./Services.module.scss";

const cx = cnBind.bind(styles);
type ServicesProps = { favor: GetFavorDto[] };
export const Services = ({ favor }: ServicesProps) => {
    return (
        <div className={cx("services")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <span className={cx("title")}>услуги</span>
                    <h2>Услуги студии Della Morra</h2>
                    <Button mode="empty-button" label="Смотреть все" style={{ opacity: 0, pointerEvents: "none" }} />
                </div>
                <div className={cx("cards")}>
                    <div className={cx("card-wrapper-item")}>
                        <CardServiceMore
                            count={38}
                            titleCount="платьев"
                            src={`https://photo-studio-api.onrender.com/picture/${favor[0]?.pictureId}`}
                            title="Платья в аренду"
                            description="У нас много одежды для ваших сьемок"
                        />
                        <div className={cx("card-short-wrapper")}>
                            <div className={cx("item")}>
                                <CardServiceShort
                                    count={60}
                                    titleCount="оборудований"
                                    src={`https://photo-studio-api.onrender.com/picture/${favor[1]?.pictureId}`}
                                    title="Аренда оборудования"
                                    description="У нас много оборудования!"
                                />
                            </div>
                            <div className={cx("item-image")}>
                                <CustomImage
                                    width={124}
                                    height={124}
                                    className={cx("image")}
                                    src={CARDWOMENONE}
                                    alt="women"
                                />
                                <CustomImage
                                    className={cx("image-last")}
                                    width={270}
                                    height={125}
                                    src={CARDWOMENTWO}
                                    alt="women"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("card-wrapper-other")}>
                        <div className={cx("card-short-wrapper")}>
                            <div className={cx("item-image")}>
                                <CustomImage
                                    width={124}
                                    height={124}
                                    className={cx("image")}
                                    src={CARDWOMENTHREE}
                                    alt="women"
                                />
                                <CustomImage
                                    className={cx("image-bottom")}
                                    width={124}
                                    height={125}
                                    src={CARDWOMENFOUR}
                                    alt="women"
                                />
                            </div>
                            <div className={cx("item")}>
                                <CardServiceShort
                                    src={`https://photo-studio-api.onrender.com/picture/${favor[2]?.pictureId}`}
                                    title="Ассистент на сьемку"
                                    description="1000 ₽ / час  9000 ₽ / 10 часов"
                                />
                            </div>
                        </div>
                        <CardServiceMore
                            count={38}
                            titleCount="предметов"
                            src={`https://photo-studio-api.onrender.com/picture/${favor[3]?.pictureId}`}
                            title="Аренда реквизита"
                            description="У нас много классного реквезита для ваших сьемок"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
