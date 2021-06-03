import NavBarAdmin from "../../../components/navbaradmin";
import productAPI from "../../../api/productAPI";
import firebase from "../../../firebase";
import categoryAPI from "../../../api/categoryAPI";
import {
    $$
} from '../../../untils';
const AddProduct = {
    async render() {
        const {
            data: result
        } = await categoryAPI.list();
        // console.log(result);
        const cate = result.map(element => {
            return /*html*/ `
           <option value="${element.id}">${element.name}</option>
           `;
        }).join("");
        return /*html */ `
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
                                                    <label class="bmd-label-floating">Name product</label>
                                                    <input type="text" class="form-control" id="name" name="name_product"
                                                    required >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Price</label>
                                                    <input type="number" name="price" class="form-control" id="price"
                                                    required >
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Promotional</label>
                                                    <input type="number" class="form-control" name="promotional"
                                                        id="promotional" required>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Introduction</label>
                                                    <textarea name="introduction" cols="30" id="introduction" rows="10"
                                                        class="form-control border  product" required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Content</label>
                                                    <textarea name="content" cols="30" rows="10" id="content"
                                                        class="form-control border  product" required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                             <div class="row">
                                            <div class="col-md-12">
                                                <div class="">
                                                    <label class="bmd-label-floating">ImageIntro</label>
                                                    <input type="file" class="form-control" name="promotional"
                                                    id="image" required>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="">
                                                    <label class="bmd-label-floating">Album</label>
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="" required>
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class=" mt-1">
                                                <label class="bmd-label-floating"> </label>
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="" required>
                                                    <input type="file" class="form-control album" name="promotional"
                                                    id="" required>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">classify product</label>
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
                                                      ${cate}
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
    afterRender() {
        $$('#add-product').addEventListener('submit', (e) => {
            e.preventDefault();
            const size = $$('[name="size"]');
            const sizes = [];
            size.forEach(element => {
                if (element.checked) {

                    sizes.push(element.value);
                }
            });
            const classify = $$('[name="classify"]');
            const sex = [];
            classify.forEach(element => {
                if (element.checked) {
                    sex.push(element.value);
                }
            });

            // console.log(sex);
            const album = $$('.album');
            const albums = [];
            const urls = [];
            album.forEach(element => {
                albums.push(element.files[0]);
            });
            // console.log(albums);
            const img = $$('#image').files[0];
            let storageRef = firebase.storage().ref(`images/${img.name}`);
            let storageRef_bl_0 = firebase.storage().ref(`images/${albums[0].name}`);
            let storageRef_bl_1 = firebase.storage().ref(`images/${albums[1].name}`);
            let storageRef_bl_2 = firebase.storage().ref(`images/${albums[2].name}`);
            let storageRef_bl_3 = firebase.storage().ref(`images/${albums[3].name}`);
            storageRef.put(img).then(() => {
                const albumsImg = [];
                storageRef.getDownloadURL().then((url => {
                        urls.push(url);
                    }))
                    .then(() => {
                        storageRef_bl_0.put(albums[0]).then(() => {
                                storageRef_bl_0.getDownloadURL().then((url_0) => {
                                    albumsImg.push(url_0);
                                    console.log(1);
                                })
                            })
                            .then(() => {
                                storageRef_bl_1.put(albums[1]).then(() => {
                                        storageRef_bl_1.getDownloadURL().then((url_1) => {
                                            albumsImg.push(url_1);
                                            console.log(2);
                                        })
                                    })
                                    .then(() => {
                                        storageRef_bl_2.put(albums[2]).then(() => {
                                                storageRef_bl_2.getDownloadURL().then((url_2) => {
                                                    albumsImg.push(url_2);
                                                    console.log(3);
                                                })
                                            })
                                            .then(() => {
                                                storageRef_bl_3.put(albums[3]).then(() => {
                                                    storageRef_bl_3.getDownloadURL().then((url_3) => {
                                                            albumsImg.push(url_3);
                                                            console.log(4);
                                                        })
                                                        .then(async () => {
                                                            console.log(5);
                                                            console.log('1: ' + albumsImg);
                                                            const urlImg = urls.toString();
                                                            const product = {
                                                                id: Math.round(Math.random() * 700000),
                                                                name: $$('#name').value,
                                                                categoryId: $$('#category').value,
                                                                content: $$('#content').value,
                                                                price: $$('#price').value,
                                                                sale: $$('#promotional').value,
                                                                introduce: $$('#introduction').value,
                                                                imageIntro: urlImg,
                                                                album: albumsImg,
                                                                size: sizes,
                                                                classify: sex.join(""),
                                                            }
                                                            // console.log(product);
                                                            await productAPI.add(product);
                                                            alert("Add product success");
                                                        })
                                                })

                                            })

                                    })

                            })

                    })
            })
        });
    }
}
export default AddProduct;