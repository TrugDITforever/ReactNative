import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexcontainer}>
        <div className={styles.coverimg}>
          <div className={styles.imgbox}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/036/303/681/non_2x/ai-generated-chef-cooking-clipart-transparent-background-culinary-art-cooking-illustration-professional-chef-chef-hat-apron-chef-uniform-cooking-png.png"
              alt="cooking art"
              className={styles.imgcv}
            />
          </div>
          <p className={styles.txtcover}>
            Start your journey to discover the amazing world of food!
          </p>
        </div>

        <div className={styles.formlogin}>
          <div className={styles.formcontainer}>
            <div className={styles.introAndOther}>
              <div className={styles.titlecontainer}>
                <strong className={styles.title}>Login to your Account</strong>
                <span>See what is going on with your account</span>
              </div>
              <div className={styles.loginwithgg}>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-1024.png"
                  alt="google"
                  className={styles.icon}
                />
                <p>
                  <b>Continue with google</b>
                </p>
              </div>
              <p>--------or sign in with email--------</p>
            </div>

            <div className={styles.inputinfor}>
              <div className={styles.inputbox}>
                <p className={styles.tag}>Email</p>
                <input
                  type="text"
                  placeholder="mail@abc.com"
                  className={styles.inputplace}
                />
                <p className={styles.tag}>Password</p>
                <input
                  type="text"
                  placeholder="***************"
                  className={styles.inputplace}
                />
                <div className={styles.forget}>
                  <div className={styles.remember}>
                    <input type="checkbox" />
                    <p className={styles.checkbox}>Remember Me</p>
                  </div>
                  <p className={styles.forgettxt}>Forgot password?</p>
                </div>
              </div>

              <div className={styles.btnLogin}>
                <Link to="/drawer">
                  <p className={styles.logintxt}>Login</p>
                </Link>
              </div>

              <div className={styles.registered}>
                <p className={styles.txtres}>Not Registered Yet?</p>
                <p className={styles.txtregister}>Create an account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
