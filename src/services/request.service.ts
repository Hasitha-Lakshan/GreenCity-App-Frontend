import axios from "axios";
import authHeader from "../config/auth-header";

const API_URL = "http://localhost:8080/api/request/";

export const collectionRequestCreation = (
    addressline1: string,
    addressline2: string,
    addressline3: string,
    contactNumber: number,
    location: string,
    note: string,
    quantity: number,
    totalPayment: number,
) => {
    return axios
        .post(API_URL + "requestcreation", {

        });
};