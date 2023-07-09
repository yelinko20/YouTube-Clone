export default function Loading() {
  return (
    <div className="container mx-auto flex items-center justify-center flex-wrap gap-4">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="rounded w-[20rem] h-80 overflow-hidden shadow-lg"
        >
          <div className="animate-pulse">
            <div className="h-48 bg-Glass1"></div>
          </div>
          <div className="pt-4">
            <div className="h-5 bg-Glass1 w-4/5 mb-2"></div>
            <div className="h-5 bg-Glass1 w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
