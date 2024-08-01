export enum EquipmentTypes {
    DRESS = "DRESS",
    EQUIPMENT = "EQUIPMENT",
    REQUISITE = "REQUISITE",
}

export type GetFilmingDto = {
    id: string;
    title: string;
    description: string;
    order: number;
    price: number;
    pictureId: string;
    otherPrice: number;
};

export type GetFavorDto = {
    id: string;
    title: string;
    description: string;
    order: number;
    pictureId: string;
    count: string;
};
export type GetEquipmentDto = {
    id: string;
    title: string;
    description: string;
    type: EquipmentTypes;
    pictureId: string;
};

export type GetTariffDto = {
    id: string;
    caption: string;
    description: string;
    price: number;
};
export type GetPromotionDto = {
    id: string;
    title: string;
    description: string;
    savings: number;
    pictureId: string;
};
