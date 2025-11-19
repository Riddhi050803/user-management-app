import axios from "axios";
import { User } from "../types/User";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get<User[]>(API_URL);
export const fetchUserById = (id: number) => axios.get<User>(`${API_URL}/${id}`);
export const createUser = (user: User) => axios.post<User>(API_URL, user);
export const updateUser = (id: number, user: User) => axios.put<User>(`${API_URL}/${id}`, user);
export const deleteUser = (id: number) => axios.delete(`${API_URL}/${id}`);
