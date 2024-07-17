import cnBind from "classnames/bind";
import type { MenuItem } from "primereact/menuitem";

import { BreadCrumb } from "@/components/BreadCrumb";
import type { GetPromotionDto } from "@/entities";
import { PageLayout } from "@/layouts/PageLayout";
import { API_BASE } from "@/shared/constants/private";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./News.module.scss";

const cx = cnBind.bind(styles);

export const News = ({ promotion }: { promotion: GetPromotionDto }) => {
    const breadcrumbs: MenuItem[] = [{ label: "Акции" }];

    return (
        <PageLayout>
            <BreadCrumb model={breadcrumbs} />
            <div className={cx("news")}>
                <div className={cx("wrapper", "container")}>
                    <div className={cx("content")}>
                        <div className={cx("date")}>
                            <div className={cx("date-item")}>
                                <span>5 июня 2024</span>
                                <span>Дата</span>
                            </div>
                            <div className={cx("date-item")}>
                                <span>Оборудование</span>
                                <span>Тематика</span>
                            </div>
                            <div className={cx("date-item")}>
                                <div className={cx("time")}>
                                    <svg
                                        width="20"
                                        height="21"
                                        viewBox="0 0 20 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="10" cy="10.5" r="9" stroke="#E76325" strokeWidth="1.5" />
                                        <path
                                            d="M10 6.9V10.5L12.25 12.75"
                                            stroke="#E76325"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <span>5 мин</span>
                                </div>

                                <span>Время чтения</span>
                            </div>
                        </div>
                        <h2>{promotion.title}</h2>
                        <p>{promotion.description}</p>
                    </div>
                    <CustomImage
                        width={1720}
                        height={600}
                        src={`${API_BASE}/picture/${promotion.pictureId}`}
                        alt="PHOTO"
                    />
                </div>
            </div>
        </PageLayout>
    );
};
