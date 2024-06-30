import cnBind from "classnames/bind";
import { Carousel } from "primereact/carousel";

import { ArrowIcon } from "@/shared/assests/icons/svgs";
import SALEONE from "@/shared/assests/sale-one.png";
import SALETWO from "@/shared/assests/sale-two.png";
import { Button } from "@/shared/ui/Button";
import type { CardServiceMoreProps } from "@/view/Main/Sections/Sale/components/CardSale";
import { CardSale } from "@/view/Main/Sections/Sale/components/CardSale";

import styles from "./Sale.module.scss";

const cx = cnBind.bind(styles);

export const Sale = () => {
    const items: CardServiceMoreProps[] = [
        {
            description: "На аренду фотостудии и вещей или -5% на фотосессию у штатного фотографа (пакет)",
            title: "В ваш День Рождения подарим скидку -20%",
            count: 20,
            src: SALEONE.src,
            titleCount: "%",
        },
        {
            description:
                "От 6-ти часов скидка -25%. От 9-ти часов -30%. Действительно только по будням. Применяется автоматически.",
            title: "Бронировании любого зала от 3-х часов",
            count: 25,
            src: SALETWO.src,
            titleCount: "%",
        },
        {
            description: "На аренду фотостудии и вещей или -5% на фотосессию у штатного фотографа (пакет)",
            title: "В ваш День Рождения подарим скидку -20%",
            count: 20,
            src: SALEONE.src,
            titleCount: "%",
        },
        {
            description:
                "От 6-ти часов скидка -25%. От 9-ти часов -30%. Действительно только по будням. Применяется автоматически.",
            title: "Бронировании любого зала от 3-х часов",
            count: 25,
            src: SALETWO.src,
            titleCount: "%",
        },
        {
            description: "На аренду фотостудии и вещей или -5% на фотосессию у штатного фотографа (пакет)",
            title: "В ваш День Рождения подарим скидку -20%",
            count: 20,
            src: SALEONE.src,
            titleCount: "%",
        },
        {
            description:
                "От 6-ти часов скидка -25%. От 9-ти часов -30%. Действительно только по будням. Применяется автоматически.",
            title: "Бронировании любого зала от 3-х часов",
            count: 25,
            src: SALETWO.src,
            titleCount: "%",
        },
    ];
    // eslint-disable-next-line react/no-unstable-nested-components
    const CardSaleCarousel = ({ title, description, count, src, titleCount }: CardServiceMoreProps): JSX.Element => {
        return <CardSale title={title} description={description} count={count} src={src} titleCount={titleCount} />;
    };

    return (
        <div className={cx("sale")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <span className={cx("title")}>Скидки и акции</span>
                    <h2>Акции фотостудии Della Morra</h2>
                    <Button mode="empty-button" label="Смотреть все" />
                </div>
                <div className={cx("carousel-cards")}>
                    <Carousel
                        prevIcon={<ArrowIcon className={cx("prev-icon")} />}
                        nextIcon={<ArrowIcon className={cx("next-icon")} />}
                        showIndicators
                        numScroll={2}
                        numVisible={2}
                        itemTemplate={CardSaleCarousel}
                        value={items}
                    />
                </div>
            </div>
        </div>
    );
};
