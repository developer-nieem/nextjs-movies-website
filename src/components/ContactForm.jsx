'use client'

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
const ContactForm = () => {

  const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async(data) => {
          const {name, email, number , message} = data
          const res = await fetch('http://localhost:3000/api/contact', {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({ name, email, number, message })
          });
          
          if (res.ok) {
            console.log('information sent');
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Message has been Send',
              showConfirmButton: false,
              timer: 1500
            })
          
          } else {
            console.error('Failed to send information');
          }

      }


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
            required
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
            required
          />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Phone"
            className="input input-bordered"
            {...register("number")}
            required
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
