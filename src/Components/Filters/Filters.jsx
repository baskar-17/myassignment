import React, { useState } from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { FaCrown } from "react-icons/fa";
import Box from "@mui/material/Box";
import Config from "./Config";
import Checkbox from "@mui/material/Checkbox";
import ProductList from "../ProductList/ProductList";
import "./filters.css";

function Filters() {
  const FilterSm = () => {
    return (
      <div>
        <ProductList />
      </div>
    );
  };

  const FilterMd = () => {
    return (
      <div>
        <ProductList />
      </div>
    );
  };

  const FilterLg = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    // console.log(selectedItems);

    const [isVerifiedSellerChecked, setIsVerifiedSellerChecked] =
      useState(false);

    function handleVerifiedSellerChange(event) {
      setIsVerifiedSellerChecked(event.target.checked);
      const value = event.target.value;
      if (event.target.checked) {
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
      } else {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((item) => item !== value)
        );
      }
    }

    const [isPopularChecked, setIsPopularChecked] = useState(false);

    function handlePopularChange(event) {
      setIsPopularChecked(event.target.checked);
      const value = event.target.value;
      if (event.target.checked) {
        setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
      } else {
        setSelectedItems((prevSelectedItems) =>
          prevSelectedItems.filter((item) => item !== value)
        );
      }
    }

    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
      <div className="body-content">
        <div className="filters-container">
          <h5 className="filters-head">Filters</h5>
          <div className="product-type">
            <h6 className="product-type-head">Product Type</h6>
            <div className="product-type-col">
              <Checkbox
                value="Verified Seller"
                color="success"
                checked={isVerifiedSellerChecked}
                onChange={handleVerifiedSellerChange}
              />
              <div className="product-verified">
                <VscVerifiedFilled className="verified-icon" />
                <p>Verified Seller</p>
              </div>
            </div>
            <div className="product-type-col">
              <Checkbox
                value="Popular product"
                color="success"
                checked={isPopularChecked}
                onChange={handlePopularChange}
              />
              <div className="popular-product">
                <FaCrown className="crown-icon" />
                <p>Popular product</p>
              </div>
            </div>
          </div>
          <div className="price-range">
            <h6 className="price-range-head">Price Range</h6>
            <div className="price-range-col">
              <div className="price-range-slider">
                <Box sx={{ width: 200 }}>
                  <Config
                    valueLabelDisplay="auto"
                    defaultValue={[0, 1000]}
                    getAriaLabel={(index) =>
                      index === 0 ? "Minimum price" : "Maximum price"
                    }
                  />
                </Box>
              </div>
            </div>
          </div>
          <div className="discount">
            <h6 className="discount-head">Discount</h6>
            <div className="discount-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">10% Offer</label>
            </div>
            <div className="discount-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">20% Offer</label>
            </div>
            <div className="discount-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">30% Offer</label>
            </div>
            <div className="discount-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">40% Offer</label>
            </div>
            <div className="discount-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">50% Offer</label>
            </div>
          </div>
          <div className="customer-ratings">
            <h6 className="customer-rating-head">Customer Ratings</h6>
            <div className="customer-ratings-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">4 & Above</label>
            </div>
            <div className="customer-ratings-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">3 & Above</label>
            </div>
          </div>
          <div className="develiry-time">
            <h6 className="delivery-time-head">Delivery Time</h6>
            <div className="delivery-time-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">Delivery in 1 day</label>
            </div>
            <div className="delivery-time-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">Delivery in 1 week</label>
            </div>
          </div>
          <div className="ram">
            <h6 className="ram-head">RAM</h6>
            <div className="ram-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">3 GB</label>
            </div>
            <div className="ram-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">4 GB</label>
            </div>
            <div className="ram-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">6 GB</label>
            </div>
            <div className="ram-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">8 GB & Above</label>
            </div>
          </div>
          <div className="internal-storage">
            <h6 className="internal-storage-head">Internal Storage</h6>
            <div className="internal-storage-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">32 - 63.9 GB</label>
            </div>
            <div className="internal-storage-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">64 - 127.9 GB</label>
            </div>
            <div className="internal-storage-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">128 - 255.9 GB</label>
            </div>
            <div className="internal-storage-col">
              <Checkbox {...label} color="success" />
              <label htmlFor="">256 GB & Above</label>
            </div>
          </div>
        </div>
        <ProductList
          isVerifiedSellerChecked={isVerifiedSellerChecked}
          isPopularChecked={isPopularChecked}
          selectedItems={selectedItems}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="filterSm">
        <FilterSm />
      </div>
      <div className="filterMd">
        <FilterMd />
      </div>
      <div className="filterLg">
        <FilterLg />
      </div>
    </div>
  );
}
export default Filters;
