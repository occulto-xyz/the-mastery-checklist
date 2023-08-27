"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { Task, taskSchema } from "@/lib/validators";
import FormButton from "./FormButton";

type TaskInputFormProps = {
  changeTasks: (task: Task) => void;
};

export default function TaskInputForm(props: TaskInputFormProps) {
  const defaultValues: Task = {
    taskName: "",
    difficulty: "",
    importance: "",
  };

  const form = useForm<Task>({
    resolver: zodResolver(taskSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(values: FieldValues) {
    const task: Task = {
      taskName: values.taskName,
      difficulty: values.difficulty,
      importance: values.importance,
    };

    props.changeTasks(task);
    form.reset(defaultValues);
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
                <FormLabel className="text-stone-50 font-medium lg:text-sm text-xs">
                  Task Name
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-stone-900 border-2 border-stone-50 text-stone-50 lg:w-72 w-44"
                    type="text"
                    {...field}
                  />
                </FormControl>
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
                <FormLabel className="text-stone-50 font-medium lg:text-sm text-xs">
                  Difficulty
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    field.value ? field.value.toString() : undefined
                  }
                  value={form.getValues("difficulty")}
                  required
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
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="importance"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-stone-50 font-medium lg:text-sm text-xs">
                  Importance
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    field.value ? field.value.toString() : undefined
                  }
                  value={form.getValues("importance")}
                  required
                >
                  <FormControl>
                    <SelectTrigger className="bg-stone-900 border-2 border-stone-50 text-stone-50">
                      <SelectValue placeholder="Importance" />
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
              </FormItem>
            );
          }}
        />
        <FormButton />
      </form>
    </Form>
  );
}
