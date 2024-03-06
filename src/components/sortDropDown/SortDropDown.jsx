import React, {useState} from 'react';
import styles from "./SortDropDown.module.css";
import getImage from "../../utils/getImage";

const SortDropDown = () => {
    const [sortDropDown, setSortDropDown] = useState(false)
    const sortMethods = ["Сначала популярные", "Сначала новые", "Сначала старые", "Сначала мои предложения"]
    const choseSort = (index) => {
        console.log(sortMethods[index])
        setSortDropDown(false)
    }

    return (
        <div className={styles.sortBarWrapper}>
            <div
                className={styles.sortBar}
                onClick={() => setSortDropDown(!sortDropDown)}
            >
                <span>Сортировка</span>
                <div className={(sortDropDown ? styles.sortIcon + " " + styles.activeSortIcon : styles.sortIcon)}>
                    <img
                        src={getImage("sortIcon")}
                        alt="#"
                    />
                </div>
            </div>

            <div className={styles.sortDropDown + " " + (sortDropDown ? styles.sortDropDownActive : styles.sortDropDownDisactive)}>
                {sortMethods.map((sort, index) => (
                    <span
                        key={index}
                        onClick={() => choseSort(index)}
                    >
                        {sort}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SortDropDown;