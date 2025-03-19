import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/Card";

import * as Avatar from '@radix-ui/react-avatar';
import { Button } from "../ui/Button";

function CreateNewCourse({image, author}) {



    return (
        <Card className="text-white p-6 rounded-xl border max-w-[320px] bg-black">
            <CardHeader className="flex items-center gap-4 pb-4">
                <Avatar.Root className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                    <Avatar.Image src={image} alt="user" className="w-full h-full rounded-full" />
                    <Avatar.Fallback className="text-white text-lg font-bold">SD</Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <p className="text-white text-lg font-semibold">{author}</p>
                </div>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Button className="" type="button">
                    CREATE NEW COURSE
                </Button>
            </CardContent>
        </Card>
    );
}

export default CreateNewCourse;
