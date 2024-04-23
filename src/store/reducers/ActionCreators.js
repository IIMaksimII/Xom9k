import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try{
        const response = axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    } catch (e) {

    }
}