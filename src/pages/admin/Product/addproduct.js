import NavBarAdmin from "../../../components/navbaradmin";
import productAPI from "../../../api/productAPI";
import firebase from "../../../firebase";
import { $$ } from '../../../untils';
const AddProduct={
    render(){
        return /*html */`
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">product</a>
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
                                    <h4 class="card-title">Thêm product</h4>
                                </div>
                                <div class="card-body">
                                    <form id="add-product">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Mã product (disabled) </label>
                                                    <input type="text" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Tên product</label>
                                                    <input type="text" class="form-control" id="name" name="name_product"
                                                        >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Giá tiền</label>
                                                    <input type="number" name="price" class="form-control" id="price"
                                                        >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Giá khuyến mãi</label>
                                                    <input type="number" class="form-control" name="promotional"
                                                        id="promotional">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Mô tả ngắn</label>
                                                    <textarea name="introduction" cols="30" id="introduction" rows="10"
                                                        class="form-control border  product" ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Mô tả chi tiết</label>
                                                    <textarea name="content" cols="30" rows="10" id="content"
                                                        class="form-control border  product" ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                             <div class="row">
                                            <div class="col-md-12">
                                                <div class="">
                                                    <label class="bmd-label-floating">Mô tả chi tiết</label>
                                                    <input type="file" class="form-control" name="promotional"
                                                    id="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">image product</label>
                                                    <select name="category" id="imageId" class="form-control" >
                                                        <option value="1">1</option>
                                                        <option value="2">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">classify product</label>
                                                    <select name="category" id="classify" class="form-control" >
                                                        <option value="0">Male</option>
                                                        <option value="1">Female</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Size product</label>
                                                    <select name="category" id="size" class="form-control" >
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Category product</label>
                                                    <select name="category" id="category" class="form-control" >
                                                        <option value="1">1</option>
                                                        <option value="2">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" class="btn btn-primary pull-left">Add
                                            product</button>
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
    afterRender(){
        
     $$('#add-product').addEventListener('submit',(e)=>{
        e.preventDefault();
        const img = $$('#image').files[0];
        let storageRef = firebase.storage().ref(`images/${img.name}`);
        // console.log(storageRef);
        storageRef.put(img).then(()=>{
            storageRef.getDownloadURL().then((url=>{
                const product ={
                    id: Math.round(Math.random()*7000),
                    name: $$('#name').value,
                    categoryId: $$('#category').value,
                    content : $$('#content').value,
                    price: $$('#price').value,
                    sale: $$('#promotional').value,
                    introduce: $$('#introduction').value,
                    images: [url],
                    size: $$('#size').value,
                    classify:  $$('#classify').value,
                }
                // console.log(product);
               productAPI.add(product);
            }))
            
        })
   
    
    });
    }
}
export default AddProduct;