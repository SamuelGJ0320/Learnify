import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/Card";

import * as Avatar from '@radix-ui/react-avatar';
import { Button } from "@components/ui/Button";
import Link from "next/link";

function CreateNewCourse({image, author}) {



    return (
        <Card className="text-white p-6 rounded-xl border max-w-[320px] bg-black">
            <CardHeader className="flex items-center gap-4 pb-4">
                <Avatar.Root className=" rounded-full p-2 bg-gray-700 flex items-center justify-center">
                    <Avatar.Image src={image} alt="user" className="w-24 h-24 rounded-full" />
                    <Avatar.Fallback className="text-white text-lg font-bold">SD</Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <p className="text-white text-lg font-semibold">{author.name}</p>
                </div>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Link href="/courses/create">
                <Button className="" type="button">
                    CREATE NEW COURSE
                </Button>
                </Link>
            </CardContent>
        </Card>
    );
}

export default CreateNewCourse;
