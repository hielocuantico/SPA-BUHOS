import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div
      className={`container container-margin ${styles["contact-container"]}`}
    >
      <div>
        <form>
          <label>
            <input type="text" placeholder="Name" />
          </label>
          <label>
            <input type="email" placeholder="Email" />
          </label>
          <label>
            <textarea type="text" placeholder="Description" />
          </label>
        </form>
      </div>

      <div>
        <h2> Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde corrupti minus perspiciatis aperiam magni reprehenderit? Incidunt
          mollitia debitis ullam alias eveniet veniam voluptatum, quas quidem
          nulla doloribus sunt beatae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde corrupti minus perspiciatis aperiam magni reprehenderit? Incidunt
          mollitia debitis ullam alias eveniet veniam voluptatum, quas quidem
          nulla doloribus sunt beatae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          unde corrupti minus perspiciatis aperiam magni reprehenderit? Incidunt
          mollitia debitis ullam alias eveniet veniam voluptatum, quas quidem
          nulla doloribus sunt beatae!
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
