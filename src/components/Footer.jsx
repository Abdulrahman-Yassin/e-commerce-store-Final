/*eslint-disable */
import styles from "./Footer.module.css";

import Facebook from "../images/facebook(2).png"
import twitter from "../images/twitter.png"
import instagram from "../images/icon-instagram.png"
import linkedIn from "../images/linkedIn.png"
import appstore from "../images/download-appstore.png"
import google from "../images/google-play.png"
import gmail from "../images/gmail.png"
import Qrcode from "../images/Qrcode.png"

function Footer() {
  return (
    <div className={styles.container}>
        <div className="container">
            <div className={styles.footer}>
                <div className={styles.exclusive}>
                    <h3>Exclusive</h3>
                    <p>Subscribe</p>
                    <label>Get 10% off your first order</label>
                    <div>
                        <input type="text" placeholder="Enter your email" />
                        <img src={gmail} alt="" />
                    </div>
                </div>
                <div>
                    <h3>Support</h3>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div>
                    <h3>Account</h3>
                    <p>My Account</p>
                    <p>Login / Register</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div>
                    <h3>Quick Link</h3>
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className={styles.download}>
                    <h3>Download App</h3>
                    <div>
                        <p>Save L.E  3 with App New User Only</p>
                        <div className={styles.icons}>
                            <img src={Qrcode} alt="" />
                            <div >
                                <img src={appstore} alt="" />
                                <img src={google} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <img src={Facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedIn} alt="" />
                    </div>
                </div>
            </div>
            <p className={styles.copyright}><span>&copy;</span>Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
  );
}

export default Footer