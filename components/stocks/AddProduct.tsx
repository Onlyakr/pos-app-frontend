"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const AddProduct = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form className="w-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="id">ID(Bar Code)</Label>
            <Input name="id" type="text" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input name="amount " type="text" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="author">Author</Label>
            <Input name="author" type="text" />
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="price">Price</Label>
            <Input name="price" type="text" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="detail">Detail</Label>
            <Input name="detail" type="text" />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Add Product
        </Button>
      </div>
    </form>
  );
};
export default AddProduct;
