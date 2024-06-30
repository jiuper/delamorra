import cnBind from "classnames/bind";

import ABOUTONE from "@/shared/assests/about-one.png";
import ABOUTTWO from "@/shared/assests/about-two.png";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./AboutUs.module.scss";

const cx = cnBind.bind(styles);

export const AboutUs = () => {
    return (
        <div className={cx("about-us")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("image-container-top")}>
                    <CustomImage className={cx("image")} width={145} height={145} src={ABOUTONE} alt="about-us" />
                </div>
                <div className={cx("content")}>
                    <h1 className={cx("title")}>Della Morra</h1>
                    <h2 className={cx("subtitle")}>комфортная фотостудия в самом сердце Санкт-Петербурга.</h2>
                    <span className={cx("text")}>
                        Мягкий дневной свет, льющийся из больших окон. Паркетный пол, который приятно поскрипывает под
                        вашими ногами. Стильная мебель и изысканные аксессуары, которые создают неповторимую атмосферу.
                        Добро пожаловать вы попали в Della Morra White.
                    </span>
                </div>
                <div className={cx("image-container-bottom")}>
                    <CustomImage className={cx("image")} width={270} height={125} src={ABOUTTWO} alt="about-us" />
                </div>
            </div>
        </div>
    );
};
