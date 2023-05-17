import MainPage from "@/components/MainPage/MainPage"
import Err404 from "@/components/404/404"
import SignUp from "@/components/Sign-up/Sign-up";
import SignIn from "@/components/Sign-in/Sign-in";
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute.vue';
import Profile from '@/components/Profile/Profile.vue';
import MyWashes from '@/components/MyWashes/MyWashes.vue';
import ControlPanel from '@/components/ControlPanel/ControlPanel.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'MainPage'
    },
    {
        path: '/sign-up',
        component: SignUp,
        name: 'SignUp'
    },
    {
        path: '/sign-in',
        component: SignIn,
        name: 'SignIn'
    },
    {
        path: '/protected-route',
        name: 'protected-route',
        component: ProtectedRoute,
        children: [
            {
                path: '/profile',
                component: Profile
            },
            {
                path: '/my-washes',
                component: MyWashes
            },
            {
                path: '/control-panel',
                component: ControlPanel
            }
        ]
    },
    {
        path: '/404',
        component: Err404,
        name: '404'
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },
];

export default routes;
