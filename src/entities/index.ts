export enum PictureType {
    MAIN,
    TEXTURE,
    OTHER,
}

export type GetFilmingDto = {
    id: string;
    title: string;
    description: string;
    order: number;
    price: string;
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
    pictureId: string;
};

export type GetTariffDto = {
    id: string;
    timeInterval: string;
    savings: number;
    options: string[];
    price: number;
};
