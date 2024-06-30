import * as React from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { socialItems } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/NavBar";
import PAYMENTS from "@/shared/assests/payments.png";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Footer.module.scss";

const cx = cnBind.bind(styles);

export const Footer = () => {
    return (
        <footer className={cx("footer")}>
            <div className={cx("wrapper", "container")}>
                <Logo />
                <Navbar />
                <div className={cx("footer-content")}>
                    <div className={cx("bottom")}>
                        <div className={cx("contacts")}>
                            <Link className={cx("phone")} href="tel:+79217951988" target="_blank">
                                +7 921 795 19 88
                            </Link>
                            <Link className={cx("email")} href="mailto:dellamorra5@gmail.com" target="_blank">
                                dellamorra5@gmail.com
                            </Link>
                        </div>
                        <div className={cx("address")}>
                            <h3>Кадетская линия В.О., 5 к.2, лит. Д</h3>
                            <span>Della Morra Loft</span>
                        </div>
                        <div className={cx("links")}>
                            <Link className={cx("privacy")} href="/">
                                Политика конфиденциальности
                            </Link>
                            <Link className={cx("link")} href="/">
                                Условия использования
                            </Link>
                            <span>© Della Morra 2024</span>
                        </div>
                    </div>
                    <div className={cx("footer-social")}>
                        <div className={cx("socials")}>
                            {socialItems.map((item) => (
                                <Link href={item.url} target="_blank" className={cx("social")} key={item.url}>
                                    <CustomImage src={item.icon} alt="WA" width={20} height={20} />
                                </Link>
                            ))}
                        </div>
                        <div className={cx("socials")}>
                            <CustomImage src={PAYMENTS} alt="PAYMENTS" width={190} height={25} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
