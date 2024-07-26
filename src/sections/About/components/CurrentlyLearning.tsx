export const CurrentlyLearning = () => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center">
      <div className="h-[8px] rounded-full aspect-square bg-green-500 animate-pulse duration-300" />
      <h1 className="font-semibold underline underline-offset-8 mb-1">Learning right now:</h1>
    </div>
    <div className="ml-2">
      <ul>
        <li>Docker</li>
      </ul>
    </div>
  </div>
);
