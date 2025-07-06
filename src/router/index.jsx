import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Objectif from "../pages/Objectif";
import Logique from "../pages/Logique";
import AlgorMinMax from "../components/AlgorMinMax";
import MorpionGame from "../components/MorpionGame";
import Flux from "../components/Flux";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LandingPage/>
    },
    {
        path:'/objectif',
        element:<Objectif/>
    },
    {
        path:'/logique',
        element:<Logique/>
    },
    {
        path:'/algor/minmax',
        element:<AlgorMinMax/>
    },
        {
        path:'/flux',
        element:<Flux/>
    },
    {
        path:'/jeu',
        element:<MorpionGame/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])