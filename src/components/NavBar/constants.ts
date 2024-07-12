import { EquipmentTypes } from "@/entities";
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
                url: `${`${Routes.EQUIPMENTS}/${EquipmentTypes.DRESS}`}`,
            },
            {
                label: "Аренда оборудования",
                url: `${`${Routes.EQUIPMENTS}/${EquipmentTypes.EQUIPMENT}`}`,
            },
            {
                label: "Аренда реквизита",
                url: `${`${Routes.EQUIPMENTS}/${EquipmentTypes.REQUISITE}`}`,
            },
            {
                label: "Ассистент на сьемку",
                url: Routes.FAVOR,
            },
            {
                label: "Аренда фотостудии",
                url: Routes.FAVOR,
            },
        ],
    },
    {
        label: "Акции",

        url: Routes.PROMOTION,
    },
    {
        label: "Наши работы",
        url: Routes.WORKS,
    },
    {
        label: "О нас",
        url: Routes.ABOUTUS,
    },
    {
        label: "Контакты",
        url: Routes.CONTACTS,
    },
];
