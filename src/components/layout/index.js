
import Topnav from '../navbar/'
import Header from '../Header/'
import Repositories from '../repositories/'
import Developers from '../Developers/'
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
function Layout() {
    return (
        <>
            <Header />
            <Container >
                <>
                    <Router>
                        <Topnav />
                        <Switch>
                            <Route exact path='/' exact component={Repositories} />
                            <Route path='/Developers' component={Developers} />
                            <Redirect to={{
                                state: { error: true }
                            }} />
                        </Switch>
                    </Router>
                </>
            </Container>
        </>
    );
}

export default Layout;
