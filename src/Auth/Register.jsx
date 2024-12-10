import Lottie from "lottie-react";
import React from "react";
import register from '../assets/Lottie/Register.json'

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo,email, password);
    }
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={register} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="m-8 text-5xl font-bold">Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
