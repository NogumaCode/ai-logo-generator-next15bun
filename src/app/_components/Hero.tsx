"use client";
import React, { useState } from "react";
import heroContent from "../_data/Lookup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  const [logoTitle, setLogoTitle] = useState<string>("");
  return (
    <div className="flex items-center mt-32 flex-col gap-5">
      <h1 className="text-primary text-5xl text-center font-bold">
        {heroContent.HeroHeading}
      </h1>
      <h2 className="text-5xl text-center font-bold">
        {heroContent.HeroSubheading}
      </h2>
      <p className="text-lg text-gray-500 text-center">
        {heroContent.HeroDesc}
      </p>
      <div className="flex w-full max-w-2xl items-center space-x-2 mt-10 flex-wrap md:flex-nowrap justify-center">
        <Input
          className="w-full p-6"
          placeholder={heroContent.InputTitlePlaceholder || "ロゴのタイトルを入力"}
          onChange={(event)=>setLogoTitle(event?.target.value)}
        />
        <Button className="w-1/2 p-6 mt-4 md:mt-0"asChild>
         <Link href={"/create?title=" + encodeURIComponent(logoTitle)} >
          始める
        </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
