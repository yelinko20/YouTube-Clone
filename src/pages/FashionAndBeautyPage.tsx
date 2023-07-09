import { useQuery } from "@tanstack/react-query";
import { fetchQueryData } from "../api/Data";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";

export default function FashionAndBeauty() {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["fashion-and-beauty"],
    queryFn: () => fetchQueryData("fashion and beauty"),
  });
  return (
    <div className="mt-20 container mx-auto p-4">
      {isLoading && <Loading />}
      <div className="flex items-center justify-center flex-wrap gap-4">
        {isSuccess &&
          data.map((video) => {
            return <VideoCard key={video.id.videoId} {...video} />;
          })}
      </div>
    </div>
  );
}
