import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardSale.module.scss";

const cx = cnBind.bind(styles);
export type CardServiceMoreProps = {
    pictureId: string;
    savings: number;
    id: string;
    title: string;
    description: string;
};
export const CardSale = ({ pictureId, savings, title, description, id }: CardServiceMoreProps) => {
    const router = useRouter();

    return (
        <div className={cx("card-more")} onClick={() => router.push(`/news/${id}`)}>
            <div className={cx("image-wrapper")}>
                <CustomImage
                    className={cx("image")}
                    width={385}
                    height={385}
                    src={`https://photo-studio-api.onrender.com/picture/${pictureId}`}
                    alt="service"
                />
            </div>

            <div className={cx("info")}>
                <div className={cx("count")}>
                    <span>
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.2242 9.04133C11.2242 12.156 9.4243 13.5228 8.0334 13.9837C7.73681 14.082 7.54188 13.7138 7.7193 13.4423C8.32458 12.516 9.02424 11.1028 9.02424 9.77343C9.02424 8.34539 7.89395 6.65943 7.01133 5.61956C6.80954 5.38182 6.45757 5.53913 6.44657 5.85937C6.41011 6.92033 6.25289 8.33981 5.57493 9.45229C5.46581 9.63136 5.23416 9.6462 5.10983 9.47876C4.898 9.19348 4.68617 8.84107 4.47435 8.56268C4.36024 8.41272 4.15402 8.41066 4.02241 8.54336C3.50929 9.06074 2.79091 9.86755 2.79091 10.8716C2.79091 11.5958 3.11503 12.4973 3.44915 13.1953C3.60088 13.5123 3.31939 13.8842 3.03022 13.7059C1.76808 12.9279 0.224243 11.3159 0.224243 9.04133C0.224243 6.7378 3.18757 3.54677 4.31903 0.532039C4.49757 0.0563256 5.0478 -0.167211 5.4305 0.143229C7.7482 2.02331 11.2242 5.65763 11.2242 9.04133Z"
                                fill="#E76325"
                            />
                        </svg>
                        -{savings}&nbsp;%
                    </span>
                </div>

                <div className={cx("title-wrapper")}>
                    <span className={cx("title")}>{title}</span>
                    <span className={cx("description")}>{description}</span>
                </div>
            </div>
        </div>
    );
};
