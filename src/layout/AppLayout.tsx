import React from "react";
import { AppRoutes } from "../routes/AppRoutes";

type AppLayoutType = {
};

export const AppLayout: React.FC<AppLayoutType> = ({ }) => {

    return (
        <>
            <AppRoutes />
        </>
    );
};