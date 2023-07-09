import { Link } from "react-router-dom";
import { DataProps } from "../types/types";
import moment from "moment";
import { formatCount } from "../utils/FormatVCount";

export default function VideoCard({ id, snippet, statistics }: DataProps) {
  const viewCount = statistics && formatCount(Number(statistics.viewCount));
  // eslint-disable-next-line no-prototype-builtins
  const videoId = id.hasOwnProperty("videoId") ? id.videoId : id;
  return (
    <div className="rounded w-[20rem] h-80 overflow-hidden shadow-lg">
      <Link
        to={`/video/${videoId}`}
        className="rounded-md overflow-hidden relative group"
      >
        <img
          src={snippet.thumbnails.medium?.url}
          alt=""
          className=" w-full h-auto object-cover"
        />
        <div className="absolute text-xs right-2 rounded bottom-2 opacity-0 text-White group-hover:opacity-100 bg-Black p-1">
          click to play
        </div>
      </Link>
      <div>
        <div className="text-White font-medium mt-4">
          {snippet.title.length > 70
            ? snippet.title.substring(0, 70) + "..."
            : snippet.title}
        </div>
        <Link
          to={`/channel/${snippet.channelId}`}
          className="mt-2 text-sm text-White opacity-60 hover:opacity-100"
        >
          {snippet.channelTitle}
        </Link>

        <div className="flex items-center gap-3 text-White opacity-60">
          {statistics && (
            <div className="font-medium text-sm">{viewCount} views</div>
          )}
          <div className="font-medium text-sm ">
            {moment(snippet.publishedAt, "YYYY-MM-DDTHH:mm:ssZ").fromNow()}
          </div>
        </div>
      </div>
    </div>
  );
}
