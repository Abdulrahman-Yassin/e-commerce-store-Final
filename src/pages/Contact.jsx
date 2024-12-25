/*eslint-disable */

import styles from "./Contact.module.css"

import phone from "../images/icons-phone.png"
import mail from "../images/icons-mail.png"

function Contact() {
    return(
        <div className={styles.container}>
            <div>
                <div className={styles.title}>
                    <span>Home / </span>
                    <span>Contact</span>
                </div>
                <div className={styles.data}>
                    <div>
                        <div>
                            <img src={phone} alt=""  loading="lazy" />
                            <h6>Call To Us</h6>
                        </div>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +8801611112222</p>
                    </div>
                    <hr />
                    <div>
                        <div>
                            <img src={mail} alt=""  loading="lazy"/>
                            <h6>Write To US</h6>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
            </div>
            <form action="">
                <div>
                    <input type="text" placeholder="Your Name *"  loading="lazy"/>
                    <input type="text" placeholder="Your Email *"  loading="lazy"/>
                    <input type="text" placeholder="Your Phone *"  loading="lazy"/>
                </div>
                <div>
                    <textarea placeholder="Your Massage" ></textarea>
                    <button>Send Massage</button>
                </div>
            </form>
        </div>
    )
}

export default Contact 