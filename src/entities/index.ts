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
