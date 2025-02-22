import style from "./TransactionHistoryItem.module.css";

const TransactionHistoryItem = ({ data: { id, type, amount, currency } }) => {
  return (
    <>
      <td className={style.dataTableItem}>{type}</td>
      <td className={style.dataTableItem}>{amount}</td>
      <td className={style.dataTableItem}>{currency}</td>
    </>
  );
};

export default TransactionHistoryItem;
