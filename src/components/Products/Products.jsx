import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import "./Product.css";
import Salad from '../../assets/salad.jpg'

function Products() {
  return (
    <div className="products">
      <MainLayout>
     
      <h1>Products</h1>
     

        <div>
          <div class="card-wrapper">
            <div class="card">
              <div class="image-wrapper">
                <img
                  src={Salad}
                  alt=""
                  class="image"
                />
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <h4>Folk-tastic Pennant</h4>
                </div>
                <div class="price">$19.99</div>
                <div class="description">
                  This is one of the coolest pennants money can buy. Hang it on
                  your wall, above your cool leather shoes, or even in your
                  Victorian-era bathroom.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image-wrapper">
                <img
                  src={Salad}
                  class="image"
                />
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <h4>Folk-tastic Pennant</h4>
                </div>
                <div class="price">$19.99</div>
                <div class="description">
                  This is one of the coolest pennants money can buy. Hang it on
                  your wall, above your cool leather shoes, or even in your
                  Victorian-era bathroom.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image-wrapper">
                <img
                 src={Salad}
                  alt=""
                  class="image"
                />
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <h4>Folk-tastic Pennant</h4>
                </div>
                <div class="price">$19.99</div>
                <div class="description">
                  This is one of the coolest pennants money can buy. Hang it on
                  your wall, above your cool leather shoes, or even in your
                  Victorian-era bathroom.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image-wrapper">
                <img
                  src={Salad}
                  alt=""
                  class="image"
                />
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <h4>Folk-tastic Pennant</h4>
                </div>
                <div class="price">$19.99</div>
                <div class="description">
                  This is one of the coolest pennants money can buy. Hang it on
                  your wall, above your cool leather shoes, or even in your
                  Victorian-era bathroom.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image-wrapper">
                <img
                  src={Salad}
                  alt=""
                  class="image"
                />
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <h4>Folk-tastic Pennant</h4>
                </div>
                <div class="price">$19.99</div>
                <div class="description">
                  This is one of the coolest pennants money can buy. Hang it on
                  your wall, above your cool leather shoes, or even in your
                  Victorian-era bathroom.
                </div>
              </div>
            </div>

            <div class="card">
              <div class="image-wrapper">
                <img
                 src={Salad}
                  alt=""
                  class="image"
                />
              </div>
              <div class="content-wrapper">
                <div class="title">
                  <h4>Folk-tastic Pennant</h4>
                </div>
                <div class="price">$19.99</div>
                <div class="description">
                  This is one of the coolest pennants money can buy. Hang it on
                  your wall, above your cool leather shoes, or even in your
                  Victorian-era bathroom.
                </div>
              </div>
            </div>

            

          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default Products;
