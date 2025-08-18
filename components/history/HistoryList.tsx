const HistoryList = () => {
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {/* {promotions.map((promotion) => (
        <ul
          key={promotion.id}
          className="grid min-h-9 grid-cols-7 gap-1 text-center font-medium"
        >
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.startDate}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.endDate}
          </li>
          <li className="bg-muted border-border col-span-3 flex items-center justify-center rounded-lg border p-1">
            {promotion.name}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.discount ? promotion.discount * 100 : "-"}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.amount ? promotion.amount : "-"}
          </li>
        </ul>
      ))} */}
      History List
    </div>
  );
};
export default HistoryList;
