import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const queryURL = "http://localhost:5000/todo/"

const getTodos = async () =>{ 

    const response = await axios.get(queryURL)
    return response.data

}
export const UseGetTodos = () =>{
    const {isLoading,data} = useQuery(['Todos'],getTodos)
    return {data, isLoading}
}