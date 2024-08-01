import { useState } from "react";
import * as React from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";

import type { GetPromotionDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";

const cx = cnBind.bind(styles);
type Props = {
    isEdit?: boolean;
    promotion: GetPromotionDto[];
};
export const AdminNews = ({ promotion, isEdit }: Props) => {
    const router = useRouter();
    const [data, setData] = useState<GetPromotionDto[]>([]);
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<{
        title: string;
        description: string;
        savings: number;
        file: File | null;
    }>({
        title: "",
        description: "",
        savings: 0,
        file: null,
    });
    const handleChange = (key: string, str: string | number) =>
        setValue({
            ...value,
            [key]: str,
        });

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setValue({
                ...value,
                file: e.target.files[0],
            });
        }
    };
    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .postForm(`${API_BASE}/promotion/create`, value)
                .then((res) => (res.status === 201 ? alert("Новость добавлена") : alert("Новость уже существует")));
        } else {
            void axios
                .postForm(`${API_BASE}/promotion/update`, {
                    ...value,
                    id: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Новость добавлена") : alert("Новость уже существует")));
        }

        setValue({ title: "", description: "", file: null, savings: 0 });
        // void router.reload();
    };
    const handleDelete = () => {
        void axios
            .delete(`${API_BASE}/promotion/${selectedId}`)
            .then((res) => (res.status === 200 ? alert("Удалено") : alert("Ошибка")));
        void router.reload();
        setValue({
            title: "",
            description: "",
            savings: 0,
            file: null,
        });
    };
    const handleChangeEdit = (str: string) => {
        const filterData = promotion.filter((el) => el.id === str);
        setData(filterData);
        setSelectedId(str);
        setValue({
            title: filterData[0].title ?? "",
            description: filterData[0].description ?? "",
            file: null,
            savings: filterData[0].savings ?? 0,
        });
    };

    return (
        <div className={cx("add-news")}>
            <span>{isEdit ? "Редактировать акцию" : "Добавить акцию"}</span>
            <div className={cx("form-news")}>
                {isEdit && (
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => handleChangeEdit(e.value as string)}
                        options={promotion}
                        optionLabel="title"
                        optionValue="id"
                        placeholder="Select a Promotion"
                        className={cx("dropdown")}
                    />
                )}
                <TextField
                    mode="light"
                    placeholder="Название"
                    value={value.title}
                    name="title"
                    className={cx("input-title")}
                    onChange={(e) => handleChange("title", e.target.value)}
                />
                <TextField
                    mode="light"
                    placeholder="Описание"
                    name="description"
                    className={cx("input-title")}
                    value={value.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                />
                <InputNumber
                    placeholder="Цена скидки"
                    value={value.savings}
                    className={cx("input-title")}
                    onChange={(e) => handleChange("savings", e.value === null ? 0 : e.value)}
                />
                <div className={cx("file")}>
                    <span>Загрузить картинку</span>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e)} />
                </div>
                {data.length !== 0 && (
                    <div className={cx("preview-container")}>
                        <CustomImage
                            width={400}
                            height={250}
                            className={cx("image")}
                            src={`${API_BASE}/picture/${data[0].pictureId ?? "0"}`}
                            alt="deletePhoto"
                        />
                    </div>
                )}
                <Button mode="outlined" label="Добавить" onClick={onSubmit} />
                <Button mode="empty" label="Удалить" disabled={selectedId === ""} onClick={handleDelete} />
            </div>
        </div>
    );
};
