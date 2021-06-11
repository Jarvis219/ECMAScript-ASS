import NavBarAdmin from "../../../components/navbaradmin";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddPost = {
    render() {
        return /*html */ `
            ${NavBarAdmin.render()}
            <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <a class="navbar-brand uppercase" href="javascript:;">post</a>
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
                                <h4 class="card-title uppercase">Add post</h4>
                            </div>
                            <div class="card-body">
                                <form id="add-infor">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">ID (disabled)</label>
                                                <input type="text" class="form-control" disabled>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Number Phone</label>
                                                <input type="tel" class="form-control" id="phone"
                                                    name="post_phone" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Address</label>
                                                <input type="text" class="form-control" id="address"
                                                    name="post_address" required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Link google map</label>
                                                <input type="text" class="form-control" id="maps" name="link_map" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Address</label>
                                                <div  id="editor"><p></p></div
                                                
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <button type="submit" class="btn btn-primary pull-left uppercase" name="submit">add post</button>
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
        `;

    },
    afterRender() {
        ClassicEditor
            .create(document.querySelector('#editor'))
            .then(editor => {
                window.editor = editor;
            })
            .catch(error => {
                console.error('There was a problem initializing the editor.', error);
            });
    }
}
export default AddPost;