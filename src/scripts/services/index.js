import { http } from './http';

export const ApiService = {
  async fetchPosts(limit) {
    try {
      const { data } = await http.get(`posts?limit=${limit}`);
      return data;
    } catch (error) {
      return { isError: true };
    }
  },

  async fetchUser(id) {
    try {
      const { data } = await http.get(`users/${id}`);
      return { user: data };
    } catch (error) {
      return { isError: true };
    }
  },
};
