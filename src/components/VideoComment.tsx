import React from "react";
import { commentThreadsProps } from "../types/types";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function VideoComment({ snippet }: commentThreadsProps) {
  console.log(snippet.topLevelComment.snippet.likeCount);
  const paragraphText = snippet.topLevelComment.snippet.textDisplay;
  const renderTextDisplay = (): React.ReactNode[] => {
    const elements: React.ReactNode[] = [];
    const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*>(.*?)<\/a>/gi;
    let match;

    let remainingText = paragraphText;
    let currentIndex = 0;

    while ((match = regex.exec(paragraphText)) !== null) {
      const linkText = match[3];
      const linkUrl = match[2];

      const beforeText = remainingText.slice(currentIndex, match.index);
      const linkElement = (
        <a
          key={currentIndex}
          className="text-blue-400"
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </a>
      );

      elements.push(
        <React.Fragment key={currentIndex}>
          {beforeText}
          {linkElement}
        </React.Fragment>
      );

      currentIndex = match.index + match[0].length;
      remainingText = paragraphText.slice(currentIndex);
    }

    if (currentIndex < paragraphText.length) {
      const remainingTextFragment = paragraphText.slice(currentIndex);
      elements.push(remainingTextFragment);
    }

    return elements;
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start">
      <Link
        to={`/channel/${snippet.topLevelComment.snippet.authorChannelId.value}`}
        className="rounded-full w-10 h-10 overflow-hidden"
      >
        <img
          src={snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt=""
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="text-white">
        <div className="text-xs font-medium mb-1">
          {snippet.topLevelComment.snippet.authorDisplayName}
        </div>
        <div className="text-sm leading-6 whitespace-pre-line max-w-3xl mb-1">
          {renderTextDisplay()}
        </div>
        <div className="flex items-center gap-4">
          <FiThumbsUp className="cursor-pointer" />
          {snippet.topLevelComment.snippet.likeCount > 0 && (
            <div className="text-xs opacity-60">
              {snippet.topLevelComment.snippet.likeCount}
            </div>
          )}
          <FiThumbsDown className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
