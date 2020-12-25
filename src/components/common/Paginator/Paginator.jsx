import React from "react";
import styles from "./Paginator.module.css";

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.ollPages}>
        <center>
            {pages.map(p => {
                return (
                    <span className={currentPage === p && styles.selectedPage}
                          onClick={(event) => {
                              onPageChanged(p);
                          }}>{p}</span>
                );
            })}

        </center>
    </div>
}

export default Paginator;