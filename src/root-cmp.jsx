import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './routes'
// import { socketService } from './services/socket.service'
import AppHeader from './cmps/app-header'
import { AppFooter } from './cmps/app-footer'
import { UserDetails } from './pages/user-details'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <AppHeader />
                <main>
                    <Switch>
                        {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
                        <Route path="/user/:id" component={UserDetails} />
                    </Switch>
                </main>
                <AppFooter />
            </div>
        )
    }
}