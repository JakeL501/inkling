import React from "react";

const Modal = () => (
    <div className="container-fluid">
    <button 
    type="button"
    class="btn btn-primary btn-lg btn-block"
    data-toggle="modal"
    data-target="#inkling-lisu">
    Sign Up
    </button>

<div class="modal fade" id="inkling-lisu" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="inklingBuilder">Become Part of Inkling</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="newUser">
                    <div class="container-fluid">
                        <div class="row">
                        <form>
                    <div class="form-group">
                        <label for="userEmail">Email address</label>
                        <input type="email" class="form-control" id="userEmail" placeholder="whatsyour.email@you-got-mail.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="userBioSelect">Main reason for joining Inkling?</label>
                        <select class="form-control" id="userBioSelect">
                            <option value="0">I just like loooking at tattoos...</option>
                            <option value="1">I have been thinking about an inking.</option>
                            <option value="2">I want some ink & I need it now.</option>
                            <option value="3">I have an INKLING!</option>
                            <option value="4">I want some skin.</option>
                            <option value="5">I NEED some skins.</option>
                            <option value="6">I came to show off my Inklings!</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="userBioOther">Some other reasons...?</label>
                        <select multiple class="form-control" id="formControlSelect2">
                            <option>I'm just looking at ink ideas.</option>
                            <option>I have been thinking about getting skin art.</option>
                            <option>I want some ink in my skin.</option>
                            <option>I have an INKLING! ( Maybe even a few inklings... )</option>
                            <option>I am a artist! I have a portfolio & have some tattoo experience. </option>
                            <option>I am an artist! I have a portfolio & have tattoo'd in a professional setting.</option>
                            <option>I came to show off my Inklings!</option>
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
                    <div class="input-group mb-3">
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
                    <div class="row">
                        
                    </div>
                    </div>
                    <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
                </div>
            </div>
        </div>
    </div>
    </div>    
);

export default Modal;
