import React from "react";
import {SportServiceConsumer} from "../sport-service-context";

const withSportService = () => (Wrapped) => {
    return (props) => {
        return (
            <SportServiceConsumer>
                {
                    (sportService) => {
                        return (
                            <Wrapped {...props} sportService ={sportService}/>
                        )
                    }
                }
            </SportServiceConsumer>
        )
    }
};

export default withSportService;