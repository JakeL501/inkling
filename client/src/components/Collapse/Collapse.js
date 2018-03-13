import React from "react";

const Collapse = () => (
    <div className="container-fluid">
        <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Be prepared.
                        </button>
                        </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                    Bring your driver's license to the shop. If you're under 18, a parent or guardian has to accompany you (to sign the consent form) for your tattoo. Your tattoo artist will ask you to fill and sign a consent form that says you give him/her permission to draw on your body.
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Paperwork & Legal
                        </button>
                     </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                    Once the paperwork is taken care of, the artist will start the initial work for the tattoo. Meanwhile, you'll be asked to sit in a chair, which can either be in an open area or a private room (depending on the location of your tattoo).
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Placement information
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                            <p>
                                * Take into consideration that some designs fit better in certain places. For example, a larger tattoo with intricate details will require more space than is allowed on your wrist or along your ankle; whereas a small design just hanging out in the middle of your chest or back could look out of place, especially if it is your first tattoo.
                            </p>
                            <p>    
                                * You also have to think about the lines of the tattoo and how they will fill the space. For example, if you choose a long piece of tribal designed for an armband, it might look a bit funny if you tattoo it down the side of your calf.
                            </p>
                            <p>
                                * If you are looking at a smaller design like a rose or a heart, you might want to consider areas like your wrist, ankle, calf, bicep, or forearm, to name a few. However, if you are looking at a larger piece, you might want to choose a larger area with more exposed skin like the chest, shoulders, back, lower stomach or top of the thigh.
                            </p>
                            <p>
                                * Another thing to consider when thinking about placement is: Will the area stretch? A butterfly or pistol might look exceptional on your lower stomach now, but if you gain or lose weight, it will affect the quality of the image. In some instances, they can get distorted. If you are worried about this aspect, your calf, shoulder blades, base of your spine, and forearms are great places to get a tat.
                            </p>
                            </div>
                        </div> 
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Placement information
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                            <p>
                                * Take into consideration that some designs fit better in certain places. For example, a larger tattoo with intricate details will require more space than is allowed on your wrist or along your ankle; whereas a small design just hanging out in the middle of your chest or back could look out of place, especially if it is your first tattoo.
                            </p>
                            <p>    
                                * You also have to think about the lines of the tattoo and how they will fill the space. For example, if you choose a long piece of tribal designed for an armband, it might look a bit funny if you tattoo it down the side of your calf.
                            </p>
                            <p>
                                * If you are looking at a smaller design like a rose or a heart, you might want to consider areas like your wrist, ankle, calf, bicep, or forearm, to name a few. However, if you are looking at a larger piece, you might want to choose a larger area with more exposed skin like the chest, shoulders, back, lower stomach or top of the thigh.
                            </p>
                            <p>
                                * Another thing to consider when thinking about placement is: Will the area stretch? A butterfly or pistol might look exceptional on your lower stomach now, but if you gain or lose weight, it will affect the quality of the image. In some instances, they can get distorted. If you are worried about this aspect, your calf, shoulder blades, base of your spine, and forearms are great places to get a tat.
                            </p>
                            </div>
                        </div> 
                    </div>
                </div>

            </div>

    );

    export default Collapse;