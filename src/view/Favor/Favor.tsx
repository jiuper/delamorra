import { useState } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Carousel } from "primereact/carousel";
import type { MenuItem } from "primereact/menuitem";

import { FormBooking } from "@/components/_Forms/FormBooking";
import { ModalCallback } from "@/components/_Modals/ModalCallback";
import { ModalTariff } from "@/components/_Modals/ModalTariff";
import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetTariffDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import BATHROOM from "@/shared/assests/bathroom.png";
import BEDROOM from "@/shared/assests/bedroom.png";
import { ArrowIcon } from "@/shared/assests/icons/svgs";
import { useBooleanState } from "@/shared/hooks";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { CardTariff } from "@/view/Favor/components/CardTariff";
import { AboutStudio } from "@/view/Main/Sections/AboutStudio";
import { Equipment } from "@/view/Main/Sections/Equipment";
import { Gallery } from "@/view/Main/Sections/Gallery";

import styles from "./Favor.module.scss";

const cx = cnBind.bind(styles);
type FavorProps = {
    tariff: GetTariffDto[];
};
export const Favor = ({ tariff }: FavorProps) => {
    const router = useRouter();
    const [isModal, onOpenModal, onCloseModal] = useBooleanState(false);
    const breadcrumbs: MenuItem[] = [{ label: "Аренда фотостудии" }];
    const items = [BEDROOM, BATHROOM, BEDROOM, BATHROOM, BEDROOM, BATHROOM];
    // eslint-disable-next-line react/no-unstable-nested-components
    const CardSaleCarousel = ({ src }: { src: string }) => {
        return <CustomImage className={cx("card")} width={850} height={387} src={src} alt="carusel" />;
    };
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

    const [value, setValue] = useState<string>("");
    const [isModalCallBack, onOpenModalCallBack, onCloseModalCallBack] = useBooleanState(false);
    const handleOnClick = (val: string) => {
        onOpenModalCallBack();
        setValue(`Тариф: ${val}`);
    };

    return (
        <PageLayout>
            <BreadCrumb model={breadcrumbs} />
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h1>Аренда фотостудии</h1>
                    <span className={cx("title")}>
                        Мягкий дневной свет, льющийся из больших окон. Паркетный пол, который приятно поскрипывает под
                        вашими ногами. Стильная мебель и изысканные аксессуары, которые создают неповторимую атмосферу.
                        Добро пожаловать вы попали в Della Morra!
                    </span>
                </div>
                <div className={cx("carousel-cards")}>
                    <div className={cx("buttons")}>
                        <Button
                            mode="outlined"
                            label="Забронировать"
                            onClick={() =>
                                router.push(
                                    "https://appevent.ru/widget/landing?widget_key=116a292ebe50d796e2310e659871f438",
                                )
                            }
                        />
                        <Button onClick={onOpenModal} mode="outlined" label="Подробнее" />
                    </div>

                    <Carousel
                        prevIcon={<ArrowIcon className={cx("prev-icon")} />}
                        nextIcon={<ArrowIcon className={cx("next-icon")} />}
                        showIndicators={false}
                        numScroll={1}
                        numVisible={2}
                        itemTemplate={CardSaleCarousel}
                        value={items}
                        responsiveOptions={responsiveOptions}
                    />
                </div>
                <div className={cx("tariffs")}>
                    <h2>Тарифы</h2>
                    <div className={cx("cards")}>
                        {tariff.map((el, i) => (
                            <CardTariff onClick={handleOnClick} {...el} count={i + 1} key={i} />
                        ))}
                    </div>
                </div>
            </div>
            <Equipment equipments={[]} />
            <AboutStudio />
            <FormBooking />
            <Gallery />
            <ModalTariff onClick={handleOnClick} tariff={tariff} isOpen={isModal} onClose={onCloseModal} />
            <ModalCallback caption={value} onClose={onCloseModalCallBack} isOpen={isModalCallBack} />
        </PageLayout>
    );
};
