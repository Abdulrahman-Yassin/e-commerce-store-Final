/*eslint-disable */ 

import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
    return(
        <div className={styles.container}> 
            <div>
                <span>Home / </span>
                <span> Error </span>
            </div>
            <div className={styles.error}>
                <h1>404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <Link to="/"><button>Back to home page</button></Link>
            </div>
        </div>
    )
}

export default NotFound