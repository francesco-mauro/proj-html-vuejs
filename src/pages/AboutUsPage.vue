<script>
    // Caratteri della pagina, serviti dal progetto: prima erano dichiarati ma non caricati
    import "../assets/fonts/fonts.css";

    export default {};
</script>

<template>
    <div>
        <!-------------------------------- HERO background image e overlay scuro -------------------------------->
        <div class="hero-section">
            <div class="overlay">
                <div class="text-center">
                    <h1>About Us</h1>
                    <p>About Avada Food Blog. About our amazing journey so far</p>
                </div>
            </div>
        </div>
        <!-------------------------------- HERO background image e overlay scuro -------------------------------->


        <!----------------------- Sezione con griglia di immagini a sx e testo a dx ----------------------->
        <div class="container my-5">
            <div class="row">
                <!-- Colonna di sinistra con la griglia di immagini -->
                <div class="col-md-6 inner">
                    <div class="row g-0">
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">
                                <img src="../assets/img/banana.jpg" alt="Bowl of fresh fruit with chocolate" class="img-fluid my-hover-img" width="800" height="527" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">
                                <img src="../assets/img/beans.jpg" alt="Pan of greens, chickpeas and vegetables" class="img-fluid my-hover-img" width="800" height="527" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">

                                <img src="../assets/img/kimchi.jpg" alt="Korean dishes with bibimbap and side dishes" class="img-fluid my-hover-img" width="400" height="263" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">

                                <img src="../assets/img/egg-fruit.jpg" alt="Breakfast table with waffles, eggs and fruit" class="img-fluid my-hover-img" width="800" height="527" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">

                                <img src="../assets/img/ice-cream.jpg" alt="Bowls of ice cream in different flavours" class="img-fluid my-hover-img" width="800" height="527" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">

                                <img src="../assets/img/sushi.jpg" alt="Sushi rolls on wooden boards" class="img-fluid my-hover-img" width="800" height="527" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">

                                <img src="../assets/img/drink.jpg" alt="Pink cocktail poured into a glass" class="img-fluid my-hover-img" width="800" height="527" loading="lazy" decoding="async">
                            </div>
                        </div>
                        <div class="col-6 my-hover-card">
                            <div class="img-container img-container-hero">

                                <img src="../assets/img/riso.jpg" alt="Grilled meat with rice on sizzling plates" class="img-fluid my-hover-img" width="400" height="263" loading="lazy" decoding="async">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Colonna di destra con il testo -->
                <div class="col-md-6">
                    <div class="row mb-5">
                        <div class="col-12">
                            <h2 class="h5">Our Story</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed
                                quis luctus eros. Phasellus rutrum laoreet leo in consequat. Phasellus vel semper ante.
                                Vivamus turpis purus, dapibus vitae ex a, varius ornare elit. Nullam eu purus congue,
                                bibendum felis id, aliquet ante.</p>
                            <p>Donec porttitor, diam quis posuere lacinia, justo libero consequat mi, at euismod lacus
                                mi in erat. Cras sit amet ornare orci.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2 class="h5">About Our Company</h2>
                            <p>Curabitur id nibh sit amet lectus efficitur tempus aliquet non ante. Aenean feugiat, enim
                                suscipit dictum ullamcorper, tellus nunc mollis leo, vitae elementum lacus lorem tempor
                                ante. Maecenas ac aliquet risus, nec fringilla sem. Nam sed nibh id arcu vestibulum
                                malesuada pretium sed nisl. Nunc tristique, dui ac interdum scelerisque, arcu purus
                                faucibus nisl.</p>
                            <p>Praesent condimentum ligula lacus, id dignissim mi feugiat non. Nulla vel velit nisi. Nam
                                vitae eros ullamcorper dolor dapibus pellentesque. In non iaculis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!------------------ Sezione con icone FONTAWSOME e testo ------------------>
        <div>
            <div class="container my-5">
                <div class="row text-center">
                    <div class="col-md-4">
                        <div class="icon-text">
                            <i class="fa-solid fa-square-check custom-icon"></i>
                            <div>
                                <h3 class="h4">AUTHENTICITY</h3>
                                <p>Aenean eu arcu sed velit mattis vehicula ac quis tellus. Suspendisse elementum justo
                                    neque, a tincidunt est congue quis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="icon-text">
                            <i class="fa-solid fa-file-lines custom-icon"></i>
                            <div>
                                <h3 class="h4">REAL REVIEWS</h3>
                                <p>Praesent erat eros, malesuada nec augue non, aliquet finibus orci. Duis vitae cursus
                                    tortor. Suspendisse blandit volutpat.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="icon-text">
                            <i class="fa-solid fa-utensils custom-icon"></i>
                            <div>
                                <h3 class="h4">UNIQUE RECIPES</h3>
                                <p>Donec vel volutpat erat. Sed in nulla vitae elit accumsan tempus. Aliquam dapibus
                                    ligula gravida, blandit enim ac, sagittis justo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- ------------------ ACHIEVEMENTS ------------------>
        <div class="achievements-section my-5">
            <div class="container">
                <h2 class="h5 text-center mb-3">OUR ACHIEVEMENTS</h2>
                <p class="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius
                    ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</p>
                <div class="row text-center">
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">
                                <img src="../assets/img/achievment-1.jpg" class="card-img-top my-hover-img" alt="Award plaque" width="400" height="225" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Best Food Blog of 2018</h3>
                                <p class="card-text">Praesent quam magna, varius in laoreet in, condimentum at augue.
                                    Suspendisse viverra scelerisque lacus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">
                                <img src="../assets/img/achievment-2.jpg" class="card-img-top my-hover-img"
                                    alt="Trophy on a shelf" width="400" height="225" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Break-Through Recipe #1</h3>
                                <p class="card-text">Praesent quam magna, varius in laoreet in, condimentum at augue.
                                    Suspendisse viverra scelerisque lacus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">
                                <img src="../assets/img/achievment-3.jpg" class="card-img-top my-hover-img"
                                    alt="Heart-shaped waffle" width="400" height="225" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Best Food Blog of 2018</h3>
                                <p class="card-text">Praesent quam magna, varius in laoreet in, condimentum at augue.
                                    Suspendisse viverra scelerisque lacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!------------------ Sezione Testimonials ------------------>
        <div class="testimonials-section my-5">
            <div class="container">
                <h2 class="h5 text-center mb-5">TESTIMONIALS</h2>
                <p class="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius
                    ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</p>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card mb-4 text-center p-4">
                            <img src="../assets/img/Testimonials-1.jpg" class="rounded-circle mx-auto d-block mb-3"
                                alt="Jean Valdez" width="100" height="100" loading="lazy" decoding="async">
                            <div class="quote mb-0">
                                <p>Nulla vehicula urna vel velit porttitor, ac auctor sem efficitur.
                                    Praesent eleifend ante nec condimentum accumsan. Nam elit enim, rhoncus quis
                                    venenatis ut, tristique ac nisi. Duis pulvinar et magna et faucibus. Nullam eget
                                    nunc non felis auctor varius sit amet ac nunc.</p>
                                <footer class="quote-footer">Jean Valdez, <cite title="Company Name">XYZ
                                        CompanyName</cite></footer>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card mb-4 p-4 d-flex flex-row align-items-center testimonial-quote">
                            <img src="../assets/img/Avada-review-1.png" class="rounded-circle mr-3 testimonial-pic"
                                alt="Avada Food Review logo" width="428" height="452" loading="lazy" decoding="async">
                            <div class="quote mb-0 flex-grow-1">
                                <p>One of the best food blog of 2018 about organic food and unique recipes.
                                    Proin vel iaculis turpis.</p>
                                <footer class="quote-footer">Avada Food Mag, <cite title="January 2019">January
                                        2019</cite></footer>
                            </div>
                        </div>
                        <div class="card mb-4 p-4 d-flex flex-row align-items-center testimonial-quote">
                            <img src="../assets/img/Avada-review-2.webp" class="rounded-circle mr-3 testimonial-pic"
                                alt="Avada Food Review badge" width="237" height="226" loading="lazy" decoding="async">
                            <div class="quote mb-0 flex-grow-1">
                                <p>Best blog for American Recipes and very good for learning cookings for
                                    anyone. Praesent id tempus sem.</p>
                                <footer class="quote-footer">Food Blog Hunt, <cite title="January 2019">January
                                        2019</cite></footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!------------------ Sezione Our Writers ------------------>
        <div class="writers-section my-5">
            <div class="container">
                <h2 class="text-center mb-5">OUR WRITERS</h2>
                <p class="text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius
                    ante. Sed quis luctus eros. Phasellus rutrum laoreet leo in consequat.</p>
                <div class="row text-center">
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">

                                <img src="../assets/img/Wayne-Barnett.jpg" class="card-img-top my-hover-img"
                                    alt="Wayne Barnett" width="400" height="429" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Wayne Barnett</h3>
                                <p class="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">

                                <img src="../assets/img/Angela-Caroll.jpg" class="card-img-top my-hover-img"
                                    alt="Angela Caroll" width="400" height="429" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Angela Caroll</h3>
                                <p class="card-text">Chief Editor</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">

                                <img src="../assets/img/Walter-Gordon.jpg" class="card-img-top my-hover-img"
                                    alt="Walter Gordon" width="400" height="429" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Walter Gordon</h3>
                                <p class="card-text">Head of Recipes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">

                                <img src="../assets/img/Angela-Lopez.jpg" class="card-img-top my-hover-img"
                                    alt="Angela Lopez" width="400" height="429" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Angela Lopez</h3>
                                <p class="card-text">Junior Chef</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">

                                <img src="../assets/img/Scott-Estrada.jpg" class="card-img-top my-hover-img"
                                    alt="Scott Estrada" width="400" height="429" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Scott Estrada</h3>
                                <p class="card-text">Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="card my-hover-card">
                            <div class="img-container">

                                <img src="../assets/img/Barbara-Ramos.jpg" class="card-img-top my-hover-img"
                                    alt="Barbara Ramos" width="400" height="429" loading="lazy" decoding="async">
                            </div>
                            <div class="card-body">
                                <h3 class="h5 card-title">Barbara Ramos</h3>
                                <p class="card-text">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!------------------ Sezione We Are Hiring ------------------>
        <div class="we-are-hiring-section">
            <div class="container text-center">
                <h2 class="py-4">We Are Hiring! Let's Get in Touch.</h2>
                <p class="pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in varius ante. Sed
                    quis luctus
                    eros. Phasellus rutrum laoreet leo in consequat.</p>
                <router-link :to="{ name: 'contacts' }" class="btn btn-primary">Contact Us</router-link>
                <p class="pt-3">Include your resume and portfolio link in the e-mail</p>
            </div>
        </div>
    </div>
