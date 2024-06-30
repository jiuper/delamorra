import cnBind from "classnames/bind";

import ITEMFPUR from "@/shared/assests/item-four.png";
import ITEMONE from "@/shared/assests/item-one.png";
import ITEMTHREE from "@/shared/assests/item-three.png";
import ITEMTWO from "@/shared/assests/item-two.png";
import { Button } from "@/shared/ui/Button";
import { CardEquipment } from "@/view/Main/Sections/Equipment/components/CardEquipment";

import styles from "./Equipment.module.scss";

const cx = cnBind.bind(styles);

export const Equipment = () => {
    const cards = [
        { title: "Godox Sk300II", description: "Комплект студийного света", src: ITEMONE },
        { title: "Fotokvant BF-300B", description: "Светодиодный осветитель", src: ITEMTWO },
        { title: "от 60х60см до 80х120см", description: "Софтбоксы", src: ITEMTHREE },
        { title: "120 и 140см", description: "Октабоксы", src: ITEMFPUR },
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
                    <Button mode="empty-button" label="Смотреть все" />
                </div>
                <div className={cx("cards")}>
                    {cards.map((card) => (
                        <CardEquipment
                            key={card.title}
                            src={card.src.src}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
