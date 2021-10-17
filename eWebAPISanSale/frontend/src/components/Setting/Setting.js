import React from 'react'

export default function Setting() {
    return (
        <>
            <div class="row">
          <div class="col-md-4">
            <div class="card card-user">
              <div class="image">
                <img src="../assets/img/damir-bosnjak.jpg" alt="..."/>
              </div>
              <div class="card-body">
                <div class="author">
                  <a href="#">
                    <img class="avatar border-gray" src="../assets/img/mike.jpg" alt="..."/>
                    <h5 class="title">Name</h5>
                  </a>
                  <p class="description">
                    @chetfaker
                  </p>
                </div>
                <p class="description text-center">
                  "I like the way you work it
                  No diggity 
                  I wanna bag it up"
                </p>
              </div>
              <div class="card-footer">
                
                <div class="button-container">
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-6 ml-auto">
                      <h5>12<small>Files</small></h5>
                    </div>
                    <div class="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                      <h5>2GB<small>Used</small></h5>
                    </div>
                    <div class="col-lg-3 mr-auto">
                      <h5>24,6$<small>Spent</small></h5>
                    </div>
                  </div>
                </div>
              </div>
              </div></div>
            
          <div class="col-md-8">
            <div class="card card-user">
              <div class="card-header">
                <h5 class="card-title">Edit Product</h5>
              </div>
              <div class="card-body">
                <form>
                <div class="row">
                <div class="col-md-2 pr-1">
                      <div class="form-group">
                        <label>Id</label>
                        <input type="text" class="form-control" placeholder="Last Name" value=""/>
                      </div>
                    </div>
                <div class="col-md-9 pr-1">
                      <div class="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input type="text" class="form-control" placeholder="Last Name" value=""/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2 pr-1">
                      <div class="form-group">
                        <label>Giá Gốc </label>
                        <input type="text" class="form-control" disabled="" placeholder="Giá Gốc" value=""/>
                      </div>
                    </div>
                    <div class="col-md-4 px-1">
                      <div class="form-group">
                        <label>Giá Bán</label>
                        <input type="text" class="form-control" placeholder="Giá Bán" value=""/>
                      </div>
                    </div>
                    <div class="col-md-3 pl-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Lượng Truy Cập</label>
                        <input type="text" class="form-control" placeholder="Giá gốc"/>
                      </div>
                    </div>
                    <div class="col-md-3 pl-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Hàng Tồn</label>
                        <input type="text" class="form-control" placeholder="Giá bán"/>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Link Sản Phẩm</label>
                        <input type="text" class="form-control" placeholder="link" value=""/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label>Meta </label>
                        <input type="text" class="form-control" placeholder="meta" value=""/>
                      </div>
                    </div>
                    <div class="col-md-4 px-1">
                      <div class="form-group">
                        <label>KeyWord</label>
                        <input type="text" class="form-control" placeholder="keyword" value=""/>
                      </div>
                    </div>
                    <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label>Tag</label>
                        <input type="number" class="form-control" placeholder=""/>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Mô tả</label>
                        <textarea class="form-control textarea">Oh so, your weak rhyme You doubt I'll bother, reading into it</textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="update ml-auto mr-auto">
                      <button type="submit" class="btn btn-primary btn-round">Update Profile</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
