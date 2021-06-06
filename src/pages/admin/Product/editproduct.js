import NavBarAdmin from "../../../components/navbaradmin";
import {
    useParams,
    $$,
    reRender
} from '../../../untils';
import productAPI from "../../../api/productAPI";
import categoryAPI from "../../../api/categoryAPI";
import firebase from "../../../firebase";
import Adminproducts from "./listproducts";
const EitProduct = {
    async render() {
        const {
            id
        } = useParams();
        const {
            data: result
        } = await productAPI.read(id);
        // console.log(result.album);
        const imageAlbums = result.album.map((img) => {
            return /*html*/ `
            <img src="${img}" class="w-32 h-32 object-contain albums">
            `;
        }).join("");
        // console.log(imageAlbums);
        const {
            data: cate
        } = await categoryAPI.editProduct(result.categoryId);
        // console.log(cate);
        const categories = cate.map(element => {
            return /*html*/ `
            <option value="${element.id}">${element.name}</option>
            `;
        }).join("");
        // console.log(cate);
        return /*html */ `
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
                                                    <label class="bmd-label-floating">ID product (disabled) </label>
                                                    <input type="text" value="${result.id}" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Name product</label>
                                                    <input type="text" class="form-control"  value="${result.name}"  id="name" name="name_product"
                                                        >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Price</label>
                                                    <input type="number"  value="${result.price}"  name="price" class="form-control" id="price"
                                                        >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Promotional</label>
                                                    <input type="number"  value="${result.sale}"  class="form-control" name="promotional"
                                                        id="promotional">
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Introduction</label>
                                                    <textarea name="introduction" cols="30" id="introduction" rows="10"
                                                        class="form-control border  product" > ${result.introduce} </textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Content</label>
                                                    <textarea name="content" cols="30" rows="10" id="content"
                                                        class="form-control border  product" > ${result.content}</textarea>
                                                </div>
                                            </div>
                                        </div>
                                             <div class="row">
                                            <div class="col-md-12">
                                                <div class="">
                                                    <label class="bmd-label-floating">Image</label>
                                                    <img src="${result.imageIntro}" alt="" class=" h-40"  id="image-old">
                                                    <input type="file" class="form-control"   name="promotional"
                                                    id="image-new">
                                                </div>
                                            </div>
                                         </div>
                                         <div class="row">
                                            <div class="col-md-12">
                                                <div class="">
                                                    <label class="bmd-label-floating">Album</label>
                                                    <div class= "flex justify-between items-center">
                                                    ${imageAlbums}
                                                    </div>
                                                    <input type="file" class="form-control album" multiple name="promotional"
                                                    id="album1" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Classify product</label>
                                                   <div class="flex justify-start items-center gap-3">
                                                   <input type="radio" name="classify" value="male" id="male" checked>
                                                   <label for="male" class=" py-1 classify text-gray-800"> Male
                                                   </label>
                                                   <input type="radio" name="classify" value="female" id="famale" >
                                                    <label for="famale" class=" py-1 classify text-gray-800"> Female
                                                    </label>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Size product</label>
                                                    <div class="flex justify-between items-center">
                                                    <input type="checkbox" name="size" value="XXS" id="XXS" checked>
                                                    <label for="XXS" class=" py-1  text-gray-800"> XXS
                                                    </label>
                                                    <input type="checkbox" name="size" value="XS" id="XS" >
                                                    <label for="XS" class=" py-1  text-gray-800">
                                                        XS </label>
                                                    <input type="checkbox" name="size" value="XS-S" id="XS-S" >
                                                    <label for="XS-S" class=" py-1  text-gray-800"> XS-S
                                                    </label>
                                                    <input type="checkbox" name="size" value="S" id="S" >
                                                    <label for="S" class=" py-1  text-gray-800"> S
                                                    </label>
                                                    <input type="checkbox" name="size" value="M" id="M" >
                                                    <label for="M" class=" py-1  text-gray-800"> M
                                                    </label>
                                                    <input type="checkbox" name="size" value="M-L" id="M-L" >
                                                    <label for="M-L" class=" py-1  text-gray-800">
                                                        M-L </label>
                                                    <input type="checkbox" name="size" value="L" id="L" >
                                                    <label for="L" class=" py-1  text-gray-800"> L
                                                    </label>
                                                    <input type="checkbox" name="size" value="XL" id="XL" >
                                                    <label for="XL" class=" py-1  text-gray-800">
                                                        XL </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Category product</label>
                                                    <select name="category" id="category" class="form-control" required>
                                                    <option value="${result.categoryId}">${result.category.name}</option>
                                                      ${categories}
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
    async afterRender() {

        const {
            id
        } = useParams();
        const {
            data: result
        } = await productAPI.read(id);
        // console.log(result);
        $$('#form-update-product').addEventListener('submit', (e) => {
            e.preventDefault();
            const album = $$('.album');
            const size = $$('[name="size"]');
            const sizes = [];
            var imgIntro = '';
            var albums = [];
            const classify = $$('[name="classify"]');
            const sex = [];
            classify.forEach(element => {
                if (element.checked) {
                    sex.push(element.value);
                }
            });
            size.forEach(element => {
                if (element.checked) {
                    sizes.push(element.value);
                }
            });
            if ($$('#image-new').value == '') {
                imgIntro = $$('#image-old').src
                if (album.value == '') {
                    const product = {
                        id: Math.round(Math.random() * 700000),
                        name: $$('#name').value,
                        categoryId: $$('#category').value,
                        content: $$('#content').value,
                        price: $$('#price').value,
                        sale: $$('#promotional').value,
                        introduce: $$('#introduction').value,
                        imageIntro: imgIntro,
                        album: result.album,
                        size: sizes,
                        classify: sex.join(""),
                    }

                    // console.log(product);
                    productAPI.update(id, product);
                    alert("Update product success");
                    window.location.hash = `/listproducts`;
                    reRender(Adminproducts, '#list-product');

                } else {
                    addImg();
                }
            } else {
                // console.log(2);
                imgIntro = ($$('#image-new').files[0]);
                let storageRef = firebase.storage().ref(`images/${imgIntro.name}`)
                storageRef.put(imgIntro).then(() => {
                    storageRef.getDownloadURL().then((url) => {
                        imgIntro = url;
                        console.log(imgIntro);
                        if (album.value == '') {
                            console.log(3);
                            const product = {
                                id: Math.round(Math.random() * 700000),
                                name: $$('#name').value,
                                categoryId: $$('#category').value,
                                content: $$('#content').value,
                                price: $$('#price').value,
                                sale: $$('#promotional').value,
                                introduce: $$('#introduction').value,
                                imageIntro: imgIntro,
                                album: result.album,
                                size: sizes,
                                classify: sex.join(""),
                            }
                            // console.log(product);
                            productAPI.update(id, product);
                            alert("Update product success");
                            window.location.hash = `/listproducts`;
                            reRender(Adminproducts, '#list-product');
                        } else {
                            console.log(4);
                            addImg();
                        }
                    })
                })
            }
            let index = 0;
            async function addImg() {
                for (var i = 0; i < album.files.length; i++) {
                    var imageFile = album.files[i];
                    await uploadImageAsPromise(imageFile);
                    index++;
                    if (index == album.files.length) {
                        const product = {
                            id: Math.round(Math.random() * 700000),
                            name: $$('#name').value,
                            categoryId: $$('#category').value,
                            content: $$('#content').value,
                            price: $$('#price').value,
                            sale: $$('#promotional').value,
                            introduce: $$('#introduction').value,
                            imageIntro: imgIntro,
                            album: albums,
                            size: sizes,
                            classify: sex.join(""),
                        }
                        // console.log(id, product);
                        productAPI.update(id, product);
                        alert("Update product success");
                        window.location.hash = `/listproducts`;
                        reRender(Adminproducts, '#list-product');
                    }
                }
            }

            function uploadImageAsPromise(imageFile) {
                // console.log(imageFile);
                return new Promise(function (resolve, reject) {
                    var storageRef = firebase.storage().ref(`images/${imageFile.name}`);
                    //Upload file
                    var task = storageRef.put(imageFile);
                    //Update progress bar
                    task.on('state_changed',
                        function progress(snapshot) {
                            var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                            // uploader.value = percentage;
                        },
                        function error(err) {

                        },
                        async function complete() {

                            const imageURL = await task.snapshot.ref.getDownloadURL();
                            albums.push(imageURL)
                            resolve(imageURL)
                        }
                    );
                })
            }
        });
    }

}


export default EitProduct;