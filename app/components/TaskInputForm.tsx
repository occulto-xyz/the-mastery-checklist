"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Task, taskSchema } from "@/lib/validators";
import FormButton from "./FormButton";

type TaskInputFormProps = {
  changeTasks: (task: Task) => void;
};

export default function TaskInputForm(props: TaskInputFormProps) {
  const form = useForm<Task>({
    resolver: zodResolver(taskSchema),
  });

  function onSubmit(values: FieldValues) {
    const task: Task = {
      taskName: values.taskName,
      difficulty: values.difficulty,
      priority: values.priority,
    };
    props.changeTasks(task);
  }

  return (
    <Form {...form}>
      <form
        className="lg:grid lg:grid-cols-4 lg:gap-10 flex flex-col justify-center items-center lg:space-y-0 space-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="taskName"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-stone-900 border-2 border-stone-50 text-stone-50 lg:w-72 w-44"
                    placeholder="Task Name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => {
            return (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    field.value ? field.value.toString() : undefined
                  }
                >
                  <FormControl>
                    <SelectTrigger className="bg-stone-900 border-2 border-stone-50 text-stone-50">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-stone-900 border-2 border-stone-50 text-stone-50">
                    <SelectGroup>
                      <SelectGroup>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem
                            className="text-stone-50"
                            key={i + 1}
                            value={(i + 1).toString()}
                          >
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => {
            return (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    field.value ? field.value.toString() : undefined
                  }
                >
                  <FormControl>
                    <SelectTrigger className="bg-stone-900 border-2 border-stone-50 text-stone-50">
                      <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-stone-900 border-2 border-stone-50 text-stone-50">
                    <SelectGroup>
                      <SelectGroup>
                        {Array.from({ length: 10 }, (_, i) => (
                          <SelectItem
                            className="text-stone-50"
                            key={i + 1}
                            value={(i + 1).toString()}
                          >
                            {i + 1}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormButton />
      </form>
    </Form>
  );
}
