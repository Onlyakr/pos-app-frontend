"use client";

import { getAccessToken } from "@/lib/users";
import { Button } from "../ui/button";

const GetAccessButton = () => {
  return (
    <Button
      onClick={() =>
        getAccessToken()
          //   .then((res) => res.json())
          .then((data) => console.log(data))
      }
    >
      Refresh Token
    </Button>
  );
};
export default GetAccessButton;
