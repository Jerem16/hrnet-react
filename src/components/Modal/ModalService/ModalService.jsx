import React from "react";

import ServiceDataLoader from "../../03-Services/ServiceDataLoader";
import CloseIcon from "../../99-Svg_Icon/CloseIcon";
import serviceIcon from "../../../assets/data/serviceIcon.json";
import CheckIcon from "../../99-Svg_Icon/CheckIcon";

import BtnContact from "../../Button/BtnContact";

import { Fade } from "react-awesome-reveal";

const ModalService = ({ selectedService, closeModal }) => {
    return (
        <ServiceDataLoader>
            {(serviceData) => {
                if (selectedService) {
                    const serviceItem = serviceData.services.find(
                        (item) => item.id === selectedService.id
                    );
                    if (serviceItem) {
                        const serviceIconData = serviceIcon.find(
                            (item) => item.id === serviceItem.id
                        );
                        return (
                            <div className="modal-background">
                                <div className="service-item" id="modalService">
                                    <div className="service-item-inner">
                                        <Fade
                                            direction="left"
                                            triggerOnce="true"
                                            className="icon"
                                        >
                                            <svg
                                                viewBox={
                                                    serviceIconData.viewBox
                                                }
                                                height="1em"
                                                xmlSpace="preserve"
                                                className="icon-fsa"
                                            >
                                                <path
                                                    d={serviceIconData.icon}
                                                />
                                            </svg>
                                        </Fade>
                                        <Fade
                                            direction="right"
                                            triggerOnce="true"
                                        >
                                            <h4>{serviceItem.title}</h4>
                                        </Fade>
                                        <p>{serviceItem.modalDescription}</p>

                                        <ul>
                                            {serviceItem.details.map(
                                                (detail, index) => (
                                                    <Fade
                                                        cascade
                                                        damping={0.2}
                                                        delay={index * 200}
                                                        key={`ServLi_${
                                                            index * 70
                                                        }`}
                                                    >
                                                        <li
                                                            key={`ServLi_${
                                                                index * 70
                                                            }`}
                                                        >
                                                            <CheckIcon />
                                                            {detail}
                                                        </li>
                                                    </Fade>
                                                )
                                            )}
                                        </ul>
                                        <Fade direction="up" triggerOnce="true">
                                            <BtnContact
                                                onClick={closeModal}
                                                hireButtonText={
                                                    serviceItem.link.title
                                                }
                                            />
                                        </Fade>
                                    </div>
                                </div>

                                <button type="button" onClick={closeModal}>
                                    <CloseIcon name="close" />
                                </button>
                            </div>
                        );
                    }
                }
            }}
        </ServiceDataLoader>
    );
};

export default React.memo(ModalService);
