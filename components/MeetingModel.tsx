import React, { ReactNode } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


import { cn } from "@/lib/utils";

interface MeetingModelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  handleClick?: () => void;
  buttonText?: string;
  buttonIcon?: string;
  image?:string;
  children?: ReactNode;
}
const MeetingModel = ({
  isOpen,
  onClose,
  className,
  handleClick,
  buttonText,
  title,
  children,
  buttonIcon,
  image,
}: MeetingModelProps) => {
  return (
    
      <AlertDialog open={isOpen} onOpenChange={onClose}>
        
        <AlertDialogContent className="flex w-full max-w-[520px] flex-col border-none  bg-dark-1 px-6 py-9 text-white ">
          <div className="flex flex-col gap-6 ">
            {image &&(
                <div className="flex justify-center">
                    <Image src={image} alt="image" width={72} height={72}/>
                </div>
            )}
            <h1 className={cn('text-3xl font-bold leading-[42px]',className)}>{title}</h1>
            {children}
            <Button className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0" 
            
               onClick={handleClick}>

                {buttonIcon && (
                    <Image src={buttonIcon} alt="button Icon" width={13} height={13} /> 
                )} &nbsp;
                {buttonText || 'schedule Meeting'}

            </Button>
          </div>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
   
  );
};

export default MeetingModel;
