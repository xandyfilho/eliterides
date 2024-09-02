import styles from './SubmitButton.module.css'

function SubmitButton({text}) {
  return (
    <div className={styles.submit_control}>
       <button className={styles.btnSubmit}>{text}</button>
    </div>
  )
}

export default SubmitButton
