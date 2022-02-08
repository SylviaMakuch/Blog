import * as api from '../API/index';
import { useNavigate } from "react-router";

export const signin = (registerData, navigate) => async(dispatch)=> {
    const navigate = useNavigate();

try{
    navigate('/', {replace: true})
}
catch{
console.log('error')
}};


export const signout = (registerData,navigate) => async(dispatch)=> {
    try{
        navigate('/', {replace: true})
    }
    catch{
        console.log('error')
        }};