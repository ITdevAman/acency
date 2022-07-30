import React, { Suspense,useEffect ,useState} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {RoutesData} from "./RoutesData"
import HomeLayout from "../Helpers/HomeLayout";
const  AppRoutes = () => {
    const location = useLocation();
    const {mains}  = RoutesData
    const [routers , setRouters] = useState([...mains])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior : "smooth"
        });
    };
    useEffect(() => {
        scrollTop();
    }, [location.pathname]);
    useEffect(() => {
        scrollTop();
    }, []);
    return (
        <Routes>
            {routers.map((route) => {
                let routeInner;
                switch (route.layout) {
                    case "home":
                        routeInner = (
                            <HomeLayout {...route}>
                                <route.component />
                            </HomeLayout>
                        );
                        break;
                    case "about":
                        routeInner = (
                            <HomeLayout {...route}>
                                <route.component />
                            </HomeLayout>
                        );
                        break;
                    case "project":
                        routeInner = (
                            <HomeLayout {...route}>
                                <route.component />
                            </HomeLayout>
                        );
                        break;
                    case "contact":
                        routeInner = (
                            <HomeLayout {...route}>
                                <route.component />
                            </HomeLayout>
                        );
                        break;
                    case "projectId":
                        routeInner = (
                            <HomeLayout {...route}>
                                <route.component />
                            </HomeLayout>
                        );
                        break;
                    case "homeId":
                        routeInner = (
                            <HomeLayout {...route}>
                                <route.component />
                            </HomeLayout>
                        );
                        break;
                    default:
                        break;
                }
                return (
                    <Route
                        path={route.url}
                        key={route.url}
                        element={
                            <Suspense>
                                {routeInner}
                            </Suspense>
                        }
                    />
                );
            })}
        </Routes>
    );
};

export default AppRoutes;