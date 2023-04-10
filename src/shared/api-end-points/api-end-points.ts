import { environment } from "../../environments/environment";

const BASE_URL = environment.apiEndpointUrl;

export const apiEndpoint = {
    registerCollectionCenter: `${BASE_URL}/auth/collectionCenterRegister`,
    registerUser: `${BASE_URL}/auth/userRegister`,
    login: `${BASE_URL}/auth/login`
};