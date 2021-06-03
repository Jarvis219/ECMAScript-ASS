import NavBarAdmin from "../../../components/navbaradmin";
import ListCategoryChild from "../../../components/listcategoryChild";
const AdminCategory = {
    async render() {
        return /*html*/ `
        ${NavBarAdmin.render()}
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">CATEGORY</a>
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
                                    <h4 class="card-title ">CATEGORY</h4>
                                </div>
                                <div class="card-body" >
                                    <div class="table-responsive" id="list-product">
                                    ${await ListCategoryChild.render()}
                                </table>
                             </div>
                                </div>
                                <div>
                                    <a href="/#/addcategory"><button type="submit"
                                            class="btn btn-primary pull-left ml-4">ADD CATEGORY</button></a>
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
        `;
    },
    async afterRender() {
        return `
        ${await ListCategoryChild.afterRender()}
       `;
    },
}

export default AdminCategory;