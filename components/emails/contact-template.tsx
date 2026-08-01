import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

interface ContactEmailProps {
    name: string;
    email: string;
    phone: string;
    type: string;
    suburb: string;
    message: string;
}

export function ContactEmailTemplate({ name, email, phone, type, suburb, message }: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New Contact Form Submission from {name}</Preview>
            <Body style={{ backgroundColor: "#f6f9fc", fontFamily: "sans-serif", padding: "20px" }}>
                <Container style={{ backgroundColor: "#ffffff", border: "1px solid #eee", borderRadius: "8px", padding: "40px", maxWidth: "580px" }}>
                    <Heading style={{ color: "#333", fontSize: "20px", marginBottom: "16px" }}>
                        New Message Received
                    </Heading>
                    <Section>
                        <Text style={{ fontSize: "14px", color: "#555" }}>
                            <strong>From:</strong> {name} ({email})
                        </Text>
                        <Text style={{ fontSize: "15px", color: "#333", lineHeight: "1.6" }}>
                            <strong>Phone:</strong> {phone}
                        </Text>
                        <Text style={{ fontSize: "15px", color: "#333", lineHeight: "1.6" }}>
                            <strong>Type:</strong> {type}
                        </Text>
                        <Text style={{ fontSize: "15px", color: "#333", lineHeight: "1.6" }}>
                            <strong>Suburb:</strong> {suburb}
                        </Text>
                        <Hr style={{ borderColor: "#eee", margin: "20px 0" }} />
                        <Text style={{ fontSize: "15px", color: "#333", lineHeight: "1.6" }}>
                            {message}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}