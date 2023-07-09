import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchChannelDetails, fetchChannelVideos } from "../api/Data";
import ChannalDetailData from "../components/ChannalDetailData";
import VideoCard from "../components/VideoCard";

export default function ChannelDetails() {
  const { channelId } = useParams();
  const { data: channelDetailData, isSuccess: isChannelDetailSuccess } =
    useQuery({
      queryKey: ["channelDetails", channelId],
      queryFn: () => fetchChannelDetails(channelId),
    });

  const { data: channelVideos, isSuccess: isChannelVideoSuccess } = useQuery({
    queryKey: ["channelVideoDetails", channelId],
    queryFn: () => fetchChannelVideos(channelId),
  });
  return (
    <div className="container mx-auto mt-20 px-4">
      <div>
        {isChannelDetailSuccess &&
          channelDetailData.map((data) => {
            return <ChannalDetailData key={data.snippet.channelId} {...data} />;
          })}
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4 mt-20">
        {isChannelVideoSuccess &&
          channelVideos.map((video) => {
            return <VideoCard key={video.id.videoId} {...video} />;
          })}
      </div>
    </div>
  );
}
