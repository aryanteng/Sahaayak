import styles from './styles.module.css'

function Loading() {
    return (
        <div className={styles.loading}>
            <div className={styles.loader_parent}>
                <div className={styles.loader}></div>
            </div>
        </div>
    )
}

export default Loading