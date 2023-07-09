import { useQuery } from "@tanstack/react-query";
import { fetchTrendingData } from "../api/Data";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

export default function Trending() {
  const {
    data: trendingVideos,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["trending"],
    queryFn: fetchTrendingData,
  });
  return (
    <div className="mt-20 container mx-auto p-4">
      {isLoading && <Loading />}
      <div className="flex items-center justify-center flex-wrap gap-4">
        {isSuccess &&
          trendingVideos.map((video) => {
            return <VideoCard key={video.snippet.title} {...video} />;
          })}
      </div>
    </div>
  );
}
