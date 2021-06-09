import NavBarAdmin from "../../../components/navbaradmin";
import {
    ListInformationChild
} from "../../../components/listinformationsChild";
const ListInformation = {
    async render() {
        return /*html*/ `
                ${NavBarAdmin.render()}
                <div class="main-panel">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
            <div class="container-fluid">
                <div class="navbar-wrapper">
                    <a class="navbar-brand uppercase" href="javascript:;">information</a>
                </div>
            </div>
        </nav>
        <div  class="flex justify-center">
            <div class=" absolute mt-20 lg:mt-15 z-50">
            <a href="/#/addinformation"><button type="submit"
                    class="btn btn-primary pull-left ml-4 uppercase">ADD information</button></a>
            </div>
            </div>
         
        <!-- End Navbar -->
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card"  >
                            <div class="card-header card-header-primary">
                                <h4 class="card-title ">USER</h4>
                            </div>
                            <div class="card-body" >
                                <div class="table-responsive" id="list-user">
                                ${await ListInformationChild.render()}
                            </table>
                         </div>
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
        return `${await ListInformationChild.afterRender()}`;
    }

}
export default ListInformation;