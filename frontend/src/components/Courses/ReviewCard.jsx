import React from 'react'
import TagList from '@/components/TagList';
import CourseCard from './CourseCard';
import * as Avatar from '@radix-ui/react-avatar';
import ReviewStars from './ReviewStars';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card";


function ReviewCard({image, rating_avg, author}) {




    return (
        <Card className="bg-black text-white p-6 rounded-xl border  max-w-2/5">
          <CardHeader className="flex items-center gap-4">
            <Avatar.Root className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
              <Avatar.Image src={image} alt="user" className="w-full h-full rounded-full" />
              <Avatar.Fallback className="text-white text-lg">SD</Avatar.Fallback>
            </Avatar.Root>
            <div>
              <h3 className="text-lg  font-semibold">{author}</h3>
              <p className="text-muted-foreground text-md">elbread@gmail.com</p>
            </div>
            <div className="ml-auto flex items-center gap-1 text-white">
              <ReviewStars review={review} />
              <span className="text-white text-md">{review}</span>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground text-md leading-relaxed">
            Aprende expresiones habituales en inglés y practica frases simples para  presentarte y responder "What's your name?" al decir tu nombre y "How  old are you?" para indicar tu edad.  Usar el alfabeto en inglés para  deletrear palabras, identifica números básicos y adquiere vocabulario  sobre los días de la semana y objetos cotidianos. Domina el verbo "to  be" en expresiones cortas para hablar de tu profesión y responde  preguntas con "who" para hablar de alguien más.
            </CardDescription>
          </CardContent>
        </Card>
      );
    }
    

export default ReviewCard