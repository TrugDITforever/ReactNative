import React from "react"
import styles from "./Register.module.css"

const Register = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexcontainer}>
                <div className={styles.formregister}>
                    <div className={styles.formcontainer}>
                        <div className={styles.introAndOther}>
                            <div className={styles.titlecontainer}>
                                <strong className={styles.title}>WELLCOME YUMMY</strong>
                                <span>Create your account to start</span>
                            </div>
                            <div className={styles.loginwithgg}>
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-1024.png"
                                    alt="google"
                                    className={styles.icon}/>
                                <p><b>Continue with google</b></p>
                            </div>
                            <p>-------------Or-------------</p>
                        </div>

                        <div className={styles.inputinfor}>
                            <div className={styles.inputbox}>
                              <input type="text"
                                       placeholder="Name"
                                       className={styles.inputplace}
                                />

                                <input type="text"
                                       placeholder="Email"
                                       className={styles.inputplace}
                                />

                                <input type="text"
                                       placeholder="Password"
                                       className={styles.inputplace}
                                />

                                <input type="text"
                                       placeholder="Password"
                                       className={styles.inputplace}
                                />
                            </div>

                            <div className={styles.btnRegister}>
                                <p className={styles.registertxt}>Register</p>
                            </div>

                            <div className={styles.registered}>
                                <p className={styles.txtres}>Already have account?</p>
                                <p className={styles.txtregister}>Login now</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.coverimg}>
                    <div className={styles.imgbox}>
                        <img src="https://m.media-amazon.com/images/I/81A8x6xF7aL._AC_UF894,1000_QL80_.jpg"
                            alt="cooking art"
                            className={styles.imgcv}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register