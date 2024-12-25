/*eslint-disable */

import styles from './Section.module.css'

function Section({title1, title2}) {

    return(
        <>
            <div className="container">
                <div className={styles.title}>
                    <span>{title1}</span>
                </div>
                <div>
                    <h2>{title2}</h2>
                </div>
            </div>
        </>
    )
}

export default Section