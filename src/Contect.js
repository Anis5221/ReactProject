import React from 'react';
const Contect = () =>{

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center"> Contect Us</h1>
            </div>
            <div className="container contect_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Phone</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone Number"/>
                      </div>

                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                      </div>

                      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                     
                      <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                        </form>
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Contect;