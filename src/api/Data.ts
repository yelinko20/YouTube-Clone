import axiosInstance from "./axiosInstance";
import {
  ChannelDetailsProps,
  DataProps,
  RelatedDataProps,
  commentThreadsProps,
} from "../types/types";

const fetchQueryData = async (query?: string): Promise<DataProps[]> => {
  const response = await axiosInstance.get("/search", {
    params: {
      q: query,
      part: "snippet,id",
      maxResults: 50,
    },
  });
  return response.data.items;
};

const relatedVideoFetch = async (id?: string): Promise<RelatedDataProps[]> => {
  const response = await axiosInstance.get("/search", {
    params: {
      part: "snippet,id",
      relatedToVideoId: id,
      type: "video",
      maxResults: "50",
    },
  });
  return response.data.items;
};

const videoDetailFetch = async (id?: string): Promise<DataProps[]> => {
  const response = await axiosInstance.get("/videos", {
    params: {
      part: "contentDetails,snippet,statistics",
      id: id,
    },
  });
  return response.data.items;
};

const searchVideoFetch = async (
  query?: string
): Promise<RelatedDataProps[]> => {
  const response = await axiosInstance.get("/search", {
    params: {
      q: query,
      part: "snippet,id",
      maxResults: "50",
      order: "viewCount",
    },
  });
  return response.data.items;
};

const fetchChannelDetails = async (
  id?: string
): Promise<ChannelDetailsProps[]> => {
  const response = await axiosInstance.get("/channels", {
    params: {
      part: "snippet,statistics",
      id: id,
    },
  });
  return response.data.items;
};

const fetchChannelVideos = async (id?: string): Promise<DataProps[]> => {
  const response = await axiosInstance.get("/search", {
    params: {
      channelId: id,
      part: "snippet,id",
      order: "date",
      maxResults: "100",
    },
  });
  return response.data.items;
};

const fetchTrendingData = async (): Promise<DataProps[]> => {
  const response = await axiosInstance.get("/videos", {
    params: {
      part: "snippet,contentDetails,statistics",
      type: "video",
      maxResults: "50",
      chart: "mostPopular",
    },
  });
  return response.data.items;
};

const fetchVideoComments = async (
  id?: string
): Promise<commentThreadsProps[]> => {
  const response = await axiosInstance.get("/commentThreads", {
    params: {
      part: "snippet",
      videoId: id,
      maxResults: "50",
    },
  });
  return response.data.items;
};

export {
  fetchQueryData,
  fetchTrendingData,
  relatedVideoFetch,
  videoDetailFetch,
  searchVideoFetch,
  fetchChannelDetails,
  fetchChannelVideos,
  fetchVideoComments,
};
