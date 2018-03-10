import React from "react";

const BuiltInk = () => (
  <div className="container-fluid">
  <button 
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#inkling-lisu">
  Log In
  </button>

<div class="modal fade" id="inkling-lisu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="inklingBuilder">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <div class="container-fluid">
                      <div class="row">
                      <form>
                  <div class="form-group">
                      <label for="exampleFormControlInput1">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                  </div>
                  <div class="form-group">
                      <label for="exampleFormControlSelect1">Example select</label>
                      <select class="form-control" id="exampleFormControlSelect1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="exampleFormControlSelect2">Example multiple select</label>
                      <select multiple class="form-control" id="exampleFormControlSelect2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="exampleFormControlTextarea1">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
              </form>
                      </div>
                  <div class="row">
                  <div class="input-group mb-3">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
              </div>


              <div class="input-group mb-3">
                  <div class="input-group-prepend">
                      <span class="input-group-text">$</span>
                  </div>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"></input>
                  <div class="input-group-append">
                      <span class="input-group-text">.00</span>
                  </div>
              </div>

              <div class="input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text">With textarea</span>
                  </div>
                  <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
          </div>

                  <div class="row">
                  <div class="input-group">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="">First and last name</span>
                  </div>
                  <input type="text" class="form-control"></input>
                  <input type="text" class="form-control"></input>
              </div>

              <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                  <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">@example.com</span>
                  </div>
              </div>

              <label for="basic-url">Your vanity URL</label>
              <div class="input-group mb-3">
                  <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                  </div>
                  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
              </div>
                  </div>
                  </div>
                  </div>
                  <div class="row">
                  </div>
                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
          </div>
              </div>
          </div>
      </div>
  </div>
);


export default BuiltInk;
