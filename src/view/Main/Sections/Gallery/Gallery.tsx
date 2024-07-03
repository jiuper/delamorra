import cnBind from "classnames/bind";

import IMGTHREE from "@/shared/assests/gallery/Rectangle 14.png";
import IMGONE from "@/shared/assests/gallery/Rectangle 40.png";
import IMGSEVEN from "@/shared/assests/gallery/Rectangle 42.png";
import IMGFOUR from "@/shared/assests/gallery/Rectangle 45.png";
import IMGTWO from "@/shared/assests/gallery/Rectangle 46.png";
import IMGFIVE from "@/shared/assests/gallery/Rectangle 47.png";
import IMGSIX from "@/shared/assests/gallery/Rectangle 48.png";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Gallery.module.scss";

const cx = cnBind.bind(styles);

export const Gallery = () => {
    const listImg = [IMGONE, IMGTWO, IMGTHREE, IMGSEVEN, IMGFOUR, IMGSIX, IMGFIVE];

    return (
        <div className={cx("gallery")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h2>Снято в Della Morra</h2>
                </div>
                <div className={cx("content")}>
                    {listImg.map((item, index) => (
                        <CustomImage
                            className={cx("image-wrapper", `image-${index}`)}
                            key={index}
                            src={item}
                            alt="gallery"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
