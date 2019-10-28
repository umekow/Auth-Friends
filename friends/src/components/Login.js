import React from 'react'; 

import { axiosWithAuth } from '../utils/axiosWithAuth'; 
import { Redirect } from 'react-router-dom'; 

class Login extends React.Component{
    state = {
        credentials: {
            username: '', 
            password: '', 
        }, 
        isLoading: false
    }

    handleChanges = e => 
        this.setState({
               credentials: {
                    ...this.state.credentials,
                    [e.target.name] : e.target.value
               }
            }); 

    login = e => {
        e.preventDefault(); 

        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(response => {
                localStorage.setItem('token', response.data.payload); 
                this.props.history.push('/home')
            })
            .catch(error => console.log(error.response))
    }
    render() {
        if(localStorage.getItem('token')){
            return <Redirect to="/home" />
        }

        return(
            <div className='form'>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChanges}/>

                    <input
                        type='password'
                        name='password'
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChanges}
                        />
                    
                    <button>Log in</button>
                </form>
            </div>
        )
    }
    
}

export default Login; 