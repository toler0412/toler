
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-cnn-red text-white font-black text-3xl px-3 py-1 rounded">MT</div>
              <div className="flex flex-col leading-tight">
                <span className="font-title font-extrabold text-2xl tracking-tighter uppercase">Marcelo Toler</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Portal de notícias independente com foco em política, economia e tecnologia. Análise séria e comprometida com a verdade dos fatos.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-6 border-b border-gray-800 pb-2">Categorias</h4>
            <ul className="text-gray-400 text-sm flex flex-col gap-3">
              <li className="hover:text-white transition cursor-pointer">Política</li>
              <li className="hover:text-white transition cursor-pointer">Economia</li>
              <li className="hover:text-white transition cursor-pointer">Tecnologia</li>
              <li className="hover:text-white transition cursor-pointer">Esportes</li>
              <li className="hover:text-white transition cursor-pointer">Entretenimento</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-6 border-b border-gray-800 pb-2">O Portal</h4>
            <ul className="text-gray-400 text-sm flex flex-col gap-3">
              <li className="hover:text-white transition cursor-pointer">Quem Somos</li>
              <li className="hover:text-white transition cursor-pointer">Fale Conosco</li>
              <li className="hover:text-white transition cursor-pointer">Termos de Uso</li>
              <li className="hover:text-white transition cursor-pointer">Privacidade</li>
              <li className="hover:text-white transition cursor-pointer">Anuncie</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-6 border-b border-gray-800 pb-2">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba as notícias em primeira mão.</p>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Seu e-mail" className="bg-gray-800 border-none rounded py-2 px-4 text-sm focus:ring-1 focus:ring-cnn-red" />
              <button className="bg-cnn-red hover:bg-red-700 transition font-bold py-2 rounded text-sm uppercase">Cadastrar</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 Blog Marcelo Toler. Todos os direitos reservados.</p>
          <p>www.marcelotoler.com.br</p>
          <div className="flex gap-4">
             <span className="hover:text-white cursor-pointer transition">Facebook</span>
             <span className="hover:text-white cursor-pointer transition">Instagram</span>
             <span className="hover:text-white cursor-pointer transition">Twitter/X</span>
             <span className="hover:text-white cursor-pointer transition">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
