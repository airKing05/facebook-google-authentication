import axios from 'axios';

export const fetchDataAction = () =>{
    return (dispatch) => {
        axios.get('/api/current-user')
        .then((res) => {
            dispatch({type: "GET_USER", payload: res.data})
        })
    }
}