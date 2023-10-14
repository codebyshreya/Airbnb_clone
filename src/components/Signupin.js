const Signupin = () => {
  return (
    <section className="signup py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" placeholder="Enter name" />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group mb-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Signupin;
