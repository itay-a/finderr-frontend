import {HomePage} from './pages/home-page.jsx'
import { ExplorePage } from './pages/explore-page.jsx';
import{GigDetails}from './pages/gig-details.jsx';
import {SellerPage} from './pages/seller-page.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path:'/',
        component: HomePage,
        label: 'Home',
    },
    {
        path:'/explore',
        component: ExplorePage,
        label: 'Explore'
    },
    {
        path:'/start_selling',
        component: SellerPage,
        label: 'Selling'
    },
    {
        path:'/details/:gigId',
        component: GigDetails,
        label: 'Details'
    },
]

export default routes;