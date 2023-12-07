"use client";

import type { CardInfo } from "@/types";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Tilt from "react-parallax-tilt";

type VisionCardProps = {
  vision: CardInfo;
};

export default function VisionCard({ vision }: VisionCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={3.5}
      tiltMaxAngleY={3.5}
      glareReverse
      glareEnable
      glareColor="#34d2eb"
      glareMaxOpacity={0.2}
      glarePosition="all"
      glareBorderRadius="10px"
      scale={1.01}
      className="mx-1"
    >
      <Card
        isFooterBlurred
        radius="lg"
        className="border bg-primary-foreground/10 backdrop-blur-sm h-full"
      >
        <Image
          src={vision.image}
          alt={vision.title}
          className="object-cover"
          height={300}
          width={500}
        />
        <CardFooter className="flex-col justify-between overflow-hidden py-1 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <h1 className="font-heading text-xl">{vision.title}</h1>
          <p className="text-lg">{vision.description}</p>
        </CardFooter>
      </Card>
    </Tilt>
  );
}
