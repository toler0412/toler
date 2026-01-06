
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Senha Mestre: toler2025
    if (password === 'toler2025') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-8">
            <div className="bg-brand-red text-white w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black mx-auto mb-6 shadow-xl shadow-brand-red/20">
              MT
            </div>
            <h1 className="text-2xl font-black tracking-tight text-gray-900 uppercase">Acesso Restrito</h1>
            <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest">Painel Administrativo Marcelo Toler</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2 block px-1">Senha Mestre</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-gray-50 border-2 ${error ? 'border-brand-red animate-shake' : 'border-gray-100'} rounded-2xl p-4 text-center text-lg font-black focus:border-brand-dark outline-none transition-all`}
              />
              {error && <p className="text-[10px] text-brand-red font-black text-center mt-3 uppercase">Senha incorreta</p>}
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-dark text-white py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-xl active:scale-95"
            >
              Entrar no Painel
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-center gap-4">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Ambiente Seguro</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Login;
