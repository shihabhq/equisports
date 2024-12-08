import { useContext, useState } from "react";
import Input from "../shared/Input";
import { AuthContext } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

const AddEquipmentPage = () => {
  const { user } = useContext(AuthContext);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [customization, setCustomization] = useState("");
  const [processTime, setProcessTime] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !processTime ||
      !productName ||
      !category ||
      !image ||
      !description ||
      !customization ||
      !price ||
      !rating ||
      !stock
    ) {
      toast.error("Pleas Fillup all the fields", { position: "top-center" });
      return;
    }
    if (parseFloat(rating)>5) {
      toast.error("Ratings cannot be more than 5", { position: "top-center" });
      return    
    }
    const product = {
      productName,
      category,
      image,
      description,
      customization,
      price,
      rating,
      stock,
      processTime,
      email: user.email,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product added Successfully ", {
          position: "top-center",
        });
        setCategory("");
        setProductName("");
        setImage(""), setDescription(""), setCustomization("");
        setPrice(""), setRating("");
        setStock("");
        setProcessTime("");
      })
      .catch((e) => {
        toast.error("There was an error while adding product", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center w-[95%] md:w-[80%] mx-auto text-black">
      <div className="bg-white  shadow-lg rounded-lg px-8 py-6 max-w-[45rem]">
        <h1 className="text-2xl font-bold text-center mb-4 text-black">
          Add Equipment
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mb-2">
            <Input
              changeVal={setProductName}
              value={productName}
              name={"itemName"}
              placeholder={"Enter Product Name"}
              text={"Product Name"}
              type={"text"}
              readonly={false}
            />
            <Input
              name={"category"}
              placeholder={"Enter Category Name"}
              text={"Category Name"}
              type={"text"}
              changeVal={setCategory}
              value={category}
              readonly={false}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 mb-2">
            <Input
              name={"image"}
              value={image}
              changeVal={setImage}
              placeholder={"Enter Image URL"}
              text={"Enter Image URL"}
              type={"text"}
              readonly={false}
            />
          </div>
          <div className="grid grid-cols-1 mb-2">
            <label
              htmlFor="descrition"
              className="block text-sm font-medium text-gray-900 mb-2">
              Product Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea bg-inherit border h-[150px] border-gray-300"
              placeholder="Product Description"></textarea>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mb-2">
            <Input
              name={"customization"}
              value={customization}
              changeVal={setCustomization}
              placeholder={"Enter Customizations"}
              text={"Extra Customization Option"}
              type={"text"}
              readonly={false}
            />
            <Input
              name={"processing"}
              value={processTime}
              changeVal={setProcessTime}
              placeholder={"Enter Processing Time(days)"}
              text={"Processing Time(days)"}
              type={"number"}
              readonly={false}
            />
          </div>
          <div className="grid grid-cols-2 mobile:grid-cols-3 gap-2 mb-2">
            <Input
              name={"price"}
              value={price}
              changeVal={setPrice}
              placeholder={"Price"}
              text={"Price"}
              type={"number"}
              readonly={false}
            />
            <Input
              value={rating}
              changeVal={setRating}
              name={"rating"}
              placeholder={"Rating"}
              text={"Rating"}
              type={"number"}
              readonly={false}
            />
            <Input
              name={"stock"}
              value={stock}
              changeVal={setStock}
              placeholder={"Stock"}
              text={"Stock"}
              type={"number"}
              readonly={false}
            />
          </div>
          <div>
            <h1 className="text-start text-xl font-semibold">
              Your information:
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                name={"emailread"}
                placeholder={"Your email"}
                value={user?.email}
                text={"Your email"}
                type={"text"}
                readonly={true}
              />
              <Input
                name={"nameread"}
                placeholder={"Your name"}
                value={user.displayName}
                text={"Your name"}
                type={"text"}
                readonly={true}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-black w-full text-base">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipmentPage;
