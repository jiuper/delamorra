import { Routes } from "@/shared/constants/Routing";

type NavbarTypeProps = { label: string; url?: string; items?: { label: string; url: string }[] }[];
export const items: NavbarTypeProps = [
    {
        label: "Виды сьемок",
        url: Routes.FILMIMG,
    },

    {
        label: "Услуги",
        items: [
            {
                label: "Платья в аренду",
                url: "/assortment/17826f6b-14de-4815-83d8-b092c7381946",
            },
            {
                label: "Аренда оборудования",
                url: "/assortment/870cd1ef-b2c8-4329-8deb-5793b5499674",
            },
            {
                label: "Аренда реквизита",
                url: "/assortment/8fa5219a-4da3-4c9e-8060-64b67bc1c0fa",
            },
            {
                label: "Ассистент на сьемку",
                url: "/assortment/79ea5405-125a-4f7b-82a8-e1628870d920",
            },
        ],
    },
    {
        label: "Оборудование",

        url: Routes.EQUIPMENTS,
    },
    {
        label: "Наши работы",
        url: "/contacts",
    },
    {
        label: "О нас",
        url: Routes.ABOUTUS,
    },
    {
        label: "Акции",
        url: Routes.PROMOTION,
    },
];
