import cnBind from "classnames/bind";
import { Carousel } from "primereact/carousel";

import type { GetPromotionDto } from "@/entities";
import { ArrowIcon } from "@/shared/assests/icons/svgs";
import { Button } from "@/shared/ui/Button";
import type { CardServiceMoreProps } from "@/view/Main/Sections/Sale/components/CardSale";
import { CardSale } from "@/view/Main/Sections/Sale/components/CardSale";

import styles from "./Sale.module.scss";

const cx = cnBind.bind(styles);

export const Sale = ({ promotion }: { promotion: GetPromotionDto[] }) => {
    const responsiveOptions = [
        {
            breakpoint: "1301px",
            numVisible: 2,
            numScroll: 1,
        },
        {
            breakpoint: "1300px",
            numVisible: 1,
            numScroll: 1,
        },
    ];
    // eslint-disable-next-line react/no-unstable-nested-components
    const CardSaleCarousel = ({ title, description, savings, pictureId, id }: CardServiceMoreProps): JSX.Element => {
        return <CardSale title={title} description={description} savings={savings} pictureId={pictureId} id={id} />;
    };

    return (
        <div className={cx("sale")} id="promotion">
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <span className={cx("title")}>Скидки и акции</span>
                    <h2>Акции фотостудии Della Morra</h2>
                    <Button mode="empty-button" label="Смотреть все" style={{ opacity: 0, pointerEvents: "none" }} />
                </div>
                <div className={cx("carousel-cards")}>
                    <Carousel
                        prevIcon={<ArrowIcon className={cx("prev-icon")} />}
                        nextIcon={<ArrowIcon className={cx("next-icon")} />}
                        showIndicators
                        numScroll={2}
                        numVisible={2}
                        itemTemplate={CardSaleCarousel}
                        value={promotion}
                        responsiveOptions={responsiveOptions}
                    />
                </div>
            </div>
        </div>
    );
};
