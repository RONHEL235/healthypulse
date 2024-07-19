"use client"

import React from 'react'
import { FormControl, FormDescription, FormField, FormItem,FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormFieldType } from '../forms/PatientForm'
import { Control } from 'react-hook-form'

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({ field, props }: { field: any; props: CustomProps}) => {
     switch (props.fieldType) {
        case FormFieldType.INPUT: 
            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">

                </div>
            )
     }
}

const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props
  return (
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="flex-1">
              {fieldType !== FormFieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
              )}

              <RenderField field={field} props={props}/>

              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
  )
}

export default CustomFormField 