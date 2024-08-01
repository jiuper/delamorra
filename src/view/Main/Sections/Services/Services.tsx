import { useState } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import { ModalCallback } from "@/components/_Modals/ModalCallback";
import type { GetEquipmentDto, GetFavorDto } from "@/entities";
import { EquipmentTypes } from "@/entities";
import CARDWOMENONE from "@/shared/assests/card-women.png";
import CARDWOMENFOUR from "@/shared/assests/card-women-four.png";
import CARDWOMENTHREE from "@/shared/assests/card-women-three.png";
import CARDWOMENTWO from "@/shared/assests/card-women-two.png";
import SERTIFICATE from "@/shared/assests/аренда.jpg";
import SERTIFICATE_1 from "@/shared/assests/индивид.jpg";
import { API_BASE } from "@/shared/constants/private";
import { Routes } from "@/shared/constants/Routing";
import { useBooleanState } from "@/shared/hooks";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { CardServiceMore } from "@/view/Main/Sections/Services/components/CardServiceMore";
import { CardServiceShort } from "@/view/Main/Sections/Services/components/CardServiceShort";

import styles from "./Services.module.scss";

const cx = cnBind.bind(styles);
type ServicesProps = { favor: GetFavorDto[]; equipments: GetEquipmentDto[] };
export const Services = ({ favor, equipments }: ServicesProps) => {
    const router = useRouter();
    const [value, setValue] = useState<string>("");
    const [isModal, onOpenModal, onCloseModal] = useBooleanState(false);
    const handleOnClick = (val: string) => {
        onOpenModal();
        setValue(`Вид съемки: ${val}`);
    };

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
                            count={equipments.filter((el) => el.type === EquipmentTypes.DRESS).length}
                            titleCount="платьев"
                            src={`${API_BASE}/picture/${favor[0]?.pictureId}`}
                            title="Платья в аренду"
                            description="У нас много одежды для ваших сьемок"
                            onClick={() => router.push(`${`${Routes.EQUIPMENTS}/${EquipmentTypes.DRESS}`}`)}
                        />
                        <div className={cx("card-short-wrapper")}>
                            <div className={cx("item")}>
                                <CardServiceShort
                                    count={equipments.filter((el) => el.type === EquipmentTypes.EQUIPMENT).length}
                                    titleCount="оборудований"
                                    src={`${API_BASE}/picture/${favor[1]?.pictureId}`}
                                    title="Аренда оборудования"
                                    description="У нас много оборудования!"
                                    onClick={() => router.push(`${`${Routes.EQUIPMENTS}/${EquipmentTypes.EQUIPMENT}`}`)}
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
                                    src={`${API_BASE}/picture/${favor[2]?.pictureId}`}
                                    title="Ассистент на сьемку"
                                    description="1000 ₽ / час  9000 ₽ / 10 часов"
                                    onClick={handleOnClick}
                                />
                            </div>
                        </div>
                        <CardServiceMore
                            count={equipments.filter((el) => el.type === EquipmentTypes.REQUISITE).length}
                            titleCount="предметов"
                            src={`${API_BASE}/picture/${favor[3]?.pictureId}`}
                            title="Аренда реквизита"
                            description="У нас много классного реквезита для ваших сьемок"
                            onClick={() => router.push(`${`${Routes.EQUIPMENTS}/${EquipmentTypes.REQUISITE}`}`)}
                        />
                    </div>
                    <div className={cx("card-wrapper-item")}>
                        <CardServiceMore
                            count={0}
                            titleCount=""
                            src={SERTIFICATE_1.src}
                            title="Абонементы на сьемку"
                            description="У нас вы можете приобрести абонементы на сьемку"
                            onClick={handleOnClick}
                        />
                        <div className={cx("card-short-wrapper")}>
                            <div className={cx("item")}>
                                <CardServiceShort
                                    titleCount=""
                                    src={SERTIFICATE.src}
                                    title="Сетификаты на сьемку"
                                    description="У нас вы можете приобрести сетификаты на сьемку"
                                    onClick={handleOnClick}
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
                </div>
            </div>
            <ModalCallback caption={value} onClose={onCloseModal} isOpen={isModal} />
        </div>
    );
};
