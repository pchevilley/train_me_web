import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import "./Modal.scss";

export function Modal(props: PropsWithChildren<{
    open: boolean
    onClose: () => void
}>) {
    const {children, open, onClose} = props;
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
            {children}
        </div>
    </div>
}