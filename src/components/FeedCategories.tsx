import feedCategories from "../utils/FeedCategories";
import { setSelectedCategory } from "../redux/slice/CategorySlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function FeedCategories() {
  const { selectedCategory } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-wrap items-center justify-center text-white gap-2 mb-8">
      {feedCategories.map((category, index) => (
        <div
          key={index}
          className={`${
            selectedCategory === category ? "bg-White text-Black" : "bg-Glass1"
          } px-2 py-1 text-sm rounded-lg cursor-pointer select-none`}
          onClick={() => dispatch(setSelectedCategory(category))}
        >
          {category}
        </div>
      ))}
    </div>
  );
}
