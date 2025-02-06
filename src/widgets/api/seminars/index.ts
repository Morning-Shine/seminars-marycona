import { TSeminar } from 'shared/types';
import { api } from 'shared/api';

const seminarApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSeminars: build.query<TSeminar[], string | void>({
      query: () => ({
        url: 'seminars',
        method: 'GET',
      }),
    }),
    updateSeminar: build.mutation<TSeminar, Partial<TSeminar>>({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `seminars/${data.id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: [{ type: 'seminars', id: 'LIST' }],
    }),
    deleteSeminar: build.mutation({
      query: (id) => ({
        url: `/seminars/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: [{ type: 'seminars', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetSeminarsQuery,
  useDeleteSeminarMutation,
  useUpdateSeminarMutation,
} = seminarApi;
