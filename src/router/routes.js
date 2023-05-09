import MainPage from "@/components/MainPage/MainPage"
import Err404 from "@/components/404/404"
import SignUp from "@/components/Sign-up/Sign-up";
import SignIn from "@/components/Sign-in/Sign-in";


const routes = [
    {
        path: '/',
        name: 'main-page',
        component: MainPage,
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUp,
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: SignIn,
    },
    {
        path: '/404',
        name: '404',
        component: Err404
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },
]

export default routes