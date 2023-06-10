import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./productlist.css";
import ProductCard from "./ProductCard";
import Products from "./ProductsArray";
import { BiFilter } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { BiCheck } from "react-icons/bi";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

function ProductList({
  isVerifiedSellerChecked,
  isPopularChecked,
  selectedItems,
}) {
  const filteredProducts = Products.filter((product) => {
    if (isVerifiedSellerChecked && isPopularChecked) {
      return product.isVerified || product.isPopular;
    }
    if (isVerifiedSellerChecked) {
      return product.isVerified;
    }
    if (isPopularChecked) {
      return product.isPopular;
    }
    return true;
  });

  const useStyles = makeStyles({
    drawer: {
      width: 250,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 250,
    },
  });

  function CheckboxList() {
    const [checkedItems, setCheckedItems] = useState([]);

    function handleToggle(item) {
      const currentIndex = checkedItems.indexOf(item);
      const newCheckedItems = [...checkedItems];

      if (currentIndex === -1) {
        newCheckedItems.push(item);
      } else {
        newCheckedItems.splice(currentIndex, 1);
      }

      setCheckedItems(newCheckedItems);
    }

    return (
      <List>
        {[1, 2, 3, 4, 5].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
              onClick={() => handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checkedItems.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Checkbox ${value}`} />
            </ListItem>
          );
        })}
      </List>
    );
  }

  const ProductListSm = () => {
    const classes = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function handleDrawerOpen() {
      setIsDrawerOpen(true);
    }

    function handleDrawerClose() {
      setIsDrawerOpen(false);
    }
    return (
      <div className="product-list-sm-container">
        <div className="product-detail-heading">
          <div className="products-details-container">
            <h3>Mobiles</h3>
            <p>(824 products)</p>
          </div>
          <div>
            <button onClick={handleDrawerOpen}>
              <BiCheck size={24} />
            </button>
            <Drawer
              className={classes.drawer}
              anchor="bottom"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <h2>Select Options</h2>
                <button onClick={handleDrawerClose}>Close</button>
              </div>
              <CheckboxList />
            </Drawer>
          </div>
        </div>
        <div className="product-grid">
          <ProductCard />
        </div>
      </div>
    );
  };

  const ProductListMd = () => {
    return (
      <div className="product-list-sm-container">
        <div className="product-detail-heading">
          <div className="products-details-container">
            <h3>Mobiles</h3>
            <p>(824 products)</p>
          </div>
          <div className="products-filter">
            <select>
              <option value="Relevent">Relevent</option>
              <option value="Price High to Low">High to Low</option>
              <option value="Price Low to High">Low to High</option>
              <option value="Newest First">Newest First</option>
            </select>
            <BiFilter size={24} />
          </div>
        </div>
        <div className="product-grid">
          <ProductCard />
        </div>
      </div>
    );
  };

  const ProductListLg = () => {
    return (
      <div className="productlist-container">
        <div className="productlist-content">
          <div className="productlist-head">
            <div role="presentation" className="breadcrumbs-head">
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Mobiles & Accessories
                </Link>
                <Typography color="text.primary">Mobiles</Typography>
              </Breadcrumbs>
            </div>
            <div className="products-details-container">
              <h3>Mobiles</h3>
              <p>(Showing 1 to 24 products out of 824 products)</p>
            </div>
          </div>
          <div className="products-filter">
            <p>Sort by:</p>
            <select>
              <option value="Relevent">Relevent</option>
              <option value="Price High to Low">Price High to Low</option>
              <option value="Price Low to High">Price Low to High</option>
              <option value="Newest First">Newest First</option>
            </select>
          </div>
        </div>

        <div
          className={
            Array.isArray(selectedItems) && selectedItems.length
              ? "selected-filter-container"
              : "d-none"
          }
        >
          <div className="selected-filter-chips">
            {Array.isArray(selectedItems) &&
              selectedItems.map((item) => (
                <div className="selected-filter" key={item}>
                  <p>{item}</p>
                  <IoCloseCircleSharp />
                </div>
              ))}
          </div>
          <button className="ghost-btn">Clear All</button>
        </div>
        <>
          <div className="product-grid">
            <ProductCard key={filteredProducts.id} product={filteredProducts} />
          </div>
        </>
      </div>
    );
  };

  return (
    <div>
      <div className="productlist-sm">
        <ProductListSm />
      </div>
      <div className="productlist-md">
        <ProductListMd />
      </div>
      <div className="productlist-lg">
        <ProductListLg initialSelectedItems={selectedItems} />
      </div>
    </div>
  );
}

export default ProductList;
