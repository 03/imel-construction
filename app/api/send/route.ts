import {NextResponse} from 'next/server';
import {Resend} from 'resend';
import {ContactEmailTemplate} from '@/components/emails/contact-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {

    try {
        const { name, email, phone, type, suburb, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }
        // Send email using Resend
        const data = await resend.emails.send({
            from: 'Contact Form <info@imelconstruction.com.au>', // Use this default address during testing
            to: ['info@imelconstruction.com.au'], // Replace with your actual receiving inbox
            subject: `New Inquiry from ${name}`,
            replyTo: email, // Clicking "Reply" in your inbox replies directly to the user!
            react: ContactEmailTemplate({ name, email, phone, type, suburb, message }),
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}