import styles from "./TransactionHistory.module.css"

const {
  transactionHistoryTable,
  transactionHistoryHead,
  transactionHistoryRow

} = styles;


const TransactionHistory = ({ items }) =>{
  return (
    <table className={transactionHistoryTable}>
      <thead className={transactionHistoryHead}>
        <tr className={transactionHistoryRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={transactionHistoryRow} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
