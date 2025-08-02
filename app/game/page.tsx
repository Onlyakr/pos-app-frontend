"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Image from "next/image";

import useSound from "use-sound";
import { ModeToggle } from "@/components/layout/header/ModeToggle";

const TestPage = () => {
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const [sound] = useSound("/sound.mp3");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      value.toLowerCase() === "peet" ||
      value.toLowerCase() === "joe" ||
      value.toLowerCase() === "bank" ||
      value.toLowerCase() === "nice" ||
      value.toLowerCase() === "pimploy" ||
      value.toLowerCase() === "pond"
    ) {
      toast.success("จ๊ะเอ๋ตัวเอง");
      setIsCorrect(true);
      sound();
    } else {
      toast.error("Who are you? Try again.");
      setIsCorrect(false);
    }
  };

  const handleClear = () => {
    setValue("");
    setIsCorrect(false);
  };

  return (
    <div
      className={`relative flex h-svh w-full flex-col items-center justify-center gap-10 ${
        isCorrect ? "bg-pink-300" : ""
      }`}
    >
      <header className="absolute top-1.5 right-2 z-50 flex items-center gap-4">
        <ModeToggle />
        <Button type="button" variant="destructive" onClick={handleClear}>
          Clear
        </Button>
      </header>
      <h1 className="text-4xl font-bold">What is your name?</h1>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search here..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-md border-2 border-gray-300 p-2"
        />
        <Button type="submit">Submit</Button>
      </form>
      {isCorrect && (
        <Image src="/meme2.gif" alt={value} className="object-contain" fill />
      )}
    </div>
  );
};
export default TestPage;
