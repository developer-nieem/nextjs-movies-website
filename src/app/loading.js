import React from 'react';
import styles from './page.module.css'
const Loading = () => {
    return (
        <div className='text-center mt-44'>
            <div class={styles.lds_hourglass}></div>
        </div>
    );
};

export default Loading;