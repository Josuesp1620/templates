import { MapView } from "@/map/views";

interface RouteObject {
    path: string;
    component: React.ComponentType<any>;
    exact?: boolean;
}

const publicRoutes: Array<RouteObject> = [
    { path: "/", component: MapView },
]

const authRoutes: Array<RouteObject> = [
]

export { publicRoutes };
