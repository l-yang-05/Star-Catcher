import React from 'react';

import Slider from './Slider'
import Content from './Content'

const Home = (state) => {
    const { user, loggedInStatus } = state.state.state
    console.log(user, loggedInStatus)
    // if (!state.state.state.user || state.state.state.user !== "") {

    // }
    return (
        <div>
            {<Slider />}
            {<Content />}
        </div>
    )
}

export default Home;