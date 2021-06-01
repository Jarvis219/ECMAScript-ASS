import NavBarAdmin from "../../../components/navbaradmin";
import { useParams, $$ } from '../../../untils';
import productAPI from "../../../api/productAPI";
const EitProduct ={
  async  render(){
    const { id } =  useParams();
    const {data:result} = await productAPI.read(id);
    // console.log(result);
        return  /*html */`
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">Update product</a>
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
                                    <h4 class="card-title">Update product</h4>
                                </div>
                                <div class="card-body">
                                    <form id="form-update-product">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Mã product (disabled) </label>
                                                    <input type="text" value="${result.id}" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Tên product</label>
                                                    <input type="text" class="form-control"  value="${result.name}"  id="name" name="name_product"
                                                        >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Giá tiền</label>
                                                    <input type="number"  value="${result.price}"  name="price" class="form-control" id="price"
                                                        >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Giá khuyến mãi</label>
                                                    <input type="number"  value="${result.sale}"  class="form-control" name="promotional"
                                                        id="promotional">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Mô tả ngắn</label>
                                                    <textarea name="introduction" cols="30" id="introduction" rows="10"
                                                        class="form-control border  product" > ${result.introduce} </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Mô tả chi tiết</label>
                                                    <textarea name="content" cols="30" rows="10" id="content"
                                                        class="form-control border  product" > ${result.content}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                             <div class="row">
                                            <div class="col-md-12">
                                            
                                                <div class="">
                                                    <label class="bmd-label-floating">image</label>
                                                    <img src="${result.images[0]}" alt="" class=" h-40" id="image-old">
                                                    <input type="file" class="form-control"  name="promotional"
                                                    id="image-new">
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

                                        <button type="submit" class="btn btn-primary pull-left">Update
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
    async afterRender(){
        const { id } =  useParams();
        const {data:result} = await productAPI.read(id);
        console.log(result);
        $$('#form-update-product').addEventListener('submit',(e)=>{
            e.preventDefault();
            var imgIntro ='';
            if($$('#image-new').value==''){
                imgIntro = $$('#image-old').src
            }else{
                imgIntro = $$('#image-new').value
            }
            console.log(imgIntro);
            const newProduct ={
                ...result,
                name :$$('#name').value,
                categoryId: $$('#category').value,
                content : $$('#content').value,
                price: $$('#price').value,
                sale: $$('#promotional').value,
                introduce: $$('#introduction').value,
                images: [imgIntro],
                size: $$('#size').value,
                classify:  $$('#classify').value
            }
           console.log(newProduct);
        });
    }
     
}


export default EitProduct;