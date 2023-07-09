import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { searchVideoFetch } from "../api/Data";
import moment from "moment";

export default function SearchResults() {
  const { query } = useParams();
  const { data: resultVideos, isSuccess } = useQuery({
    queryKey: ["results", query],
    queryFn: () => searchVideoFetch(query),
  });

  return (
    <div className="container max-w-[65rem] px-4 mx-auto mt-28">
      {isSuccess &&
        resultVideos.map((video) => (
          <div
            key={video.id.videoId}
            className="my-8 flex flex-col sm:flex-row sm:items-start items-center gap-8"
          >
            <Link
              to={`/video/${video.id.videoId}`}
              className="w-full sm:w-auto group relative"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt=""
                className="w-full"
              />
              <div className="absolute text-xs right-2 rounded bottom-2 opacity-0 text-White group-hover:opacity-100 bg-Black p-1">
                click to play
              </div>
            </Link>
            <div className="text-white">
              <div className="text-white">{video.snippet.title}</div>
              <Link
                to={`/channel/${video.snippet.channelId}`}
                className="flex mt-4 items-center gap-2"
              >
                <div className="w-6 h-6 cursor-pointer overflow-hidden">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-sm cursor-pointer">
                  {video.snippet.channelTitle}
                </div>
              </Link>
              <div className="mt-4 text-sm">
                {moment(
                  video.snippet.publishedAt,
                  "YYYY-MM-DDTHH:mm:ssZ"
                ).fromNow()}
              </div>
              <div className="text-sm mt-4 whitespace-pre-wrap">
                {video.snippet.description.length > 70
                  ? video.snippet.description.substring(0, 70) + "..."
                  : video.snippet.description}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
