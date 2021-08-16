import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DragIndicatorOutlinedIcon from '@material-ui/icons/DragIndicatorOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MenuOpenOutlinedIcon from '@material-ui/icons/MenuOpenOutlined';
import React from 'react';
import styles from "./NumericKeypad.module.css";

const HeaderPart = () => {
    return (
        <div className={styles.icons}>
            <div className={styles["left-icons"]}>
            <LockOutlinedIcon />
            <DragIndicatorOutlinedIcon />
            <MenuOpenOutlinedIcon />
            </div>
            <div className={styles["right-icons"]}><span>Verkauf <br/> 012</span>
            <AddOutlinedIcon/></div>
            
        
        </div>
    )
}

export default HeaderPart
