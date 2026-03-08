import { Prediction, TipPlan, User, Session, Fixture } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// log build-time value; this runs during server startup (next dev/build)
console.log("BUILD-time NEXT_PUBLIC_API_URL=", process.env.NEXT_PUBLIC_API_URL);
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://humright-1.onrender.com/api";
if (!process.env.NEXT_PUBLIC_API_URL) {
  console.warn("NEXT_PUBLIC_API_URL is undefined, falling back to", BASE_URL);
} else {
  console.log("Using API base URL", BASE_URL);
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    endpoints: (builder) => ({
    getFreeBets: builder.query<Prediction, string>({
        query: (day) => `predictions/${day}`,
      
    }),
    getplans:builder.query<TipPlan, void>({
        query: () => "/plans/plan",
    }),
    getMe:builder.query<User, void>({
        query: () => "/me",
    }),
    getLogin:builder.mutation<void, void>({
      query:(body)=>({
        url: "/auth/sign-in/email",
        method: "POST",
        body,
      })

    }),
    postCreateUser:builder.mutation<void, void>({
      query:(body)=>(
        {
        url:"/auth/sign-up/email",
        method: "POST",
        body,
      }
      )
    })
    ,
    getSession: builder.query<Session | null, void>({
      query: () => "/auth/get-session",
    }),
    getLogout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/sign-out",
        method: "POST",
      }),
    }),
    getPredictions:builder.query<any, void>({
      query:()=>"bets/allFreeBets",
    }),
    postCreatePlan: builder.mutation<void,void>({
      query:(body)=>({
        url: "/plan",
        method: "POST",
        body
      })
    }),
    postCreateFixture: builder.mutation<void, void>({
      query: (body) => ({
        url: "/fixtures/create",
        method: "POST",
        body,
      }),
    }),
    getFixturesByDate: builder.query<{
      success: boolean;
      count: number;
      data: Fixture[];
      date: string;
    }, string>({
      query: (date) => `/fixtures/by-date?date=${date}`,
    }),
    postCreatePrediction: builder.mutation<{
      success: boolean;
      data: Prediction;
    }, {
      tipText: string;
      odd: number;
      tipDate: string;
      isPublished?: boolean;
      fixtureId: number;
      planId?: number;
      // Temporarily commented out until migration is run
      // confidence?: number;
      // category?: string;
      // priority?: number;
    }>({
      query: (body) => ({
        url: "/predictions/create",
        method: "POST",
        body,
      }),
    }),
    initiatePayment: builder.mutation<{
      success: boolean;
      payment: any;
      stkResponse: any;
    }, {
      mobileNumber: string;
      predictionId: number;
    }>({
      query: (body) => ({
        url: "/mpesa/stk",
        method: "POST",
        body,
      }),
    }),
    getPlanPredictionsToday: builder.query<{
      success: boolean;
      count: number;
      data: Prediction[];
    }, number>({
      query: (planId) => `/plans/plan/${planId}/predictions/today`,
    }),
    getJackpotByName: builder.query<{
      success: boolean;
      count: number;
      data: any[];
    }, string>({
      query: (name) => `/jackpots/${name}`,
    }),
    createJackpot: builder.mutation<{
      success: boolean;
      data: any;
    }, {
      name: string;
      startDatetime: string;
      endDatetime: string;
      amount: number;
      fixtureIds: number[];
    }>({
      query: (body) => ({
        url: "/jackpots",
        method: "POST",
        body,
      }),
    }),
  }),

});

export const {
  useGetFreeBetsQuery,
  useGetplansQuery,
  useGetMeQuery,
  useGetLoginMutation,
  usePostCreateUserMutation,
  useGetSessionQuery,
  useGetPredictionsQuery,
  usePostCreatePlanMutation,
  usePostCreateFixtureMutation,
  useGetLogoutMutation,
  useGetFixturesByDateQuery,
  usePostCreatePredictionMutation,
  useInitiatePaymentMutation,
  useGetPlanPredictionsTodayQuery,
  useGetJackpotByNameQuery,
  useCreateJackpotMutation,
} = api;