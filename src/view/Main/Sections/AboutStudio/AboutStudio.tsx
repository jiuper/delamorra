import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import STUDIOFOUR from "@/shared/assests/studio-four.png";
import STUDIOONE from "@/shared/assests/studio-one.png";
import STUDIOTHREE from "@/shared/assests/studio-three.png";
import STUDIOTWO from "@/shared/assests/studio-two.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./AboutStudio.module.scss";

const cx = cnBind.bind(styles);

export const AboutStudio = () => {
    const router = useRouter();
    const studioList = [
        { src: STUDIOONE, text: " Съемки роликов (Ютуб, Инстаграм, Тик-ток)" },
        { src: STUDIOTWO, text: "Проведения фотосессий всех видов" },
        { src: STUDIOTHREE, text: "Мастер-классов" },
        { src: STUDIOFOUR, text: "Воркшопов" },
        { src: STUDIOONE, text: "Фотодней" },
        { src: STUDIOTWO, text: "Курсов по моделингу" },
        { src: STUDIOTHREE, text: "Съемок для брендов" },
        { src: STUDIOFOUR, text: "Кинопоказов" },
    ];

    return (
        <div className={cx("about-studio")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h2>Для чего подходит студия?</h2>
                    <Button
                        onClick={() =>
                            router.push(
                                "https://appevent.ru/widget/landing?widget_key=116a292ebe50d796e2310e659871f438",
                            )
                        }
                        mode="outlined"
                        label="Забронировать"
                    />
                </div>
                <div className={cx("cards")}>
                    {studioList.map((el, i) => (
                        <div key={i} className={cx("content")}>
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
