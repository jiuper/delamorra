import cnBind from "classnames/bind";

import STUDIOFOUR from "@/shared/assests/studio-four.png";
import STUDIOONE from "@/shared/assests/studio-one.png";
import STUDIOTHREE from "@/shared/assests/studio-three.png";
import STUDIOTWO from "@/shared/assests/studio-two.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./AboutStudio.module.scss";

const cx = cnBind.bind(styles);

export const AboutStudio = () => {
    const studioList = [
        { src: STUDIOONE, text: "Семейных фотосессий" },
        { src: STUDIOTWO, text: "Индивидуальных портретов" },
        { src: STUDIOTHREE, text: "Fashion-съемок/Креативных съемок " },
        { src: STUDIOFOUR, text: "Фотосъемки товаров для маркетплейсов" },
        { src: STUDIOONE, text: "Семейных фотосессий" },
        { src: STUDIOTWO, text: "Индивидуальных портретов" },
        { src: STUDIOTHREE, text: "Fashion-съемок/Креативных съемок " },
        { src: STUDIOFOUR, text: "Фотосъемки товаров для маркетплейсов" },
    ];

    return (
        <div className={cx("about-studio")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h2>Для чего подходит студия?</h2>
                    <Button mode="outlined" label="Забронировать" />
                </div>
                <div className={cx("cards")}>
                    {studioList.map((el) => (
                        <div key={el.src.src} className={cx("content")}>
                            <div className={cx("image-wrapper")}>
                                <CustomImage
                                    className={cx("image")}
                                    width={290}
                                    height={290}
                                    src={el.src.src}
                                    alt="studio"
                                />
                            </div>
                            <span className={cx("text")}>{el.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
