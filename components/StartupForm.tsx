"use client";

import React, {useActionState, useState} from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import { formSchema } from "@/lib/validation";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { toast } from "sonner";

const StartupForm = () => {
  const [pitch, setPitch] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleSubmit = async(prevState:any, formData: FormData) => {
    try{

       const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch: pitch,
       }

       await formSchema.parseAsync(formValues);

       const result = await createPitch(prevState, formData, pitch);

       if(result.status === "SUCCESS"){

          toast.success("Your startup pitch has been created successfully");
          router.push(`/startup/${result._id}`);
       }
       return result;
        
    }catch(error){
      if(error instanceof z.ZodError){
          const fieldErrors = error.flatten().fieldErrors;
          setErrors(fieldErrors as unknown as Record<string, string>);
          toast.warning("Validation failed. Please check your inputs.");
          return {
            ...prevState,
            error: "Validation failed",
            status: "ERROR",
          };
      }

        toast.error("An unexpected error occurred. Please try again later.");
        return {
          ...prevState,
          error : "An Unexpected error has occured",
          status : "ERROR"
        };
    }
  }

  const [state, formAction , isPending] = useActionState( handleSubmit, {
    error: '',
    status: "INTIAL"
  });


  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          type="text"
          id="title"
          name="title"
          className="startup-form_input"
          placeholder="Startup Title"
          required
        />
        {errors.title && (
          <span className="startup-form_error">{errors.title}</span>
        )}
      </div>
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description:
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          placeholder="Startup Description"
          required
        />
        {errors.description && (
          <span className="startup-form_error">{errors.description}</span>
        )}
      </div>
      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          type="text"
          id="category"
          name="category"
          className="startup-form_input"
          placeholder="Category (Tech, Health, Education...)"
          required
        />
      </div>
      <div>
        <label htmlFor="link" className="startup-form_label">
          Image Url
        </label>
        <Input
          type="text"
          id="link"
          name="link"
          className="startup-form_input"
          placeholder="Startup Image Url"
          required
        />
      </div>
      <div data-color-mode="light">
         <label htmlFor="pitch" className="startup-form_label">
          Startup Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>
      <div>
        <Button type="submit" className="startup-form_btn ">
          Submit Your Pitch 
          <Send className="size-6 ml-2" />
        </Button>
      </div>
    </form>
  );
};

export default StartupForm;
