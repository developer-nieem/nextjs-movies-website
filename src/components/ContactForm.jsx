'use client'

import React from "react";
import { useForm } from "react-hook-form"

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)


  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body w-2/3 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            {...register("name")}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            {...register("email")}
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered"
            {...register("number")}
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Message" className=" textarea-bordered textarea" cols='8' rows='5'{...register("message")} ></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-info">Message</button>
        </div>
      </form>
    </div>
  )
};

export default ContactForm;
