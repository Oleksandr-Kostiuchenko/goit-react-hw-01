import style from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../transactionhistoryitem/TransactionHistoryItem";
const tableClsxArr = [
  "tableDataWhite",
  "tableDataGray",
  "tableDataWhite",
  "tableDataGray",
  "tableDataWhite",
  "tableDataGray",
  "tableDataWhite",
  "tableDataGray",
  "tableDataWhite",
  "tableDataGray",
];

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={style.tableContainer}>
      <thead className={style.tableTitlesContainer}>
        <tr className={style.tableTitle}>
          <th className={style.tableTitle}>Type</th>
          <th className={style.tableTitle}>Amount</th>
          <th className={style.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((element, index) => {
          return (
            <tr className={style[tableClsxArr[index]]} key={element.id}>
              <TransactionHistoryItem data={element} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
