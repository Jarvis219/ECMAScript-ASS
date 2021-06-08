import NavBarAdmin from "../../../components/navbaradmin";
import categoryAPI from "../../../api/categoryAPI";
import ListCategory from '../../../pages/admin/category/listcategory';
import {
    $$,
    useParams,
    reRender
} from "../../../untils";
const EditCategory = {

    async render() {
        const {
            id
        } = useParams();
        const {
            data: result
        } = await categoryAPI.edit(id);
        return /*html*/ `
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">Category</a>
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
                                    <h4 class="card-title">Edit Category</h4>
                                </div>
                                <div class="card-body">
                                    <form id="edit-category">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">ID Category (disabled) </label>
                                                    <input type="text" class="form-control" disabled>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Name Category</label>
                                                    <input type="text" class="form-control" value="${result.name}" id="name" name="name_category"
                                                    required >
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary pull-left">Edit
                                            Category</button>
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

        $$('#edit-category').addEventListener('submit', (e) => {
            e.preventDefault();
            const category = {
                id: id,
                name: $$('[name="name_category"]').value
            }
            if (categoryAPI.update(id, category)) {
                alert("Update category success")
                window.location.hash = `/listcategory`;
                reRender(ListCategory, '#table-category');

            } else {
                alert('Update category failures')
            }
        })
    }
}
export default EditCategory;