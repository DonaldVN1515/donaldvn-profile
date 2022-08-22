import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts/DefaultLayout';
import Loading from '~/components/Loading';

function App() {
    // Loading Page
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 0);
    }, []);
    return (
        <Router>
            <div className="App">
                {loading ? (
                    <Loading />
                ) : (
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;
