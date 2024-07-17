import cnBind from "classnames/bind";
import Link from "next/link";

import PRESENTFORM from "@/shared/assests/present-form.png";
import { Routes } from "@/shared/constants/Routing";
import { UIInputText } from "@/shared/ui/_InputText/InputText";
import { Button } from "@/shared/ui/Button";
import { CustomImage } from "@/shared/ui/CustomImage";

import styles from "./FormPresent.module.scss";

const cx = cnBind.bind(styles);

export const FormPresent = () => {
    return (
        <div className={cx("form-present")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("form-content")}>
                    <h2>1 час в подарок на аренду студии</h2>
                    <div className={cx("description")}>
                        <div className={cx("description-text")}>
                            Заполните форму и получите{" "}
                            <Link className={cx("link")} href="#">
                                1 час в подарок
                            </Link>
                        </div>
                        <span>Мы свяжемся с Вами в течении 10 мин!</span>
                    </div>
                    <form action="" className={cx("form")}>
                        <div className={cx("inputs")}>
                            <UIInputText type="text" label="Ваше имя" isFullWidth />
                            <UIInputText type="text" label="Номер телефона" isFullWidth />
                        </div>
                        <div className={cx("buttons")}>
                            <div className={cx("privacy")}>
                                <i>*</i>Нажимая на кнопку вы соглашаетесь с{" "}
                                <Link className={cx("link")} href={Routes.POLICY}>
                                    Политикой конфиденциальности
                                </Link>
                            </div>
                            <Button mode="orange" type="submit" label="Получить подарок" iconButton />
                        </div>
                    </form>
                </div>
                <div className={cx("form-image")}>
                    <CustomImage className={cx("image")} src={PRESENTFORM} alt="present-form" />
                </div>
            </div>
        </div>
    );
};
