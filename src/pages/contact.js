import Header from '../components/header';
import Footer from '../components/footer';
const Contact = {
    render() {
        return /*html*/`
        ${Header.render()}
        <div class="container mx-auto md:px-16 pt-24">
                <div>
                    <div class="my-8 ml-2 md:ml-0">
                        <a href="./index.html"><span><i class="fas fa-home"></i></span>
                            <span style="font-family: FontAwesome;">Home > <span
                                    class="text-gray-600">Contact</span></span>
                            </i></a>
                    </div>
                    <div class="  grid  md:grid-cols-2 gap-10 ">
                        <aside class="w-auto wow slideInRight" data-wow-duration=" 2s">
                            <div>
                                <div class=" pb-4 font-medium text-xl">
                                    <h5>CONTACT INFO</h5>
                                </div>
                                <div>
                                    <span>
                                        <i class="fas fa-map-marker-alt text-red-500"></i> Address
                                    </span>
                                    <p style="font-family: FontAwesome;" class="text-gray-600 pt-1">160 Pennsylvania Ave
                                        NW,
                                        Washington, Castle, PA
                                        16101-5161</p>
                                </div>
                                <div class="py-3">
                                    <span>
                                        <i class="fas fa-phone-alt text-red-500"></i> Phone
                                    </span>
                                    <p style="font-family: FontAwesome;" class="text-gray-600 pt-1">125-711-811 |
                                        125-668-886
                                    </p>
                                </div>
                                <div>
                                    <span><i class="fas fa-headphones text-red-500"></i> Support</span>
                                    <p style="font-family: FontAwesome;" class="text-gray-600 pt-1">
                                        Support.photography@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <div class="mt-8 mb-4 font-medium text-xl">
                                    <h5>SEND MESSAGE</h5>
                                </div>
                                <div>
                                    <form action="#">
                                        <input
                                            class="block w-full border border-gray-400 pl-4 rounded-lg h-12 my-4 outline-none"
                                            type="text" name="" id="" placeholder="Name*" required>
                                        <input
                                            class="block w-full border border-gray-400 pl-4 rounded-lg h-12 my-4 outline-none"
                                            type="email" name="" id="" placeholder="Email*" required>
                                        <input
                                            class="block w-full border border-gray-400 pl-4 rounded-lg h-12 my-4 outline-none"
                                            type="url" name="" id="" placeholder="Website*" required>
                                        <textarea
                                            class="block w-full border border-gray-400 pl-4 pt-2 rounded-lg my-4  outline-none"
                                            name="" id="" cols="30" rows="10" maxlength="300"
                                            placeholder="Messange"></textarea>
                                        <input
                                            class="bg-red-600 text-white px-4 py-2 rounded-full outline-none hover:bg-gray-400 hover:text-red-600"
                                            type="submit" name="" id="" value="SEND MESSAGE">
                                    </form>
                                </div>
                            </div>
                        </aside>
                        <!-- end contact -->
                        <section class="wow bounceInLeft" data-wow-duration=" 2s">
                            <iframe
                                src="
                https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.3734198500824!2d-77.03871848470268!3d38.897676279570575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2zTmjDoCBUcuG6r25n!5e1!3m2!1svi!2s!4v1601996159427!5m2!1svi!2s"
                                width="600" height="780" frameborder="0" style="border:0;" allowfullscreen=""
                                aria-hidden="false" tabindex="0" class=" w-full  "></iframe>
                        </section>
                        <!-- end ggmap -->
                    </div>
                </div>
            </div>
            <!-- end content -->
            <section class="instagram md:flex my-16 ">
            <div class="relative group overflow-hidden">
                <a href="#"><img src="./images/instagram/insta-1.jpg" alt="" class="w-screen object-cover"></a>
                <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                <div
                class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                <span><i class="fab fa-instagram block"></i><br>
                    <a href="#">@ ashion_shop</a>
                </span>
            </div>
                </div>
            </div>
            <div class="relative group overflow-hidden">
                <a href="#"><img src="./images/instagram/insta-2.jpg" alt="" class="w-screen object-cover"></a>
                <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                <div
                class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                <span><i class="fab fa-instagram block"></i><br>
                    <a href="#">@ ashion_shop</a>
                </span>
            </div>
                </div>
            </div>
            <div class="relative group overflow-hidden">
                <a href="#"><img src="./images/instagram/insta-3.jpg" alt="" class="w-screen object-cover"></a>
                <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                <div
                class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                <span><i class="fab fa-instagram block"></i><br>
                    <a href="#">@ ashion_shop</a>
                </span>
            </div>
                </div>
            </div>
            <div class="relative group overflow-hidden">
                <a href="#"><img src="./images/instagram/insta-4.jpg" alt="" class="w-screen object-cover"></a>
                <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                <div
                class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                <span><i class="fab fa-instagram block"></i><br>
                    <a href="#">@ ashion_shop</a>
                </span>
            </div>
                </div>
            </div>
            <div class="relative group overflow-hidden">
                <a href="#"><img src="./images/instagram/insta-5.jpg" alt="" class="w-screen object-cover"></a>
                <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                <div
                class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                <span><i class="fab fa-instagram block"></i><br>
                    <a href="#">@ ashion_shop</a>
                </span>
            </div>
                </div>
            </div>
            <div class="relative group overflow-hidden">
                <a href="#"><img src="./images/instagram/insta-6.jpg" alt="" class="w-screen object-cover"></a>
                <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                <div
                class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                <span><i class="fab fa-instagram block"></i><br>
                    <a href="#">@ ashion_shop</a>
                </span>
            </div>
                </div>
            </div>
        </section>
            <!-- end section instagram -->
        ${Footer.render()}
        `;
    }
}
export default Contact;