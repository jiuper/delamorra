import { Map, Placemark, TypeSelector, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import cnBind from "classnames/bind";

import styles from "./Location.module.scss";

const cx = cnBind.bind(styles);
export const Location = () => {
    return (
        <div className={cx("location")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("contacts")}>
                    <h1>Контакты</h1>
                    <div className={cx("contacts-info")}>
                        <h4 className={cx("title")}>Della Morra Loft</h4>
                        <div className={cx("info")}>
                            <div className={cx("location-info")}>
                                <span className={cx("gps")}>Адрес</span>
                                <span className={cx("address")}>
                                    Санкт-Петербург, Кадетская линия В.О., 5 к.2, лит. Д
                                </span>
                            </div>
                            <div className={cx("phone")}>
                                <span className={cx("work-time")}>Номер телефона</span>
                                <span>+7 921 795 19 88</span>
                            </div>
                            <div className={cx("email")}>
                                <span>Email</span>
                                <span className={cx("email-adress")}>dellamorra@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("middle")}>
                    <h2>Как добраться?</h2>
                    <YMaps enterprise query={{ apikey: "afef66c1-8caa-48c3-b88d-a01c82578b02" }}>
                        <Map
                            onLoad={() => {}}
                            instanceRef={(ref) => {
                                // eslint-disable-next-line no-unused-expressions
                                ref && ref.behaviors.disable("scrollZoom");
                            }}
                            className={cx("map")}
                            defaultState={{ center: [59.942917, 30.291991], zoom: 11 }}
                        >
                            <Placemark geometry={[59.942917, 30.291991]} />
                            <ZoomControl />
                            <TypeSelector />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
    );
};
