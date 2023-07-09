import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

interface Snippet {
  publishedAt: string;
  channelTitle: string;
  channelId: string;
  description: string;
  thumbnails: {
    medium: {
      url: string;
    };
  };
  title: string;
  customUrl?: string; // Optional customUrl property
}

type RoutesProps = {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
};

type SidebarCategoryProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

interface CommonSnippetProps {
  snippet: Snippet;
}

interface ChannelDetailsProps extends CommonSnippetProps {
  statistics: {
    videoCount: string;
    subscriberCount: string;
  };
}

interface DataProps extends CommonSnippetProps {
  id: { videoId: string };
  statistics: {
    likeCount: number;
    viewCount: number;
  };
}

interface RelatedDataProps extends CommonSnippetProps {
  id: {
    videoId: string;
  };
}

interface commentThreadsProps {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorChannelId: {
          value: string;
        };
        authorProfileImageUrl: string;
        authorDisplayName: string;
        likeCount: number;
        publishedAt: string;
        textDisplay: string;
      };
    };
  };
}

export type {
  RoutesProps,
  SidebarCategoryProps,
  CommonSnippetProps,
  DataProps,
  RelatedDataProps,
  ChannelDetailsProps,
  commentThreadsProps,
};
