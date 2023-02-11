import { createSlice } from "@reduxjs/toolkit"
import { HomePageVideos } from "../../Types";
import { CurrentPlaying } from "../../Types";
import { RecommendedVideos } from "../../Types";
import { PayloadAction } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../reducers/getHomePageVideos";
import { getSearchPageVideos } from "../reducers/getSearchPageVideos";
import { getRecommendedVideos } from "../reducers/getRecommendedVideos";  
import { getVideoDetails } from "../reducers/getVideoDetails";

  export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerm: string;
    searchResults: [];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
  }

  const initialState: InitialState = {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
  };
  
  export const YoutubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers: {
      clearVideos: (state) => {
        state.videos = [];
        state.nextPageToken = null;
      },
      changeSearchTerm: (state, action: PayloadAction<string>) => {
        state.searchTerm = action.payload
      },
      clearSearchTerm: (state) => {
        state.searchTerm = ''
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getHomePageVideos.fulfilled, (state, action) => {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      });
      builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      });
      builder.addCase(getVideoDetails.fulfilled, (state, action) => {
        state.currentPlaying = action.payload;
      });
      builder.addCase(getRecommendedVideos.fulfilled, (state, action) => {
        state.recommendedVideos = action.payload.parsedData;
      });
    },
  });
  