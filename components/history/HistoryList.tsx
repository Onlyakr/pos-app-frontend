import Link from "next/link";

const HistoryList = ({ orders }: { orders: any[] }) => {
  console.log(orders);
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {orders.map((order) => (
        <Link href={`/sales/history/${order.id}`} key={order.id}>
          <p>{order.date}</p>
          <p>{order.receiptId}</p>
          <p>{order.id}</p>
        </Link>
      ))}
    </div>
  );
};
export default HistoryList;
