import React from "react";
import styles from "../styles/Pagination.module.css";

const Pagination = ({ handleNextPage, handlePrevPage }) => {
	return (
		<div className={styles.pagenumbers}>
			{handlePrevPage && (
				<button className={styles.pageNumberBtn} onClick={handlePrevPage}>
					Previous
				</button>
			)}
			{handleNextPage && (
				<button className={styles.pageNumberBtn} onClick={handleNextPage}>
					Next
				</button>
			)}
		</div>
	);
};

export default Pagination;
