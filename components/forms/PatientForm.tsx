"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../ui/CustomFormField"

export enum FormFieldType {
    INPUT = "input",
    TEXTAREA = "textarea",
    PHONE_INPUT = "phoneInput",
    CHECKBOX = "checkbox",
    DATE_PICKER = "datePicker",
    SELECT = "select",
    SKELETON = "skeleton",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="spa ce-y-6 flex-1">
        <section className="mb:12 space-y-4">
            <h1 className="header">
                Welcome to the Healthy Gang.
            </h1>
            <p className="text-dark-700">Schedule your first appointment</p>
        </section>

        <CustomFormField
            fieldType={FormFieldType.INPUT} 
            control={form.control}
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconAlt="user"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PatientForm