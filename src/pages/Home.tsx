import Feed from "./Feed";
import Sidebar from "../Bar/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { fetchQueryData } from "../api/Data";
import Loading from "../components/Loading";
import FeedCategories from "../components/FeedCategories";
import { useAppSelector } from "../redux/hook";

export default function Home() {
  const { selectedCategory } = useAppSelector((state) => state.category);
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["home", selectedCategory],
    queryFn: () => fetchQueryData(selectedCategory),
  });

  return (
    <div className="mt-20 container mx-auto p-4">
      <Sidebar />
      <FeedCategories />
      {isSuccess && <Feed data={data} />}
      {isLoading && <Loading />}
    </div>
  );
}
