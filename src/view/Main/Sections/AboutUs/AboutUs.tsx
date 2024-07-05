import cnBind from "classnames/bind";

import ABOUTONE from "@/shared/assests/about-one.png";
import ABOUTTWO from "@/shared/assests/about-two.png";
import CAMERA from "@/shared/assests/icons/camera.svg";
import CAR from "@/shared/assests/icons/car.svg";
import CUPON from "@/shared/assests/icons/cupon.svg";
import MAP from "@/shared/assests/icons/map.svg";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./AboutUs.module.scss";

const cx = cnBind.bind(styles);

export const AboutUs = () => {
    const listCards = [
        { title: "Вся студия только для вас", src: CAMERA as string },
        { title: "Всегда есть парковочные места", src: CAR as string },
        { title: "В самом центре", src: MAP as string },
        { title: "Программа лояльности", src: CUPON as string },
    ];

    return (
        <div className={cx("about-us")} id="aboutUs">
            <div className={cx("wrapper", "container")}>
                <div className={cx("content-container")}>
                    <div className={cx("image-container-top")}>
                        <CustomImage className={cx("image")} width={145} height={145} src={ABOUTONE} alt="about-us" />
                    </div>
                    <div className={cx("content")}>
                        <h1 className={cx("title")}>Della Morra</h1>
                        <h2 className={cx("subtitle")}>комфортная фотостудия в самом сердце Санкт-Петербурга.</h2>
                        <span className={cx("text")}>
                            Мягкий дневной свет, льющийся из больших окон. Паркетный пол, который приятно поскрипывает
                            под вашими ногами. Стильная мебель и изысканные аксессуары, которые создают неповторимую
                            атмосферу. Добро пожаловать вы попали в Della Morra White.
                        </span>
                    </div>
                    <div className={cx("image-container-bottom")}>
                        <CustomImage className={cx("image")} width={270} height={125} src={ABOUTTWO} alt="about-us" />
                    </div>
                </div>
                <div className={cx("cards")}>
                    {listCards.map((item, index) => (
                        <div className={cx("card")} key={index}>
                            <CustomImage
                                className={cx("cards-image")}
                                width={36}
                                height={36}
                                src={item.src}
                                alt={item.title}
                            />
                            <span className={cx("cards-text")}>{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
