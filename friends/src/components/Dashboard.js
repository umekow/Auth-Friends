import React from 'react'; 

import Loader from 'react-loader-spinner'; 

import { axiosWithAuth } from '../utils/axiosWithAuth'; 

class Dashboard extends React.Component{
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData(); 
    }

    getData = () => 
        axiosWithAuth()
        .get('/api/friends')
        .then(r => {
            this.setState({friends: r.data})
        })

    render() {
        return(
            <div className='dashboard'>
                <h1>Welcome User</h1>
            </div>
        )
    }
}

export default Dashboard; 