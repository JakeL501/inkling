import React from "react";

const Modal = () => (
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
                            <div class="col-md-4">.col-md-4</div>
                                <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                        </div>
                    <div class="row">
                        <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                        <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            Level 1: .col-sm-9
                            <div class="row">
                                <div class="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                </div>
                                <div class="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
    </div>
</div>
</div>
);

export default Modal;
