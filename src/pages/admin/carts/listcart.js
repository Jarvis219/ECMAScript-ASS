import NavBarAdmin from "../../../components/navbaradmin";
import ListCartChild from "../../../components/listcartsChild";
import {
    $$
} from "../../../untils";

const ListCarts = {
    async render() {

        return /*html*/ `
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">ORDER</a>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card"  >
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title ">ORDER</h4>
                                </div>
                                <div class="card-body h-[600px] overflow-y-scroll" >
                                    <div class="table-responsive" id="list-cart">

                                    ${await ListCartChild.render()}
                                    
                                </table>
                             </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        <div id="product-detail" class="absolute mt-56 ml-24 hidden top-0  bg-gray-200 " style="width:80%">   
        <div class="pt-4 pb-8 px-8">
        <h3 class="uppercase text-center">Order detail</h3>
        <div class="grid grid-cols-10">
         <div class="col-span-4">
             <h5 class="text-center">Information</h5>
             <div class="flex gap-3 ">
                 <div class="font-bold">
                     <span >Name :</span><br>
                     <span>Email :</span><br>
                     <span>Phone :</span><br>
                     <span>Address :</span><br>
                     <span>Note :</span><br>
                     <span>Total :</span><br>
                     <span>Created at :</span>
                 </div>
                 <div class="w-64 ">
                 <div class="w-64 "> <span id="name"> </span></div>
                     <span  id="email">Email</span><br>
                     <span  id="phone">Phone</span><br>
                     <span  id="address">Address</span><br>
                     <span  id="note">Note</span><br>
                     <span  id="total">Total</span><br>
                     <span  id="times">Created at</span>
                 </div> 
             </div>
         </div>
         <div class="col-span-6">
             <h5  class="text-center">Information order</h5>
             <div class="h-80  overflow-y-scroll">
             <table class="table text-center ">
                 <thead class=" text-primary">
                     <tr>
                         <th>STT</th>
                         <th>PRODUCT</th>
                         <th>IMAGE</th>
                         <th>PRICE</th>
                         <th>SALE</th>
                         <th>AMOUNT</th>
                         <th>TOTAL</th>
                     </tr>
                 </thead>
                 <tbody id="tbody-list" class="h-64 overflow-y-scroll">
                     <tr>
                         <td>1</td>
                         <td>product</td>
                         <td>image</td>
                         <td>price</td>
                         <td>sale</td>
                         <td>amount</td>
                         <td>total</td>
                     </tr>
                     <tr>
                         <td colspan="5" >SUM</td>
                         <td colspan="2" id="sumproduct">total</td>
                     </tr>
                 </tbody>
             </table>
             </div>
             
         </div>
         
        </div>
        <div class="flex justify-end" id="close-product">
            <div class="">
            <button type="submit"
                    class="btn btn-primary pull-left ml-4 uppercase">OK</button>
            </div>
            </div>
        </div>
    </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <div class="copyright float-center">
                        &copy;
                        <script>
                            document.write(new Date().getFullYear())
                        </script>, made with <i class="material-icons">favorite</i> by
                        <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a> for a better web.
                    </div>
                </div>
            </footer>
        </div>
        `;
    },
    async afterRender() {
        $$('.nav li')[5].classList.add("active");
        return `${await ListCartChild.afterRender()}`
    }

}
export default ListCarts;