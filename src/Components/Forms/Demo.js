import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';
import "./Demo.css";

function Demo() {
  const form = useForm({
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto" >
      
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <h1>Reset Password</h1>
        <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />

        <Group position="center" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Demo;