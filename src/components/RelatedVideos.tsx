import { Link } from "react-router-dom";
import { RelatedDataProps } from "../types/types";
import useLoadingBar from "../hooks/useLoadingBar";
import { setProgress } from "../redux/slice/TopLoadingBarSlice";
import { useAppDispatch } from "../redux/hook";

export default function RelatedVideos({ id, snippet }: RelatedDataProps) {
  const dispatch = useAppDispatch();
  useLoadingBar(dispatch(setProgress));
  return (
    <div className="text-white mb-8">
      <Link
        to={`/video/${id.videoId}`}
        className="flex flex-col sm:flex-row gap-4"
      >
        <img
          src={snippet.thumbnails.medium?.url}
          alt=""
          className="sm:h-26 sm:w-48 w-full object-cover"
        />
        <div className="mt-4 sm:mt-0">
          <div className="text-white font-medium">
            {snippet.title.length > 70
              ? snippet.title.substring(0, 70) + "..."
              : snippet.title}
          </div>
          <Link
            to={`/channel/${snippet.channelId}`}
            className="mt-2 text-sm text-white opacity-60 hover:opacity-100"
          >
            {snippet.channelTitle}
          </Link>
        </div>
      </Link>
    </div>
  );
}
