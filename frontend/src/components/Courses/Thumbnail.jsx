import React from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/Card";

import * as Avatar from '@radix-ui/react-avatar';

function Thumbnail({ image, title, author ,review}) {
    return (
    <Card className="bg-black text-white p-4 rounded-lg max-w-sm">
      <div className="relative w-full h-60 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-sm flex items-center gap-1">
          <span>{review}</span>
          <span>★</span>
        </div>
      </div>
      <CardContent className="mt-3 flex gap-4 items-center">
      <Avatar.Root className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
            <Avatar.Image src={image} alt="user" className="w-full h-full rounded-full" />
            <Avatar.Fallback className="text-white text-lg">SD</Avatar.Fallback>
          </Avatar.Root>
          <div className="overflow-hidden w-full flex flex-col justify-center ">
              <h3 className="text-lg text-muted-foreground font-semibold w-full overflow-hidden text-ellipsis break-words line-clamp-3" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>{title}</h3>
              <p className="text-gray-400 text-sm truncate w-full">{author}</p>
            </div>
      </CardContent>
    </Card>
  );
}

export default Thumbnail;