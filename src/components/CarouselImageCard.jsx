import { Card, CardFooter, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselImageCard({
  imageURL = "/placeholder.png",
  title = "Lorem Ipsum",
  description = "Aute deserunt elit enim est cillum. Nulla consectetur nostrud nulla voluptate sit eiusmod pariatur ad. Velit dolore fugiat voluptate enim non nostrud elit culpa pariatur aliquip ad.",
}) {
  return (
    <CarouselItem>
      <Card className="flex flex-col items-start justify-between gap-4 h-full">
        <img
          src={imageURL}
          alt="Product Image"
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
        <CardFooter className="grid gap-2 w-full">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-md">
            {description}
          </p>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
