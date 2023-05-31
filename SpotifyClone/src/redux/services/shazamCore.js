import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
//       'X-RapidAPI-Key': '77939a538fmsh26c344b7fb24915p1e1831jsnf2271ddd6296'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com',
        prepareHeaders: (headers) =>{
            headers.set('X-RapidAPI-Key', '77939a538fmsh26c344b7fb24915p1e1831jsnf2271ddd6296')
            return headers;
        }
    }),
    endpoints: (builder) =>({
        getTopCharts: builder.query({query: () =>'/charts/track'}),
        getSearch: builder.query({query: () =>'/search?term=Jacob%20Banks'}),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSearchQuery,
} = shazamCoreApi;