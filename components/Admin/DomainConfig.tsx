
import React from 'react';

const DomainConfig: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copiado com sucesso: ' + text);
  };

  return (
    <div className="space-y-8 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* HEADER DE STATUS VERCEL */}
      <div className="bg-[#000] text-white p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/30">Configuração de Domínio</span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></span>
                Aguardando DNS
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-tight">
              Quase no ar, Marcelo! <br/>Copie os dados abaixo.
            </h2>
            <p className="text-sm font-medium text-gray-400 leading-relaxed">
              O print que você mandou da Vercel mostra que o projeto está pronto. Agora só falta avisar a Hostinger para onde mandar os visitantes do seu domínio <strong className="text-white">.com.br</strong>.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Plataforma</p>
             <p className="text-2xl font-black tracking-tighter uppercase">Hostinger</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* GUIA DE APONTAMENTO */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 flex items-center gap-3">
              <span className="w-8 h-8 bg-black text-white rounded-xl flex items-center justify-center text-xs">01</span>
              Adicione estes registros na Hostinger:
            </h3>

            <div className="space-y-12">
              {/* REGISTRO A - DOMÍNIO RAIZ */}
              <div className="group">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex flex-col">
                     <span className="text-[12px] font-black text-slate-900 uppercase tracking-widest">Domínio Principal</span>
                     <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">marcelotoler.com.br</span>
                   </div>
                   <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[9px] font-black uppercase">Tipo A</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-3xl">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-2">Nome / Host</span>
                    <div className="flex justify-between items-center">
                      <code className="text-lg font-black text-slate-700">@</code>
                      <button onClick={() => copyToClipboard('@')} className="text-[9px] font-black uppercase text-blue-600 hover:underline">Copiar</button>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-3xl ring-2 ring-black/5">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-2">Valor / Aponta para</span>
                    <div className="flex justify-between items-center">
                      <code className="text-lg font-black text-slate-900">76.76.21.21</code>
                      <button onClick={() => copyToClipboard('76.76.21.21')} className="text-[9px] font-black uppercase text-blue-600 hover:underline">Copiar</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-100"></div>

              {/* REGISTRO CNAME - WWW */}
              <div className="group">
                <div className="flex justify-between items-center mb-6">
                   <div className="flex flex-col">
                     <span className="text-[12px] font-black text-slate-900 uppercase tracking-widest">Subdomínio WWW</span>
                     <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">www.marcelotoler.com.br</span>
                   </div>
                   <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[9px] font-black uppercase">Tipo CNAME</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-3xl">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-2">Nome / Host</span>
                    <div className="flex justify-between items-center">
                      <code className="text-lg font-black text-slate-700">www</code>
                      <button onClick={() => copyToClipboard('www')} className="text-[9px] font-black uppercase text-blue-600 hover:underline">Copiar</button>
                    </div>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-3xl ring-2 ring-emerald-500/10">
                    <span className="text-[9px] font-black text-slate-400 uppercase block mb-2">Valor / Destino</span>
                    <div className="flex justify-between items-center">
                      <code className="text-xs font-black text-slate-900 truncate mr-2">cname.vercel-dns.com</code>
                      <button onClick={() => copyToClipboard('cname.vercel-dns.com')} className="text-[9px] font-black uppercase text-emerald-600 hover:underline">Copiar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-8 rounded-[3rem] flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm border border-blue-100 flex-shrink-0">⚠️</div>
            <div>
              <p className="text-xs font-black text-blue-900 uppercase tracking-widest mb-1">Atenção na Hostinger</p>
              <p className="text-[11px] text-blue-700 leading-relaxed font-medium">
                Se você já tiver um registro <strong>Tipo A</strong> para o nome <strong>@</strong> ou um <strong>CNAME</strong> para o <strong>www</strong>, você deve **APAGÁ-LOS** primeiro antes de adicionar os novos. Caso contrário, o site não saberá qual obedecer.
              </p>
            </div>
          </div>
        </div>

        {/* BARRA LATERAL DE STATUS */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 p-8 rounded-[3rem] text-white">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Fluxo de Ativação</h4>
            <div className="space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                </div>
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Passo 1</p>
                <p className="text-xs font-bold">Domínio adicionado no Painel Admin</p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                <p className="text-[10px] font-black uppercase text-blue-400 mb-1">Passo 2 (AGORA)</p>
                <p className="text-xs font-bold">Adicionar registros no DNS da Hostinger</p>
              </div>
              <div className="relative pl-8 opacity-30">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-gray-600"></div>
                <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Passo 3</p>
                <p className="text-xs font-bold">Aguardar propagação e Certificado SSL</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
               <button 
                onClick={() => window.location.reload()}
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all shadow-xl shadow-blue-600/20 active:scale-95"
               >
                 Verificar Agora
               </button>
               <p className="text-center text-[9px] text-gray-500 mt-4 uppercase font-bold tracking-widest">Pode levar até 20 min para validar</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-[3rem]">
             <h5 className="text-[9px] font-black uppercase text-slate-400 mb-4 tracking-widest">Resumo da Vercel</h5>
             <div className="bg-slate-50 p-4 rounded-2xl text-[10px] font-mono text-slate-500 leading-relaxed">
               A: 76.76.21.21 <br/>
               CNAME: cname.vercel-dns.com
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainConfig;
