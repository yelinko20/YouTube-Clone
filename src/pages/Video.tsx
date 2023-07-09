import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  fetchVideoComments,
  relatedVideoFetch,
  videoDetailFetch,
} from "../api/Data";
import RelatedVideos from "../components/RelatedVideos";
import VideoDetails from "../components/VideoDetails";
import LoadingBar from "react-top-loading-bar";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setProgress } from "../redux/slice/TopLoadingBarSlice";
import VideoComment from "../components/VideoComment";

export default function Video() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const progress = useAppSelector((state) => state.topLoadingBar.progress);

  const { data: videoDetail, isSuccess: isVideoDetailSuccess } = useQuery({
    queryKey: ["repoData", id],
    queryFn: () => videoDetailFetch(id),
    enabled: !!id,
    onSuccess: () => dispatch(setProgress(100)),
  });

  const { data: relatedVideos, isSuccess: isRelatedSuccess } = useQuery({
    queryKey: ["related", id],
    queryFn: () => relatedVideoFetch(id),
    enabled: !!id,
    onSuccess: () => dispatch(setProgress(100)),
  });

  const { data: videoComments, isSuccess: isCommentSuccess } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => fetchVideoComments(id),
    enabled: !!id,
    onSuccess: () => dispatch(setProgress(100)),
  });

  return (
    <div className="container mx-auto mt-24 flex flex-wrap gap-8">
      <LoadingBar progress={progress} height={2} color="#FF0000" />
      <div className="w-full px-4 lg:w-2/3 ">
        <div className="w-full h-[18rem] sm:h-[25rem] md:h-[32rem]">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            className="w-full h-full"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="mt-4">
          {isVideoDetailSuccess &&
            videoDetail.map((detail) => (
              <VideoDetails key={detail.id.videoId} {...detail} />
            ))}
        </div>
        <div className="mt-4  hidden lg:block">
          <div className="text-white mb-4">comments</div>
          {isCommentSuccess &&
            videoComments.map((comment) => {
              return <VideoComment key={comment.id} {...comment} />;
            })}
        </div>
      </div>
      <div className="w-full px-4 lg:w-[30%] ">
        {isRelatedSuccess && (
          <div className="text-White font-semibold text-2xl mb-2">
            Related Videos
          </div>
        )}
        {isRelatedSuccess &&
          relatedVideos.map((video) => (
            <RelatedVideos key={video.id.videoId} {...video} />
          ))}
      </div>
      <div className="mt-4 px-4 lg:hidden">
        {isCommentSuccess && <div className="text-white mb-4">comments</div>}
        {isCommentSuccess &&
          videoComments.map((comment) => {
            return <VideoComment key={comment.id} {...comment} />;
          })}
      </div>
    </div>
  );
}
