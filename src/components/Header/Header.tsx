import { useState } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";

import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/NavBar";
import TG from "@/shared/assests/icons/tg.png";
import VK from "@/shared/assests/icons/vk.png";
import WA from "@/shared/assests/icons/wa.png";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);
export const socialItems = [
    {
        icon: VK,
        url: "https://vk.com/delamorra",
    },
    {
        icon: TG,
        url: "https://t.me/delamorra",
    },
    {
        icon: WA,
        url: "https://wa.me/79261234567",
    },
];

export const Header = () => {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <header className={cx("header")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("left")}>
                    <Logo />
                    <div className={cx("nav")}>
                        <Navbar />
                        <Button
                            className={cx("sidebar-button")}
                            mode="outlined"
                            icon="pi pi-bars"
                            onClick={() => setVisibleRight(true)}
                        />
                        <Sidebar
                            className={cx("sidebar")}
                            position="right"
                            visible={visibleRight}
                            onHide={() => setVisibleRight(false)}
                        >
                            asd
                        </Sidebar>
                    </div>
                </div>

                <div className={cx("right", "mobile")}>
                    <div className={cx("socials")}>
                        {socialItems.map((item) => (
                            <Link href={item.url} target="_blank" className={cx("social")} key={item.url}>
                                <CustomImage src={item.icon} alt="WA" width={20} height={20} />
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
