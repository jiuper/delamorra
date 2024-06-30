import cnBind from "classnames/bind";

import type { GetFilmingDto } from "@/entities";
import { Button } from "@/shared/ui/Button";
import { CardFootTage } from "@/view/Main/Sections/ViewFooTage/components/CardFootTage";

import styles from "./ViewFooTage.module.scss";

const cx = cnBind.bind(styles);
type ViewFooTageProps = {
    filming: GetFilmingDto[];
};
export const ViewFooTage = ({ filming }: ViewFooTageProps) => {
    return (
        <div className={cx("view-foo-tage")}>
            <div className={cx("wrapper", "container")}>
                <div className={cx("header")}>
                    <h2>Виды сьемок</h2>
                    <Button mode="empty" label="Смотреть все" />
                </div>
                <div className={cx("cards")}>
                    {filming.map((el) => (
                        <CardFootTage
                            key={el.id}
                            src={`https://photo-studio-api.onrender.com/picture/${el.pictureId}`}
                            {...el}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
