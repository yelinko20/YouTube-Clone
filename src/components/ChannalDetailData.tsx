import { ChannelDetailsProps } from "../types/types";
import { formatCount } from "../utils/FormatVCount";
import { BsChevronRight } from "react-icons/bs";

export default function ChannalDetailData({
  snippet,
  statistics,
}: ChannelDetailsProps) {
  const subscriberCount = formatCount(Number(statistics.subscriberCount));
  const videoCount = formatCount(Number(statistics.videoCount));
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end md:items-center max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-8">
        <div className="sm:w-36 sm:h-36 h-28 w-28 rounded-full overflow-hidden">
          <img
            src={snippet.thumbnails.medium.url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white">
          <div className="text-2xl sm:text-3xl">{snippet.title}</div>
          <div className="flex mt-2 items-center gap-2">
            <div className="text-sm opacity-60">{snippet.customUrl}</div>
            <div className="text-sm opacity-60">
              {subscriberCount}{" "}
              {subscriberCount.length > 1 ? "subscribers" : "subscriber"}
            </div>
            <div className="text-sm opacity-60">
              {videoCount} {videoCount.length > 1 ? "videos" : "video"}
            </div>
          </div>
          <div className="text-sm mt-2 opacity-60 flex items-center gap-2">
            <div>
              {snippet.description.length > 0
                ? snippet.description.substring(0, 70) + "..."
                : "More about this channel"}
            </div>
            <div>
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>
      <button className="bg-white text-black text-sm px-4 py-2 rounded-full font-semibold mt-4 sm:mt-0">
        Subscribe
      </button>
    </div>
  );
}
