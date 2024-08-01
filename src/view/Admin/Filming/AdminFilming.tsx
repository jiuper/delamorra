import { useEffect, useState } from "react";
import * as React from "react";
import axios from "axios";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";
import { Dropdown } from "primereact/dropdown";

import type { GetFilmingDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/TextField";

import styles from "../Admin.module.scss";

const cx = cnBind.bind(styles);

export const AdminFilming = ({ isEdit, filming }: { isEdit: boolean; filming: GetFilmingDto[] }) => {
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string>("");
    const [value, setValue] = useState<{
        title: string;
        description: string;
        price: number;
        file: File | null;
        otherPrice: number;
    }>({
        title: "",
        description: "a",
        file: null,
        price: 0,
        otherPrice: 0,
    });

    const onSubmit = () => {
        if (!isEdit) {
            void axios
                .postForm(`${API_BASE}/filming/create`, value)
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        } else {
            void axios
                .postForm(`${API_BASE}/filming/update`, {
                    ...value,
                    id: selectedId,
                })
                .then((res) => (res.status === 201 ? alert("Категория добавлена") : alert("Категория уже существует")));
        }
        void router.reload();
        setValue({
            title: "",
            description: "",
            price: 0,
            file: null,
            otherPrice: 0,
        });
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setValue({ ...value, file: e.target.files[0] });
        }
    };
    const handleChangeValue = (key: string, str: string | number) => {
        setValue({ ...value, [key]: str });
    };
    const handleChange = (str: string) => {
        setSelectedId(str);
    };
    const handleDelete = () => {
        void axios
            .delete(`${API_BASE}/filming/${selectedId}`)
            .then((res) => (res.status === 200 ? alert("Удалено") : alert("Ошибка")));
        void router.reload();
        setValue({
            title: "",
            description: "",
            price: 0,
            file: null,
            otherPrice: 0,
        });
    };
    useEffect(() => {
        if (isEdit) {
            setValue({
                title: "",
                description: "",
                price: 0,
                file: null,
                otherPrice: 0,
            });
        }
    }, [isEdit]);
    useEffect(() => {
        filming.filter((el) =>
            el.id === selectedId
                ? setValue({
                      file: null,
                      title: el.title,
                      price: el.price,
                      description: el.description,
                      otherPrice: el.otherPrice,
                  })
                : null,
        );
    }, [filming, selectedId]);

    return (
        <div className={cx("add-category")}>
            <span>{isEdit ? "Редактировать вид съемки" : "Добавить вид съемки"}</span>
            <div className={cx("form-category")}>
                {isEdit && (
                    <Dropdown
                        value={selectedId}
                        onChange={(e) => handleChange(e.value as string)}
                        options={filming}
                        optionLabel="title"
                        optionValue="id"
                        placeholder="Выбирите вид съемки"
                        className={cx("dropdown")}
                    />
                )}
                <TextField
                    mode="light"
                    placeholder="Название"
                    value={value.title}
                    className={cx("input-title")}
                    onChange={(e) => handleChangeValue("title", e.target.value)}
                />
                <div className={cx("file")}>
                    Загрузить картинку
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                </div>

                <Button mode="outlined" label={isEdit ? "Редактировать" : "Добавить"} onClick={onSubmit} />
                <Button mode="empty" label="Удалить" disabled={selectedId === ""} onClick={handleDelete} />
            </div>
        </div>
    );
};
