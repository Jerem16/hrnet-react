import React, { useState, Suspense } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
const Modal = ({ opened, Content, closeIcon, addClass }) => {
    // eslint-disable-next-line
    const [isOpened, setIsOpened] = useState(opened);
    const navToggler = useSelector((state) => state.classes.addClass);

    return (
        <>
            {opened && (
                <Suspense fallback={<Loader />}>
                    <div className={`modal  ${navToggler}`}>
                        <div className="content sideAnime">
                            {Content}
                            <button
                                type="button"
                                onClick={() => setIsOpened(false)}
                            >
                                {closeIcon}
                            </button>
                        </div>
                    </div>
                </Suspense>
            )}
        </>
    );
};

Modal.defaultProps = {
    opened: false,
};

Modal.propTypes = {
    opened: PropTypes.bool,
    Content: PropTypes.node.isRequired,
};

export default React.memo(Modal);
