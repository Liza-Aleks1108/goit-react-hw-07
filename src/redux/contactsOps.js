// Використовуй функцію createAsyncThunk для оголошення операцій.
import { createAsyncThunk } from "@reduxjs/toolkit";
// Для виконання HTTP-запитів використай бібліотеку axios.
import axios from "axios";

// Для коректного опрацювання помилки HTTP-запиту в середині операцій, використай конструкцію try...catch, та у блоці catch поверни результат виклику методу thunkAPI.rejectWithValue.

axios.defaults.baseURL = "https://6744cdb8b4e2e04abea3ad72.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
