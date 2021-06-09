import NavBarAdmin from "../../../components/navbaradmin";
import ListCartChild from "../../../components/listcartsChild";
import {
    useParams
} from "../../../untils";
import {
    cartAPI
} from "../../../api/cartAPI";
import {
    $$,
    reRender
} from "../../../untils";

const EditCart = {
    async render() {
        const {
            id
        } = useParams();
        const {
            data
        } = await cartAPI.read(id);
        const {
            data: sizes
        } = await cartAPI.listCartSize(data.productId);
        // console.log(sizes);
        var sizePro = data.size;
        // console.log(sizePro);
        const arrSize = [];
        const sizeCart = sizes.size.forEach(element => {
            if (element != sizePro) {
                arrSize.push(element);
            }
        });
        const totalSize = arrSize.map(element => {
            return /*html*/ `
                <option value="${element}">${element}</option>
                `;
        }).join("");
        return /*html*/ `
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">Cart</a>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="card">
                                <div class="card-header card-header-primary">
                                    <h4 class="card-title">Edit Cart</h4>
                                </div>
                                <div class="card-body">
                                    <form id="edit-cart">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">ID Cart (disabled) </label>
                                                    <input type="text" class="form-control" id="id-cart" value="${data.id}" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Name Cart</label>
                                                    <input type="text" class="form-control" value="${data.name}" id="name-cart" name="name_cart"
                                                    required >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">User</label>
                                                    <input type="text" class="form-control" value="${data.user}" id="user-cart" name=""
                                                    required >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Price</label>
                                                    <input type="number"  min=1 class="form-control" value="${data.price}" id="price-cart" name=""
                                                    required >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Amount</label>
                                                    <input type="number"  min=1 class="form-control" value="${data.amount}" id="amount-cart" name=""
                                                    required >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                        <div class="col-md-12   ">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Category product</label>
                                                <select name="category" id="size-cart" class="form-control" required>
                                                <option value="${data.size}">${data.size}</option>
                                                 ${totalSize}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                        <button type="submit" class="btn btn-primary pull-left">Update
                                            Cart</button>
                                    </form>
                                </div>
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
    </div>
    <!--   Core JS Files   -->




        `;

    },
    async afterRender() {
        const {
            id
        } = useParams();
        const {
            data
        } = await cartAPI.read(id);
        const {
            data: sizes
        } = await cartAPI.listCartSize(data.productId);
        // console.log(data.image);
        $$('#edit-cart').addEventListener('submit', async (e) => {
            e.preventDefault();
            const editCart = {
                id: id,
                productId: sizes.id,
                user: $$('#user-cart').value,
                name: $$('#name-cart').value,
                image: data.image,
                price: $$('#price-cart').value,
                sale: data.sale,
                size: $$('#size-cart').value,
                totalmoney: (Number($$('#price-cart').value) - Number(data.sale)) * $$('#amount-cart').value,
                amount: $$('#amount-cart').value,
                status: data.status,
                days: data.days,
            }
            // console.log(editCart);
            await cartAPI.edit(id, editCart);
            alert('Update cart success')
            window.location.hash = `/listcarts`;
            await reRender(ListCartChild, '#list-cart');

        })
    }
}
export default EditCart;