
import React from 'react';

const DomainConfig: React.FC = () => {
  return (
    <div className="space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-10 duration-700">
      {/* ETAPA DE COMMIT */}
      <div className="bg-blue-600 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="text-7xl animate-bounce">📦</div>
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">Quase Pronto!</h2>
            <p className="text-blue-100 text-xl font-medium leading-tight">
              A lista que você vê com <strong>"20 changed files"</strong> é o coração do seu site. 
              Agora só falta dar o comando de envio definitivo.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[3rem] shadow-xl border-4 border-slate-900">
          <h3 className="text-2xl font-black uppercase italic mb-6">Próximo Passo:</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0">1</div>
              <p className="text-slate-600 font-bold">
                Clique no botão branco <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs uppercase tracking-widest">Stage and commit all changes</span>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0">2</div>
              <p className="text-slate-600 font-bold">
                O ícone do Gato vai girar por alguns segundos. Isso significa que ele está salvando o portal na nuvem.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center font-black shrink-0">3</div>
              <p className="text-slate-600 font-bold text-emerald-600">
                Assim que terminar, o seu repositório estará pronto para ser ligado ao domínio <strong>marcelotoler.com.br</strong> na Vercel!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl flex flex-col justify-center items-center text-center">
          <div className="mb-6">
            <svg className="w-20 h-20 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          </div>
          <h4 className="text-xl font-black uppercase italic mb-4">Verificação de Segurança</h4>
          <p className="text-slate-400 text-sm font-medium mb-8">
            Depois de clicar, você pode conferir se os arquivos chegaram clicando abaixo:
          </p>
          <a 
            href="https://github.com/toler0412/toler0412" 
            target="_blank" 
            className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Ver no GitHub
          </a>
        </div>
      </div>

      <div className="bg-amber-50 border-2 border-amber-200 p-8 rounded-[2.5rem] flex items-center gap-6">
        <span className="text-4xl">💡</span>
        <p className="text-amber-800 text-sm font-bold italic">
          <strong>Dica do Engenheiro:</strong> Se você já tem a Vercel configurada, assim que esse envio terminar, o site entrará no ar em menos de 1 minuto!
        </p>
      </div>
    </div>
  );
};

export default DomainConfig;
