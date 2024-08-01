import { useState } from "react";
import cnBind from "classnames/bind";

import { ModalCallback } from "@/components/_Modals/ModalCallback";
import type { GetFilmingDto } from "@/entities";
import { API_BASE } from "@/shared/constants/private";
import { useBooleanState } from "@/shared/hooks";
import { CardFootTage } from "@/view/Main/Sections/ViewFooTage/components/CardFootTage";

import styles from "./ViewFooTage.module.scss";

const cx = cnBind.bind(styles);
type ViewFooTageProps = {
    filming: GetFilmingDto[];
};
export const ViewFooTage = ({ filming }: ViewFooTageProps) => {
    const [isModal, onOpenModal, onCloseModal] = useBooleanState(false);
    const [value, setValue] = useState<string>("");
    const handleOnClick = (val: string) => {
        onOpenModal();
        setValue(`Услуга: ${val}`);
    };

    return (
        <div className={cx("view-foo-tage")} id="filmImg">
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h2>Виды съемок</h2>
                </div>
                <div className={cx("cards")}>
                    {filming.map((el) => (
                        <CardFootTage
                            onClick={handleOnClick}
                            key={el.id}
                            src={`${API_BASE}/picture/${el.pictureId}`}
                            {...el}
                        />
                    ))}
                </div>
            </div>
            <ModalCallback caption={value} onClose={onCloseModal} isOpen={isModal} />
        </div>
    );
};
