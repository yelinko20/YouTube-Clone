import moment from "moment";
import { DataProps } from "../types/types";
import { formatCount } from "../utils/FormatVCount";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import useLoadingBar from "../hooks/useLoadingBar";
import { Link } from "react-router-dom";
import { setProgress } from "../redux/slice/TopLoadingBarSlice";
import { useAppDispatch } from "../redux/hook";
import React from "react";

export default function VideoDetails({ snippet, statistics }: DataProps) {
  const dispatch = useAppDispatch();
  const {
    title,
    thumbnails,
    channelId,
    channelTitle,
    description,
    publishedAt,
  } = snippet;

  const viewCount = formatCount(Number(statistics.viewCount));
  const likeCount = formatCount(Number(statistics.likeCount));

  useLoadingBar(dispatch(setProgress));

  return (
    <div>
      <div className="text-white text-xl font-medium mb-4">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 mb-4">
          <Link
            to={`/channel/${channelId}`}
            className="w-10 h-10 cursor-pointer overflow-hidden"
          >
            <img
              src={thumbnails.medium.url}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </Link>
          <div>
            <Link
              to={`/channel/${channelId}`}
              className="text-white font-medium"
            >
              {channelTitle}
            </Link>
            <div className="text-white font-medium">{viewCount} views</div>
          </div>
        </div>
        <div className="text-white flex items-center gap-6 bg-Glass1 py-2 px-4 rounded-3xl">
          <div className="flex items-center gap-2 cursor-pointer">
            <FiThumbsUp size={20} />
            <div className="text-sm">{likeCount}</div>
          </div>
          <div>
            <FiThumbsDown size={20} />
          </div>
        </div>
      </div>
      <div className="bg-Glass1 p-2 rounded-xl text-sm text-white">
        <div className="flex items-center gap-4">
          <div>{viewCount} views</div>
          <div>
            {moment(publishedAt).fromNow()} {/* Removed unnecessary format */}
          </div>
        </div>
        <div>
          {description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
