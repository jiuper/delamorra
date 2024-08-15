import { useState } from "react";
import * as React from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";

import type { GetEquipmentDto } from "@/entities";
import { EquipmentTypes } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";

const cx = cnBind.bind(styles);
type Props = { equipment: GetEquipmentDto[]; isEdit?: boolean };

export const AdminEquipment = ({ equipment, isEdit }: Props) => {
    const router = useRouter();
    const [data, setData] = useState<GetEquipmentDto[]>([]);
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<{ title: string; description: string; file: File | null; type: EquipmentTypes }>(
        {
            title: "",
            description: "",
            type: EquipmentTypes.DRESS,
            file: null,
        },
    );
    const [files, setFiles] = useState<File[]>([]);

    const handleChange = (key: string, str: string) =>
        setValue({
            ...value,
            [key]: str,
        });

    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .postForm<GetEquipmentDto>(
                    // @typescript-eslint/restrict-template-expressions
                    `${API_BASE}/equipment/create`,
                    {
                        ...value,
                        paperId: selectedId,
                        files,
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                )
                .then((res) => (res.status === 201 ? alert("Продукт добавлена") : alert("Продукт уже существует")));
        } else {
            void axios
                .postForm(
                    // @typescript-eslint/restrict-template-expressions
                    `${API_BASE}/equipment/update`,
                    {
                        ...value,
                        id: selectedId,
                        ...(files !== null ? files : {}),
                    },
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    },
                )
                .then((res) => (res.status === 201 ? alert("Продукт добавлена") : alert("Продукт уже существует")));
        }

        setValue({
            title: "",
            description: "",
            file: null,
            type: EquipmentTypes.DRESS,
        });
        setFiles([]);
        void router.reload();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setValue({
                ...value,
                file: e.target.files[0],
            });
        }
    };
    const handleDelete = () => {
        void axios
            // @typescript-eslint/restrict-template-expressions
            .delete(`${API_BASE}/equipment/${selectedId}`)
            .then((res) => (res.status === 200 ? alert("Удалено") : alert("Ошибка")));
        void router.reload();
        setValue({
            title: "",
            description: "",
            file: null,
            type: EquipmentTypes.DRESS,
        });
    };

    const handleChangeEdit = (str: string) => {
        const filterData = equipment.filter((el) => el.id === str);
        setData(filterData);
        setSelectedId(str);
        setValue({
            title: filterData[0].title ?? "",
            description: filterData[0].description ?? "",
            file: null,
            type: filterData[0].type ?? EquipmentTypes.DRESS,
        });
    };

    return (
        <div className={cx("add-cargo")}>
            <span>{isEdit ? "Редактировать предмет" : "Добавить предмет"}</span>
            <div className={cx("form-cargo")}>
                {isEdit && (
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => {
                            handleChangeEdit(e.value as string);
                        }}
                        options={equipment}
                        optionLabel={isEdit ? "title" : "name"}
                        optionValue="id"
                        placeholder="Select a Object"
                        className={cx("dropdown")}
                    />
                )}
                <select value={value.type} name="" id="" onChange={(e) => handleChange("type", e.target.value)}>
                    <option disabled>По умолчанию</option>
                    <option value={EquipmentTypes.DRESS}>Одежда</option>
                    <option value={EquipmentTypes.EQUIPMENT}>Оборудование</option>
                    <option value={EquipmentTypes.REQUISITE}>Реквизиты</option>
                </select>
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
