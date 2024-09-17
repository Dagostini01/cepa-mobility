"use client";

import { useState } from 'react';
import InputMask from 'react-input-mask'; // Importando a biblioteca para máscaras de entrada

interface FormData {
  nome: string;
  nascimento: string;
  telefone: string;
  email: string;
  userId: string;
  admissao: string;
  registroCNH: string;
  categoriaCNH: string;
  obtencaoCNH: string;
  vencimentoCNH: string;
  cargoFuncao: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    nascimento: '',
    telefone: '',
    email: '',
    userId: '',
    admissao: '',
    registroCNH: '',
    categoriaCNH: '',
    obtencaoCNH: '',
    vencimentoCNH: '',
    cargoFuncao: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
    } else {
      alert('Erro ao cadastrar o usuário.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Logo da Empresa */}
        <div className="text-center mb-8">
          <img 
            src="https://static.wixstatic.com/media/d59bd5_395e1c4306694c9e8c58f3d79e0ab53d~mv2.png/v1/fill/w_95,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CEPA-MOBILITY_logo-principal.png" 
            alt="Logo CEPA Mobility" 
            className="mx-auto w-32"
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Lista de Presença</h1>

        {/* Formulário */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-800 font-medium mb-2">Nome completo:</label>
              <input 
                type="text" 
                name="nome" 
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Nascimento:</label>
              <InputMask 
                mask="99/99/9999" 
                name="nascimento" 
                value={formData.nascimento}
                onChange={handleChange}
                placeholder="DD/MM/AAAA"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Telefone:</label>
              <input 
                type="tel" 
                name="telefone" 
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Digite seu telefone"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">E-mail:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">User ID:</label>
              <input 
                type="text" 
                name="userId" 
                value={formData.userId}
                onChange={handleChange}
                placeholder="Digite o ID da empresa"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Admissão na Cia:</label>
              <InputMask 
                mask="99/99/9999" 
                name="admissao" 
                value={formData.admissao}
                onChange={handleChange}
                placeholder="DD/MM/AAAA"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Nº Registro CNH:</label>
              <input 
                type="text" 
                name="registroCNH" 
                value={formData.registroCNH}
                onChange={handleChange}
                placeholder="Digite o número de registro da CNH"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Categoria CNH:</label>
              <input 
                type="text" 
                name="categoriaCNH" 
                value={formData.categoriaCNH}
                onChange={handleChange}
                placeholder="Digite a categoria da CNH"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Obtenção 1ª CNH:</label>
              <InputMask 
                mask="99/99/9999" 
                name="obtencaoCNH"
                value={formData.obtencaoCNH}
                onChange={handleChange}
                placeholder="DD/MM/AAAA"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Vencimento CNH:</label>
              <InputMask 
                mask="99/99/9999" 
                name="vencimentoCNH" 
                value={formData.vencimentoCNH}
                onChange={handleChange}
                placeholder="DD/MM/AAAA"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">Cargo/Função:</label>
              <input 
                type="text" 
                name="cargoFuncao" 
                value={formData.cargoFuncao}
                onChange={handleChange}
                placeholder="Digite o cargo/função"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-400"
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
