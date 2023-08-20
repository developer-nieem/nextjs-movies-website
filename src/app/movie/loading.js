import React from 'react';
import styles from './page.module.css'
const Loading = () => {
    return (
        <div>
            <div class={styles.lds_hourglass}></div>
        </div>
    );
};

export default Loading;