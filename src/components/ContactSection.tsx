"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Stack,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Paper,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconBrandTwitter,
  IconCheck,
} from "@tabler/icons-react";
import classes from "./ContactSection.module.css";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Name must be at least 2 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.trim().length < 10
          ? "Message must be at least 10 characters"
          : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", values);
    setSubmitted(true);
    setIsSubmitting(false);
    form.reset();
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    {
      icon: IconBrandGithub,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "gray",
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "blue",
    },
    {
      icon: IconMail,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "teal",
    },
    {
      icon: IconBrandTwitter,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "cyan",
    },
  ];

  return (
    <section id="contact" className={classes.section}>
      <Container size="xl">
        <Stack gap={64}>
          {/* Section Header */}
          <Stack gap="md" align="center" ta="center">
            <Title order={2} c="white" className={classes.sectionTitle}>
              Get In Touch
            </Title>
            <div className={classes.titleUnderline}></div>
            <Text size="lg" c="dimmed" maw={600}>
              Have a project in mind or just want to chat? Feel free to reach
              out!
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
            {/* Contact Form */}
            <Paper
              p="xl"
              radius="md"
              withBorder
              className={classes.formContainer}
            >
              <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap="md">
                  <Title order={3} c="white" size="h4">
                    Send a Message
                  </Title>

                  {submitted && (
                    <Alert
                      icon={<IconCheck size={16} />}
                      color="teal"
                      variant="light"
                      className={classes.successAlert}
                    >
                      Message sent successfully! I'll get back to you soon.
                    </Alert>
                  )}

                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    size="md"
                    {...form.getInputProps("name")}
                    classNames={{
                      input: classes.input,
                      label: classes.label,
                    }}
                  />

                  <TextInput
                    label="Email"
                    placeholder="your.email@example.com"
                    size="md"
                    {...form.getInputProps("email")}
                    classNames={{
                      input: classes.input,
                      label: classes.label,
                    }}
                  />

                  <Textarea
                    label="Message"
                    placeholder="Tell me about your project..."
                    size="md"
                    minRows={5}
                    {...form.getInputProps("message")}
                    classNames={{
                      input: classes.input,
                      label: classes.label,
                    }}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    color="teal"
                    fullWidth
                    loading={isSubmitting}
                    className={classes.submitButton}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>

            {/* Social Links & Info */}
            <Stack gap="xl" justify="center">
              <Stack gap="md">
                <Title order={3} c="white" size="h4">
                  Connect With Me
                </Title>
                <Text size="md" c="dimmed">
                  Follow me on social media or drop me an email. I'm always open
                  to discussing new projects, creative ideas, or opportunities.
                </Text>
              </Stack>

              <Group gap="md">
                {socialLinks.map((social) => (
                  <ActionIcon
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size={56}
                    radius="md"
                    variant="light"
                    color={social.color}
                    className={classes.socialIcon}
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </ActionIcon>
                ))}
              </Group>

              <Stack gap="sm" className={classes.contactInfo}>
                <Text size="sm" c="dimmed">
                  <strong>Email:</strong> your.email@example.com
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Location:</strong> Your City, Country
                </Text>
                <Text size="sm" c="dimmed">
                  <strong>Availability:</strong> Open to opportunities
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
