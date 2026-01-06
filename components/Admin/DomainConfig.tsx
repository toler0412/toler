
import React from 'react';

const DomainConfig: React.FC = () => {
  return (
    <div className="space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* HEADER DE SUCESSO */}
      <div className="bg-slate-900 text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Decisão correta, Marcelo!</h2>
          <p className="text-slate-400 mt-4 font-medium max-w-2xl text-lg">
            Deixar apenas um projeto evita conflitos. Agora, esse projeto que sobrou será o coração do seu portal oficial.
          </p>
        </div>
        <div className="absolute right-0 top-0 p-12 opacity-10 text-9xl italic font-black">ONE</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CHECKLIST FINAL */}
        <div className="md:col-span-2 bg-white p-10 rounded-[3rem] shadow-xl border-2 border-slate-100">
          <h3 className="text-xl font-black uppercase italic mb-8 flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-brand-red"></span>
            Checklist de Ativação Final
          </h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1">
                <div className="w-6 h-6 rounded-md border-2 border-blue-600 flex items-center justify-center bg-blue-50">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Limpeza Concluída</h4>
                <p className="text-sm text-slate-500">Projetos duplicados removidos na Vercel.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="mt-1">
                <div className="w-6 h-6 rounded-md border-2 border-blue-600 flex items-center justify-center bg-white">
                </div>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 italic">Vincular Domínio</h4>
                <p className="text-sm text-blue-700 mb-4">No projeto escolhido, vá em <strong>Settings > Domains</strong> e adicione <strong>marcelotoler.com.br</strong></p>
                <a 
                  href="https://vercel.com/dashboard" 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition"
                >
                  Abrir Dashboard Vercel
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1">
                <div className="w-6 h-6 rounded-md border-2 border-slate-300"></div>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 italic">Aguardar Propagação</h4>
                <p className="text-sm text-slate-500">O SSL pode levar até 10 minutos para ficar verde após o "Add".</p>
              </div>
            </div>
          </div>
        </div>

        {/* LEMBRETE DNS */}
        <div className="bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-200 flex flex-col">
          <h3 className="font-black uppercase italic text-sm mb-6 text-slate-500">Dados Técnicos (Registro.br)</h3>
          <p className="text-[11px] text-slate-400 mb-6 leading-relaxed">Se a Vercel pedir configuração de DNS, os valores padrão são:</p>
          
          <div className="space-y-4 mb-8">
            <div className="bg-white p-4 rounded-2xl border border-slate-200">
              <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">Entrada A</span>
              <code className="text-sm font-bold text-blue-600">76.76.21.21</code>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200">
              <span className="block text-[10px] font-black text-slate-400 uppercase mb-1">CNAME (www)</span>
              <code className="text-sm font-bold text-blue-600">cname.vercel-dns.com</code>
            </div>
          </div>

          <div className="mt-auto bg-amber-100 p-4 rounded-2xl border border-amber-200">
             <p className="text-[10px] font-bold text-amber-800 leading-tight">Dica: Se já estiver assim no Registro.br, não precisa mexer em nada lá!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 py-10">
        <button 
          onClick={() => window.location.href = 'https://marcelotoler.com.br'}
          className="group relative px-12 py-6 bg-brand-red text-white rounded-3xl font-black uppercase italic text-lg tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-red-500/20"
        >
          <span className="relative z-10">Testar Acesso ao Portal</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl"></div>
        </button>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">www.marcelotoler.com.br</p>
      </div>
    </div>
  );
};

export default DomainConfig;
