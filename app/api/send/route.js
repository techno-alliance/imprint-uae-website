// import { EmailTemplate } from "@/components/New/EmailTemplate"
// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     console.log("body",body)
//     const {email, name, message, phone, subject} = body;
//     const { data, error } = await resend.emails.send({
//       from: "Imprint <onboarding@resend.dev>",
//       to: email,
//       subject: "Hello world",
//       react: EmailTemplate({ firstName: name })
//     })

//     if (error) {
//       return Response.json({ error }, { status: 500 })
//     }

//     return Response.json(data)
//   } catch (error) {
//     return Response.json({ error }, { status: 500 })
//   }
// }
