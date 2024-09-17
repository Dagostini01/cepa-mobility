import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Função para lidar com requisições POST
export async function POST(request: Request) {
  const body = await request.json(); // Obtém os dados do corpo da requisição
  const { nome, userId } = body;

  // Configuração do Nodemailer para envio de email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Variável de ambiente para o email
      pass: process.env.EMAIL_PASS, // Variável de ambiente para a senha do app
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Usar o email da variável de ambiente
    to: 'gmota@cepamobilty.com', // Email de destino
    subject: 'Novo usuário cadastrado no sistema CEPA Mobility',
    text: `O usuário ${nome} com User ID: ${userId} foi cadastrado no sistema.`,
  };

  try {
    // Tenta enviar o email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Usuário cadastrado e e-mail enviado!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar o e-mail', error }, { status: 500 });
  }
}
