import cnBind from "classnames/bind";

import type { GetFilmingDto } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./CardFootTage.module.scss";

const cx = cnBind.bind(styles);
type Props = GetFilmingDto & {
    className?: string;
    src: string;
};
export const CardFootTage = ({ className, title, price, src, description, otherPrice }: Props) => {
    return (
        <div className={cx("card-foot", className)}>
            <CustomImage className={cx("image")} width={850} height={544} src={src} alt={title} />
            <div className={cx("info")}>
                <div className={cx("title-wrapper")}>
                    <span className={cx("title")}>{title}</span>
                    <span className={cx("description", description === "Хит" && "hit")}>
                        {description === "Хит" && (
                            <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.2242 9.04133C13.2242 12.156 11.4243 13.5228 10.0334 13.9837C9.73681 14.082 9.54188 13.7138 9.7193 13.4423C10.3246 12.516 11.0242 11.1028 11.0242 9.77343C11.0242 8.34539 9.89395 6.65943 9.01133 5.61956C8.80954 5.38182 8.45757 5.53913 8.44657 5.85937C8.41011 6.92033 8.25289 8.33981 7.57493 9.45229C7.46581 9.63136 7.23416 9.6462 7.10983 9.47876C6.898 9.19348 6.68617 8.84107 6.47435 8.56268C6.36024 8.41272 6.15402 8.41066 6.02241 8.54336C5.50929 9.06074 4.79091 9.86755 4.79091 10.8716C4.79091 11.5958 5.11503 12.4973 5.44915 13.1953C5.60088 13.5123 5.31939 13.8842 5.03022 13.7059C3.76808 12.9279 2.22424 11.3159 2.22424 9.04133C2.22424 6.7378 5.18757 3.54677 6.31903 0.532039C6.49757 0.0563256 7.0478 -0.167211 7.4305 0.143229C9.7482 2.02331 13.2242 5.65763 13.2242 9.04133Z"
                                    fill="#E76325"
                                />
                            </svg>
                        )}
                        &nbsp;
                        {description}
                    </span>
                </div>

                <div className={cx("price-wrapper")}>
                    <div className={cx("prices")}>
                        <span className={cx("price")}>{price} ₽ / час</span>
                        {otherPrice && <span className={cx("other-price")}>Выездная +{otherPrice} ₽ </span>}
                    </div>

                    <Button mode="outlined" label="Хочу!" />
                </div>
            </div>
        </div>
    );
};
