import { DataProps } from "../types/types";
import VideoCard from "../components/VideoCard";

type FeedProps = {
  data: DataProps[];
};

export default function Feed({ data }: FeedProps) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-4">
      {data.map((video) => {
        return <VideoCard key={video.id.videoId} {...video} />;
      })}
    </div>
  );
}
