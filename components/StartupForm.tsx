"use client";

import React, {useActionState, useState} from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import MDEditor from "@uiw/react-md-editor";
import { formSchema } from "@/lib/validation";

const StartupForm = () => {
  const [pitch, setPitch] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async(prevState:any, formData: FormData) => {
    try{

       const formValues = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch: pitch,
       }

       await formSchema.parseAsync(formValues);

       
        
    }catch(error){
      console.error("Error submitting form:", error);
      setErrors({
        title: "Failed to submit the form. Please try again later.",
        description: "Failed to submit the form. Please try again later.",
        pitch: "Failed to submit the form. Please try again later.",
      });
    }
  }

  const [state, formAction , isPending] = useActionState( handleSubmit, {
    error: '',
    status: "INTIAL"
  });


  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="name" className="startup-form_label">
          Title
        </label>
        <Input
          type="text"
          id="name"
          name="name"
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
