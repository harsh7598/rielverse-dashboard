'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { UserRolesSchema } from '@/types/user';

import { getPhoneData, PhoneInput } from '@/components/ui/custom/phone-input';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { Icons } from '@/components/ui/custom/icons';
import { SignupAction } from '@/server/auth';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/config/routes';
import Link from 'next/link';
import { ToastError, ToastSuccess } from '@/components/ui/custom/toast';
import { PasswordInput } from '@/components/ui/custom/password-input';

const formSchema = z
  .object({
    email: z.string().email({
      message: 'Invalid email address',
    }),
    password: z
      .string()
      .nonempty({
        message: 'Password is required',
      })
      .min(8, {
        message: 'Password must be at least 8 characters',
      }),
    name: z.string().nonempty({
      message: 'Name is required',
    }),
    role: UserRolesSchema,
    address: z.string().optional(),
    phone: z.string().refine(
      (value) => {
        const phoneData = getPhoneData(value);
        return phoneData.isValid;
      },
      {
        message: 'Invalid phone number',
      },
    ),
  })
  .superRefine((data, ctx) => {
    if (data.role === 'Agent' && data.address === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Address is required ',
        path: ['address'],
      });
    }
    if (data.role === 'User' && data.address !== '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Address is not required',
        path: ['address'],
      });
    }
  });

export default function SignupForm() {
  const [isUser, setIsUser] = useState(true);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: 'User',
      address: '',
      name: '',
      email: '',
      password: '',
      phone: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { address, ...rest } = values;

    const [res, error] = await SignupAction(
      values.role === 'User' ? { ...rest } : { ...rest, address },
    );

    if (res) {
      ToastSuccess(res.message);
    }

    if (error) {
      ToastError(error);

      if (typeof error === 'string' && error === 'User already exists') {
        router.push(ROUTES.AUTH.LOGIN);
      }
    }
    form.reset();
  }

  const value = form.watch('role');

  useEffect(() => {
    setIsUser(value === 'User');
    form.setValue('address', '');
    form.clearErrors('address');
  }, [value]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 '>
        <div className='flex flex-col gap-2'>
          <FormField
            control={form.control}
            name='role'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Tabs
                      defaultValue={field.value}
                      onValueChange={field.onChange}>
                      <TabsList className='w-full'>
                        {['User', 'Agent'].map((value, key) => (
                          <TabsTrigger
                            key={key}
                            className='w-1/2 data-[state=active]:bg-[#003780] data-[state=active]:text-primary-foreground'
                            value={value}>
                            {value}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </Tabs>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='Acme@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder='*********' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='John Watson' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      id='number-input'
                      {...field}
                      defaultCountry='AU'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          {!isUser && (
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder='Write your address here'
                        className='resize-none'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          )}
        </div>
        <Button
          type='submit'
          disabled={form.formState.isSubmitting}
          className="w-full bg-[#003780]">
          {form.formState.isSubmitting && (
            <Icons.spinner className='mr-2 h-4 w-4 animate-spin group-hover:text-gray-500' />
          )}
          Submit
        </Button>
      </form>
      <div className='text-center text-sm'>
        Already have an account?{' '}
        <Link
          href={ROUTES.AUTH.LOGIN}
          className='underline underline-offset-4 text-[#003780] font-semibold cursor-pointer'>
          Log In
        </Link>
      </div>
    </Form>
  );
}
