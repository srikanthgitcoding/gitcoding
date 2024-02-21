import { mount } from "products/productsIndex";
import "carts/cartIndex"; // here first webpack goes to carts file name in remotes object
// which return localhost remote entry file in that file cartIndex modue to be loade

console.log("######", mount);

// mount(document.querySelector("#products-container"));
