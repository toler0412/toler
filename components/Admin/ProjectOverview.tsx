
import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <h2 className="text-2xl font-bold tracking-tight">Implantação de Produção</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold hover:bg-gray-50 transition-colors">Registros de compilação</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold hover:bg-gray-50 transition-colors">Registros de tempo de execução</button>
          <button className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold hover:bg-gray-50 transition-colors flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            Reversão instantânea
          </button>
        </div>
      </div>

      {/* Main Deployment Card */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Preview Image Placeholder */}
          <div className="md:col-span-5 bg-gray-50 border-r border-gray-100 p-8 flex items-center justify-center min-h-[240px]">
            <div className="w-full aspect-video bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center p-4">
              <div className="bg-brand-red text-white px-2 py-0.5 rounded font-black text-xl mb-2">MT</div>
              <div className="w-full space-y-2">
                <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Implantação</p>
                <p className="text-sm font-medium text-gray-900 break-all">toler-b24fexynu-marcelo-tolers-projects.vercel.app</p>
              </div>
              <div className="relative">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Domínios</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-900">toler.vercel.app</p>
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  <p className="text-sm font-medium text-gray-900">Pronto</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Criado</p>
                <p className="text-sm font-medium text-gray-900">Agora mesmo, por toler0412</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fonte</p>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                  <p className="text-sm font-medium text-gray-900">main</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-8 py-3 flex items-center justify-between border-t border-gray-100">
           <div className="flex items-center gap-2">
             <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
             <span className="text-xs text-gray-600 font-medium">Configurações de implantação</span>
             <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">4 Recomendações</span>
           </div>
           <div className="flex gap-4">
              <button className="text-xs font-bold text-gray-400 hover:text-black">Implantações</button>
           </div>
        </div>
      </div>

      {/* Bottom Widgets Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-gray-900">Firewall <span className="text-gray-400 ml-1">24 horas</span></h3>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-bold text-blue-500 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Ativo · Todos os sistemas normais
          </div>
          <div className="h-24 flex items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
             <div className="text-center">
               <svg className="w-6 h-6 text-gray-300 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
               <p className="text-[10px] text-gray-400">Nenhum evento recente</p>
             </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-gray-900">Observabilidade <span className="text-gray-400 ml-1">6h</span></h3>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Solicitações de borda</p>
              <p className="text-lg font-bold">0</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Invocações de função</p>
              <p className="text-lg font-bold">0</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-gray-900">Análises</h3>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </div>
          <div className="text-center py-4">
             <p className="text-[11px] text-gray-500 mb-4">Acompanhe os visitantes e as visualizações de página.</p>
             <button className="w-full py-2 bg-black text-white rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors">
               Habilitar
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