</template>

<!-- -------------------------------------------------STYLE STYLE STYLE STYLE STYLE STYLE STYLE STYLE STYLE STYLE STYLE ---------------------------------------------------- -->

<style scoped lang="scss">
    /* ------------------------------ TAGS GENERAlI ------------------------------ */
    .writers-section h2 {
        font-family: 'Playfair Display', serif;
        color: #333;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #666;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: black;
    }

    /* ------------------------------ HOVER ------------------------------ */

    .my-hover-card {
        overflow: hidden;
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }

    .my-hover-img {
        transition: transform 0.6s ease-in-out;
        width: 100%;
        height: auto;
    }

    .img-container:hover .my-hover-img {
        transform: scale(1.1);
    }

    .img-container-hero::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(250, 146, 0, 0.485);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .img-container-hero:hover::after {
        opacity: 1;
        transition: 1s;
    }

    /* ------------------------------ HOVER end------------------------------ */

    /* ------------------------------ SEZIONE HERO -------------------------------- */
    .hero-section {
        position: relative;
        background-image: url("../assets/img/Avada-AboutUs-Background.png");
        background-color: #67615A;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 400px;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: white;
    }

    .overlay h1 {
        font-family: 'Playfair Display', serif;
        font-size: 3rem;
        margin-bottom: 10px;
    }

    .overlay p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        color: white;
    }

    /* ------------------------------ Sezione con griglia di immagini a sx e testo a dx ----------------------- */

    .inner {
        position: relative;
        top: -100px;
    }

    /* ------------------------------ Sezione con icone FONTAWSOME e testo ----------------------------------------------- */

    .icon-text {
        display: flex;
        align-items: flex-start;
        text-align: left;
        margin-bottom: 20px;
    }

    .custom-icon {
        font-size: 2em;
        margin-right: 15px;
        color: #4e4a45;
    }

    .icon-text h3 {
        font-family: 'Playfair Display', serif;
        font-weight: bold;
        margin-bottom: 5px;
        margin-top: 0;
        font-size: 1.2em;
        display: flex;
        align-items: center;
        border-bottom: 1px solid grey;
        padding-bottom: 5px;
    }

    /* ------------------------------ ACHIEVEMENTS ------------------ */

    .achievements-section {
        background-image: url("../assets/img/Avada-AboutUs-Background-BIG.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 50px 0;
    }

    .card {
        border: none;
        overflow: hidden;

    }




    .card-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.25rem;
        margin-bottom: 0.75rem;
    }

    p.card-text {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #666;
    }

    /* ------------------------------ Sezione Testimonials ----------------------------------------------- */

    .testimonials-section {
        background-color: #f9f9f9;
        padding: 50px 0;
    }

    .card {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }

    .testimonial-pic {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 15px;
    }

    .quote footer {
        margin-top: 15px;
        font-size: 0.9em;
        color: #757575; /* il #777 su bianco dava 4,47:1 */
    }

    .text-center .card {
        text-align: left;
    }

    /* ------------------------------ Sezione Our Writers ----------------------------------------------- */

    .writers-section {
        padding: 50px 0;
    }

    /* ------------------------------ Sezione We Are Hiring ----------------------------------------------- */

    .we-are-hiring-section {
        background-image: url("../assets/img/Avada-AboutUs-Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 150px 0;
        color: #333;
    }

    .we-are-hiring-section h2 {
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .we-are-hiring-section p {
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        margin-bottom: 20px;
    }

    .we-are-hiring-section .btn {
        /* arancio scuro: con il testo bianco il #fc7523 dava 2,7:1, questo 4,6:1 */
        background-color: #c8500a;
        color: white;
        padding: 10px 20px;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
    }

    .we-are-hiring-section .btn:hover {
        background-color: #a94207;
    }
</style>