import { PropsWithChildren, useEffect, useState } from "react";
import { Button } from "../Button";
import "./Modal.scss";

export function Modal(props: PropsWithChildren<{
    title?: string,
    open: boolean
    onClose: () => void
}>) {
    const {children, onClose, title} = props;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const close = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 150);
    }

    return <div onClick={close} className={"modal " + (isVisible ? "modal--visible" : "")}>
        <div onClick={e => e.stopPropagation()} className="modal__content">
            <Button btnStyle="icon" icon="times" onClick={close} className="modal__content__closeIcon"/>
            {title && <h2 className="modal__content__title">{title}</h2>}
            {children}
        </div>
    </div>
}