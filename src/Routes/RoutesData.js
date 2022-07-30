

import {router} from "../Utils/router";
import Index from "../Pages/HomePage/Index"
import IndexAbout from "../Pages/AboutPage/Index"
import ContactPage from "../Pages/ContactPage/index"
import ProjectPage from "../Pages/ProjectPage/index"
import ProjectItem from "../Components/ProjectItem";
export const RoutesData = {
    mains : [
        {
            url: router.home,
            component: Index,
            layout: "home"
        },
        {
            url: router.about,
            component: IndexAbout,
            layout: "about",
        },
        {
            url: router.project,
            component: ProjectPage,
            layout: "project"
        },
        {
            url: router.contact,
            component: ContactPage,
            layout: "contact",
        },
        {
            url: router.projectId,
            component: ProjectItem,
            layout: "projectId",
        },
        {
            url: router.homeId,
            component: ProjectItem,
            layout: "homeId",
        },
    ]
}
