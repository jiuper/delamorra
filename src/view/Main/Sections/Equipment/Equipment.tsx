import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import ITEMFPUR from "@/shared/assests/item-four.png";
import ITEMONE from "@/shared/assests/item-one.png";
import ITEMTHREE from "@/shared/assests/item-three.png";
import ITEMTWO from "@/shared/assests/item-two.png";
import { Routes } from "@/shared/constants/Routing";
import { Button } from "@/shared/ui/Button";
import { CardEquipment } from "@/view/Main/Sections/Equipment/components/CardEquipment";

import styles from "./Equipment.module.scss";

const cx = cnBind.bind(styles);

export const Equipment = () => {
    const router = useRouter();
    const cards = [
        { id: "1", title: "Godox Sk300II", description: "Комплект студийного света", pictureId: ITEMONE.src },
        { id: "2", title: "Fotokvant BF-300B", description: "Светодиодный осветитель", pictureId: ITEMTWO.src },
        { id: "3", title: "от 60х60см до 80х120см", description: "Софтбоксы", pictureId: ITEMTHREE.src },
        { id: "4", title: "120 и 140см", description: "Октабоксы", pictureId: ITEMFPUR.src },
    ];

    return (
        <div className={cx("equipment")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h2>Оборудование</h2>
                    <span className={cx("title")}>
                        В нашей студии есть все необходимое оборудование для проведения профессиональных фото- и
                        видеосъемок
                    </span>
                    <Button onClick={() => router.push(Routes.EQUIPMENTS)} mode="empty-button" label="Смотреть все" />
                </div>
                <div className={cx("cards")}>
                    {cards.map((card) => (
                        <CardEquipment key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </div>
    );
};
