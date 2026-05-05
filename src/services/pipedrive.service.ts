
// Here Pipedrive is acting as a database and we are performing CRUD operations on it using its API.
// If person with the same name already exists, we update it. Otherwise, we create a new person.
// Pipedrive authentication is done using API token which is passed as a query parameter in the API requests.
import axios from "axios";
import { apiKey, companyDomain } from "../config/env";

const BASE_URL = `https://${companyDomain}.pipedrive.com/api/v1`;

export const searchPerson = async (name: string) => { //-----> searchPerson is used to search for a person in Pipedrive by name. It returns an array of matching persons.
    try {
        const res = await axios.get(`${BASE_URL}/persons/search`, {
            params: {
                term: name,
                api_token: apiKey,
            },
        });
        console.log("---->Search Result", res.data);

        return res.data?.data?.items || [];
    } catch (error: any) {
        console.log("---->Error in searchPerson:", error);
    }
};

export const createPerson = async (payload: any) => { // -----> createPerson is used to create a new person in Pipedrive using the provided payload. It returns the created person data.
    try {
        const res = await axios.post(`${BASE_URL}/persons`, payload, {
            params: { api_token: apiKey },
        });

        return res.data.data;
    } catch (error: any) {
        console.log("---->Error in createPerson:", error);
    }
};

export const updatePerson = async (id: number, payload: any) => { // -----> updatePerson is used to update an existing person in Pipedrive identified by the provided id using the provided payload. It returns the updated person data.
    try {
        const res = await axios.put(`${BASE_URL}/persons/${id}`, payload, {
            params: { api_token: apiKey },
        });

        return res.data.data;
    } catch (error: any) {
        console.log("---->Error in updatePerson:", error);
    }

};