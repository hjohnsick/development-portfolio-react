import React from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="contact-container">
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            className="input"
            type="text"
            defaultValue=""
            {...register("firstName", { required: "First name is required" })}
          ></input>
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last name:</label>
          <input
            className="input"
            type="text"
            defaultValue=""
            {...register("lastName", { required: "Last name is required" })}
          ></input>
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            className="input"
            type="email"
            defaultValue=""
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message:
                  "Email needs to be in a valid format example@example.com",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          ></input>
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            className="input"
            defaultValue=""
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <div>{errors.message.message}</div>}
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
