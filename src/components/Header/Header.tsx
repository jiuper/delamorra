import { useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/NavBar";
import TG from "@/shared/assests/icons/1.svg";
import VK from "@/shared/assests/icons/2.svg";
import WA from "@/shared/assests/icons/3.svg";
import INS from "@/shared/assests/icons/Component 18.svg";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);
export const socialItems = [
    {
        icon: VK as string,
        url: "https://vk.com/delamorra",
    },
    {
        icon: TG as string,
        url: "https://t.me/delamorra",
    },
    {
        icon: WA as string,
        url: "https://wa.me/79261234567",
    },
    {
        icon: INS as string,
        url: "https://www.instagram.com/della.morra?igsh=aDB3cmpyemVmZ2pt",
    },
];

export const Header = () => {
    const [visibleRight, setVisibleRight] = useState(false);
    const router = useRouter();

    return (
        <header className={cx("header")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("left")}>
                    <Button
                        className={cx("phone-link")}
                        onClick={() => router.push("tel:+79217951988")}
                        icon="pi pi-phone"
                    />
                    <Logo />
                    <div className={cx("nav")}>
                        <Navbar className={cx("navbar-header")} />
                        <Button
                            className={cx("sidebar-button")}
                            icon="pi pi-pause"
                            onClick={() => setVisibleRight(true)}
                        />
                        <Sidebar
                            className={cx("sidebar")}
                            position="right"
                            visible={visibleRight}
                            onHide={() => setVisibleRight(false)}
                        >
                            <div className={cx("sidebar-header")}>
                                <Button
                                    className={cx("phone-link")}
                                    icon="pi pi-times"
                                    onClick={() => setVisibleRight(false)}
                                />
                                <Logo />
                                <Button
                                    onClick={() => router.push("tel:+79217951988")}
                                    className={cx("phone-link")}
                                    icon="pi pi-phone"
                                />
                            </div>
                            <div className={cx("nav")}>
                                <div className={cx("navbar-container")}>
                                    <Navbar
                                        onClick={() => setVisibleRight(false)}
                                        classNameItems={cx("navbar-items")}
                                    />
                                </div>
                            </div>
                            <div className={cx("sidebar-right")}>
                                <div className={cx("contacts")}>
                                    <Link className={cx("email")} href="mailto:dellamorra5@gmail.com" target="_blank">
                                        dellamorra5@gmail.com
                                    </Link>
                                </div>
                                <div className={cx("socials")}>
                                    {socialItems.map((item) => (
                                        <Link href={item.url} target="_blank" className={cx("social")} key={item.url}>
                                            <CustomImage src={item.icon} alt="WA" width={50} height={50} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </Sidebar>
                    </div>
                </div>

                <div className={cx("right", "mobile")}>
                    <div className={cx("socials")}>
                        {socialItems.map((item) => (
                            <Link href={item.url} target="_blank" className={cx("social")} key={item.url}>
                                <CustomImage src={item.icon} alt="WA" width={50} height={50} />
                            </Link>
                        ))}
                    </div>
                    <div className={cx("contacts")}>
                        <Link className={cx("phone")} href="tel:+79217951988" target="_blank">
                            +7 921 795 19 88
                        </Link>
                        <Link className={cx("email")} href="mailto:dellamorra5@gmail.com" target="_blank">
                            dellamorra5@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
