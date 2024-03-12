// fetchServices.js
import axiosInstance from '../../../axiosConfig';

export const fetchServices = async () => {
    try {
        const response = await axiosInstance.get('services/');
        if (response.data && response.data.Services) {
            // Directly return the Services array from the response
            return response.data.Services;
        }
        return []; // Return an empty array if there's no 'Services' data
    } catch (error) {
        console.error("Failed to fetch services:", error);
        return []; // Return an empty array in case of error
    }
};
