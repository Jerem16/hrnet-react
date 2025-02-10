import React from "react";
import ContactDataLoader from "../../05-Contact/ContactDataLoader";
import CloseIcon from "../../99-Svg_Icon/CloseIcon";
import { useSelector } from "react-redux";

const ModalForm = ({ closeModal }) => {
    let modalContact = useSelector((state) => state.classes.modalContact);

    return (
        <ContactDataLoader>
            {(data) => {
                if (modalContact === true) {
                    return (
                        <>
                            <div className="service-item " id="modalContact">
                                <div className="portfolio-item-inner">
                                    <div className="modalMessage">
                                        <h4>
                                            {data.contact.successMessage.title}
                                        </h4>
                                        <p>
                                            {
                                                data.contact.successMessage
                                                    .description
                                            }
                                            <br />
                                            {
                                                data.contact.successMessage
                                                    .description2
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button type="button" onClick={closeModal}>
                                <CloseIcon name="close" />
                            </button>
                        </>
                    );
                }
                return null;
            }}
        </ContactDataLoader>
    );
};

export default React.memo(ModalForm);
